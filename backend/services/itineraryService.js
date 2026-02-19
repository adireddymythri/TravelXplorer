import Place from '../models/Place.js';

/**
 * Rule-based itinerary planner.
 * Input: district IDs, days, interests
 * Output: Day-wise optimized list of places
 */
export const generateItinerary = async ({ districts, days, interests }) => {
  const query = {};
  if (districts?.length) query.district = { $in: districts };
  if (interests?.length) query.category = { $in: interests };

  const places = await Place.find(query)
    .populate('district', 'name')
    .sort({ visitCount: -1, favoriteCount: -1 });

  const placesPerDay = Math.ceil(places.length / Math.max(1, days)) || 4;
  const itinerary = [];

  for (let d = 0; d < days; d++) {
    const dayPlaces = places.slice(d * placesPerDay, (d + 1) * placesPerDay);
    itinerary.push({
      day: d + 1,
      places: dayPlaces,
      explanation: `Day ${d + 1}: Visiting ${dayPlaces.length} locations based on your interests and popularity.`,
    });
  }

  return itinerary;
};
