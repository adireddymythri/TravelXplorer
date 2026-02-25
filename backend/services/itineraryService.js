import Place from '../models/Place.js';

/**
 * Helper to calculate Haversine distance between two points [lon, lat] in KM
 */
const getDistance = (coord1, coord2) => {
  const toRad = (value) => (value * Math.PI) / 180;
  const [lon1, lat1] = coord1;
  const [lon2, lat2] = coord2;

  const R = 6371; // Earth's radius in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

/**
 * Rule-based itinerary planner with Path Optimization (Chained Nearest Neighbor).
 * Input: district IDs, days, interests
 * Output: Day-wise optimized list of places
 */
export const generateItinerary = async ({ districts, days, interests }) => {
  const query = {};
  if (districts?.length) query.district = { $in: districts };
  if (interests?.length) query.category = { $in: interests };

  // Fetch places sorted by popularity initially to pick best starting points
  const allPlaces = await Place.find(query)
    .populate('district', 'name')
    .sort({ visitCount: -1, averageRating: -1 });

  if (allPlaces.length === 0) return [];

  const totalDays = Math.max(1, days);
  const placesPerDay = Math.ceil(allPlaces.length / totalDays);
  const itinerary = [];
  let remainingPlaces = [...allPlaces];

  for (let d = 0; d < totalDays; d++) {
    if (remainingPlaces.length === 0) break;

    const dayPlaces = [];

    // 1. Pick the most popular available place as the "Anchor/Start" for the day
    let currentPlace = remainingPlaces[0];
    dayPlaces.push(currentPlace);
    remainingPlaces.splice(0, 1);

    // 2. Chained Nearest Neighbor: Find the next closest place to the PREVIOUS one
    while (dayPlaces.length < placesPerDay && remainingPlaces.length > 0) {
      let nearestIndex = -1;
      let minDistance = Infinity;

      for (let i = 0; i < remainingPlaces.length; i++) {
        const dist = getDistance(currentPlace.location.coordinates, remainingPlaces[i].location.coordinates);
        if (dist < minDistance) {
          minDistance = dist;
          nearestIndex = i;
        }
      }

      if (nearestIndex !== -1) {
        currentPlace = remainingPlaces[nearestIndex];
        dayPlaces.push(currentPlace);
        remainingPlaces.splice(nearestIndex, 1);
      } else {
        break;
      }
    }

    itinerary.push({
      day: d + 1,
      places: dayPlaces,
      explanation: `Day ${d + 1}: Starting at ${dayPlaces[0].name}, we've charted a compact ${dayPlaces.length}-stop route covering nearby attractions like ${dayPlaces[dayPlaces.length - 1].name} to minimize your travel time.`,
    });
  }

  return itinerary;
};
