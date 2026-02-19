import Place from '../models/Place.js';

/**
 * Rule-based recommendation engine.
 * Architecture allows future ML upgrade.
 */
export const getRecommendations = async ({ interests, budget, duration, season }) => {
  const query = {};

  if (interests?.length) {
    query.category = { $in: interests };
  }
  if (budget === 'low' || budget === 'free') {
    query.entryFee = 'Free';
  }
  if (season) {
    query.bestSeason = season;
  }

  const limit = duration === 'short' ? 5 : duration === 'long' ? 15 : 10;

  const places = await Place.find(query)
    .populate('district', 'name')
    .sort({ averageRating: -1, visitCount: -1 })
    .limit(limit);

  return places;
};
