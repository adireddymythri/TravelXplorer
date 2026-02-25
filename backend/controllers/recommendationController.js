import asyncHandler from '../utils/asyncHandler.js';
import { getRecommendations } from '../services/recommendationService.js';

/**
 * @route   POST /api/recommendations
 * @desc    Get personalized recommendations
 */
export const getPersonalizedRecommendations = asyncHandler(async (req, res) => {
  const { interests, budget, duration, season, currentDistrict } = req.body;
  const recommendationData = await getRecommendations({
    interests,
    budget,
    duration,
    season,
    currentDistrict,
  });
  res.json({ success: true, ...recommendationData });
});
