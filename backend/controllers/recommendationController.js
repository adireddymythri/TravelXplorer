import asyncHandler from '../utils/asyncHandler.js';
import { getRecommendations } from '../services/recommendationService.js';

/**
 * @route   POST /api/recommendations
 * @desc    Get personalized recommendations
 */
export const getPersonalizedRecommendations = asyncHandler(async (req, res) => {
  const { interests, budget, duration, season } = req.body;
  const places = await getRecommendations({
    interests,
    budget,
    duration,
    season,
  });
  res.json({ success: true, data: places });
});
