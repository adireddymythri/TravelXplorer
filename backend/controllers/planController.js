import Plan from '../models/Plan.js';
import asyncHandler from '../utils/asyncHandler.js';

/**
 * @route   POST /api/plans
 * @desc    Save a new travel plan
 */
export const createPlan = asyncHandler(async (req, res) => {
    const { title, days, itinerary, districts } = req.body;

    // Extract just the IDs from the itinerary places if they are full objects
    const sanitizedItinerary = itinerary.map(day => ({
        ...day,
        places: day.places.map(p => p._id || p)
    }));

    const plan = await Plan.create({
        user: req.user.id,
        title,
        days,
        itinerary: sanitizedItinerary,
        districts
    });

    res.status(201).json({
        success: true,
        data: plan
    });
});

/**
 * @route   GET /api/plans
 * @desc    Get all plans for logged in user
 */
export const getMyPlans = asyncHandler(async (req, res) => {
    const plans = await Plan.find({ user: req.user.id })
        .populate('districts', 'name')
        .populate({
            path: 'itinerary.places',
            select: 'name images district category averageRating',
            populate: { path: 'district', select: 'name' }
        })
        .sort('-createdAt');

    res.json({
        success: true,
        count: plans.length,
        data: plans
    });
});

/**
 * @route   DELETE /api/plans/:id
 * @desc    Delete a plan
 */
export const deletePlan = asyncHandler(async (req, res) => {
    const plan = await Plan.findById(req.params.id);

    if (!plan) {
        res.status(404);
        throw new Error('Plan not found');
    }

    // Make sure user owns plan
    if (plan.user.toString() !== req.user.id && req.user.role !== 'admin') {
        res.status(401);
        throw new Error('Not authorized to delete this plan');
    }

    await plan.deleteOne();

    res.json({
        success: true,
        data: {}
    });
});

/**
 * @route   GET /api/plans/:id
 * @desc    Get single plan
 */
export const getPlanById = asyncHandler(async (req, res) => {
    const plan = await Plan.findById(req.params.id)
        .populate('districts', 'name')
        .populate({
            path: 'itinerary.places',
            select: 'name images district category averageRating',
            populate: { path: 'district', select: 'name' }
        });

    if (!plan) {
        res.status(404);
        throw new Error('Plan not found');
    }

    // Make sure user owns plan
    if (plan.user.toString() !== req.user.id && req.user.role !== 'admin') {
        res.status(401);
        throw new Error('Not authorized to view this plan');
    }

    res.json({
        success: true,
        data: plan
    });
});
