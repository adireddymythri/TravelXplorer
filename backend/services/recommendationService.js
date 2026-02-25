import Place from '../models/Place.js';

/**
 * Rule-based recommendation engine.
 */
export const getRecommendations = async ({ interests, budget, duration, season, currentDistrict }) => {
  const query = {};

  // 1. Category Filter (Interests)
  if (interests?.length) {
    query.category = { $in: interests };
  }

  // 2. Budget Filter (Inclusive tiers for better matching)
  if (budget === 'low' || budget === 'free') {
    query.$or = [
      { entryFee: 'Free' },
      { entryFeeAmount: { $lte: 50 } }
    ];
  } else if (budget === 'medium') {
    query.$or = [
      { entryFee: 'Free' },
      { entryFeeAmount: { $lte: 200 } }
    ];
  } else if (budget === 'high') {
    // For high budget, we show everything but prioritize premium if available
    // For now, inclusive of all to prevent empty results
    query.entryFeeAmount = { $exists: true };
  }

  // 3. Season Filter
  if (season) {
    if (season !== 'Year-Round') {
      query.bestSeason = { $in: [season, 'Year-Round'] };
    } else {
      query.bestSeason = 'Year-Round';
    }
  }

  const limit = duration === 'short' ? 6 : duration === 'long' ? 15 : 10;

  // Fetch all matching places
  let places = await Place.find(query)
    .populate('district', 'name')
    .sort({ averageRating: -1, visitCount: -1 });

  // 4. Fallback Logic: If no results match strict budget, widen search
  let budgetNote = "";
  if (places.length === 0 && budget) {
    const fallbackQuery = { ...query };
    delete fallbackQuery.entryFeeAmount;
    delete fallbackQuery.$or; // Remove budget-related $or

    places = await Place.find(fallbackQuery)
      .populate('district', 'name')
      .sort({ visitCount: -1 });
    budgetNote = "Showing best available regardless of budget";
  }

  // 5. District Prioritization (if location is provided)
  if (currentDistrict) {
    const localPlaces = places.filter(p => p.district._id.toString() === currentDistrict);
    const otherPlaces = places.filter(p => p.district._id.toString() !== currentDistrict);

    // Prioritize local places, then others
    places = [...localPlaces, ...otherPlaces].slice(0, limit);
  } else {
    places = places.slice(0, limit);
  }

  // Convert to plain objects and add flag
  const results = places.map(p => {
    const obj = p.toObject();
    obj.isLocal = currentDistrict ? p.district._id.toString() === currentDistrict : false;
    return obj;
  });

  return {
    places: results,
    budgetWidened: budgetNote !== ""
  };
};
