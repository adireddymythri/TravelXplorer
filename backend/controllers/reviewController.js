import Review from '../models/Review.js';
import Place from '../models/Place.js';
import asyncHandler from '../utils/asyncHandler.js';

/**
 * Recalculate and update average rating for a place
 */
const updatePlaceRating = async (placeId) => {
  const stats = await Review.aggregate([
    { $match: { place: placeId, approved: true } },
    { $group: { _id: '$place', avgRating: { $avg: '$rating' }, count: { $sum: 1 } } },
  ]);
  if (stats.length > 0) {
    await Place.findByIdAndUpdate(placeId, {
      $set: { averageRating: stats[0].avgRating, reviewCount: stats[0].count },
    });
  }
};

/**
 * @route   GET /api/places/:placeId/reviews
 * @desc    Get reviews for a place
 */
export const getReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({ place: req.params.placeId, approved: true })
    .populate('user', 'name')
    .sort('-createdAt');
  res.json({ success: true, data: reviews });
});

/**
 * @route   POST /api/places/:placeId/reviews
 * @desc    Add review (protected)
 */
export const addReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const place = await Place.findById(req.params.placeId);
  if (!place) {
    res.status(404);
    throw new Error('Place not found');
  }

  const existing = await Review.findOne({
    place: req.params.placeId,
    user: req.user.id,
  });
  if (existing) {
    res.status(400);
    throw new Error('You have already reviewed this place');
  }

  const review = await Review.create({
    place: req.params.placeId,
    user: req.user.id,
    rating,
    comment,
    approved: true, // Auto-approve; admin can moderate later
  });

  await review.populate('user', 'name');
  await updatePlaceRating(req.params.placeId);

  res.status(201).json({ success: true, data: review });
});
