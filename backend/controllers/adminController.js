import Place from '../models/Place.js';
import District from '../models/District.js';
import Review from '../models/Review.js';
import asyncHandler from '../utils/asyncHandler.js';
import { uploadFromBuffer, deleteImage } from '../utils/cloudinary.js';

/**
 * @route   POST /api/admin/places/:id/images
 * @desc    Upload images for a place
 */
export const uploadPlaceImages = asyncHandler(async (req, res) => {
  const place = await Place.findById(req.params.id);
  if (!place) {
    res.status(404);
    throw new Error('Place not found');
  }

  if (!req.files || req.files.length === 0) {
    res.status(400);
    throw new Error('Please upload at least one image');
  }

  const uploadPromises = req.files.map((file) => uploadFromBuffer(file.buffer));
  const results = await Promise.all(uploadPromises);

  place.images.push(...results);
  await place.save();

  res.json({ success: true, data: place.images });
});

/**
 * @route   DELETE /api/admin/places/:id/images/:publicId
 * @desc    Delete an image from a place
 */
export const deletePlaceImage = asyncHandler(async (req, res) => {
  const place = await Place.findById(req.params.id);
  if (!place) {
    res.status(404);
    throw new Error('Place not found');
  }

  // Remove from Cloudinary
  await deleteImage(req.params.publicId);

  // Remove from Database
  place.images = place.images.filter((img) => img.publicId !== req.params.publicId);
  await place.save();

  res.json({ success: true, message: 'Image deleted' });
});

/**
 * @route   POST /api/admin/places
 * @desc    Create place (admin)
 */
export const createPlace = asyncHandler(async (req, res) => {
  const place = await Place.create(req.body);
  res.status(201).json({ success: true, data: place });
});

/**
 * @route   PUT /api/admin/places/:id
 * @desc    Update place (admin)
 */
export const updatePlace = asyncHandler(async (req, res) => {
  const place = await Place.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!place) {
    res.status(404);
    throw new Error('Place not found');
  }
  res.json({ success: true, data: place });
});

/**
 * @route   DELETE /api/admin/places/:id
 * @desc    Delete place (admin)
 */
export const deletePlace = asyncHandler(async (req, res) => {
  const place = await Place.findByIdAndDelete(req.params.id);
  if (!place) {
    res.status(404);
    throw new Error('Place not found');
  }
  await Review.deleteMany({ place: req.params.id });
  res.json({ success: true, message: 'Place deleted' });
});

/**
 * @route   GET /api/admin/analytics
 * @desc    Analytics dashboard
 */
export const getAnalytics = asyncHandler(async (req, res) => {
  const [mostVisited, mostFavorited, topRated] = await Promise.all([
    Place.find().sort({ visitCount: -1 }).limit(10).populate('district', 'name'),
    Place.find().sort({ favoriteCount: -1 }).limit(10).populate('district', 'name'),
    Place.find({ reviewCount: { $gt: 0 } }).sort({ averageRating: -1 }).limit(10).populate('district', 'name'),
  ]);

  res.json({
    success: true,
    data: { mostVisited, mostFavorited, topRated },
  });
});

/**
 * @route   GET /api/admin/reviews
 * @desc    Get all reviews for moderation
 */
export const getReviewsForModeration = asyncHandler(async (req, res) => {
  const reviews = await Review.find()
    .populate('place', 'name')
    .populate('user', 'name email')
    .sort('-createdAt');
  res.json({ success: true, data: reviews });
});

/**
 * @route   PUT /api/admin/reviews/:id/approve
 * @desc    Approve review
 */
export const approveReview = asyncHandler(async (req, res) => {
  const review = await Review.findByIdAndUpdate(
    req.params.id,
    { approved: true },
    { new: true }
  );
  if (!review) {
    res.status(404);
    throw new Error('Review not found');
  }
  res.json({ success: true, data: review });
});

/**
 * @route   DELETE /api/admin/reviews/:id
 * @desc    Delete review
 */
export const deleteReview = asyncHandler(async (req, res) => {
  const review = await Review.findByIdAndDelete(req.params.id);
  if (!review) {
    res.status(404);
    throw new Error('Review not found');
  }
  res.json({ success: true, message: 'Review deleted' });
});
