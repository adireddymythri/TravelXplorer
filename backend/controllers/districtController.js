import District from '../models/District.js';
import asyncHandler from '../utils/asyncHandler.js';

/**
 * @route   GET /api/districts
 * @desc    Get all districts
 */
export const getDistricts = asyncHandler(async (req, res) => {
  const districts = await District.find().sort('name');
  res.json({ success: true, data: districts });
});
