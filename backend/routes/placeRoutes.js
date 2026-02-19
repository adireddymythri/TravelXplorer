import express from 'express';
import {
  getPlaces,
  getPlaceById,
  getFeaturedPlaces,
  getNearbyPlaces,
} from '../controllers/placeController.js';
import { getReviews, addReview } from '../controllers/reviewController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.get('/featured', getFeaturedPlaces);
router.get('/nearby/:placeId', getNearbyPlaces);
router.get('/', getPlaces);
router.get('/:id', getPlaceById);
router.get('/:placeId/reviews', getReviews);
router.post('/:placeId/reviews', protect, addReview);

export default router;
