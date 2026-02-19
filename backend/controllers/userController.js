import User from '../models/User.js';
import asyncHandler from '../utils/asyncHandler.js';

/**
 * @route   PUT /api/users/favorites/:placeId
 * @desc    Toggle favorite (add/remove)
 */
export const toggleFavorite = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  const placeId = req.params.placeId;

  const idx = user.favorites.indexOf(placeId);
  if (idx === -1) {
    user.favorites.push(placeId);
  } else {
    user.favorites.splice(idx, 1);
  }
  await user.save();

  const updated = await User.findById(req.user.id)
    .select('-password')
    .populate('favorites', 'name images district category');

  res.json({ success: true, favorites: updated.favorites });
});
