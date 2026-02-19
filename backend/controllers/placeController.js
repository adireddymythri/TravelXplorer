import Place from '../models/Place.js';
import asyncHandler from '../utils/asyncHandler.js';

/**
 * @route   GET /api/places
 * @desc    Get all places with filters & pagination
 */
export const getPlaces = asyncHandler(async (req, res) => {
  const {
    district,
    category,
    entryFee,
    bestSeason,
    search,
    featured,
    page = 1,
    limit = 12,
    sort = '-createdAt',
  } = req.query;

  const query = {};

  if (district) query.district = district;
  if (category) query.category = category;
  if (entryFee) query.entryFee = entryFee;
  if (featured === 'true') query.featured = true;
  if (bestSeason) query.bestSeason = bestSeason;

  if (search) {
    query.$or = [
      { name: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } },
    ];
  }

  const skip = (Number(page) - 1) * Number(limit);

  const [places, total] = await Promise.all([
    Place.find(query).populate('district', 'name').sort(sort).skip(skip).limit(Number(limit)),
    Place.countDocuments(query),
  ]);

  res.json({
    success: true,
    data: places,
    pagination: { page: Number(page), limit: Number(limit), total, pages: Math.ceil(total / limit) },
  });
});

/**
 * @route   GET /api/places/nearby/:placeId
 * @desc    Get places within 20km radius
 */
export const getNearbyPlaces = asyncHandler(async (req, res) => {
  const place = await Place.findById(req.params.placeId);
  if (!place) {
    res.status(404);
    throw new Error('Place not found');
  }

  const places = await Place.find({
    _id: { $ne: place._id },
    location: {
      $nearSphere: {
        $geometry: {
          type: 'Point',
          coordinates: place.location.coordinates,
        },
        $maxDistance: 20000, // 20km in meters
      },
    },
  })
    .limit(10)
    .populate('district', 'name')
    .select('name images category district');

  res.json({ success: true, data: places });
});

/**
 * @route   GET /api/places/featured
 * @desc    Get featured places for landing page
 */
export const getFeaturedPlaces = asyncHandler(async (req, res) => {
  const places = await Place.find({ featured: true })
    .populate('district', 'name')
    .limit(8);
  res.json({ success: true, data: places });
});

/**
 * @route   GET /api/places/:id
 * @desc    Get single place by ID
 */
export const getPlaceById = asyncHandler(async (req, res) => {
  const place = await Place.findById(req.params.id)
    .populate('district', 'name code')
    .populate({
      path: 'reviews',
      match: { approved: true },
      populate: { path: 'user', select: 'name' },
    });

  if (!place) {
    res.status(404);
    throw new Error('Place not found');
  }

  // Increment visit count
  place.visitCount += 1;
  await place.save({ validateBeforeSave: false });

  res.json({ success: true, data: place });
});
