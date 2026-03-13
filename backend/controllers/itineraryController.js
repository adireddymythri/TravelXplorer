import asyncHandler from '../utils/asyncHandler.js';
import { generateItinerary } from '../services/itineraryService.js';

/**
 * @route   POST /api/itinerary
 * @desc    Generate travel itinerary
 */

export const createItinerary = asyncHandler(async (req, res) => {
  const { districts, days, interests } = req.body;
  const itinerary = await generateItinerary({
    districts: districts || [],
    days: days || 3,
    interests: interests || [],
  });
  res.json({ success: true, data: itinerary });
});
