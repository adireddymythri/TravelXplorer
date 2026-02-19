import express from 'express';
import {
  createPlace,
  updatePlace,
  deletePlace,
  getAnalytics,
  getReviewsForModeration,
  approveReview,
  deleteReview,
} from '../controllers/adminController.js';
import { protect } from '../middleware/auth.js';
import { admin } from '../middleware/admin.js';

const router = express.Router();

router.use(protect);
router.use(admin);

router.post('/places', createPlace);
router.put('/places/:id', updatePlace);
router.delete('/places/:id', deletePlace);
router.get('/analytics', getAnalytics);
router.get('/reviews', getReviewsForModeration);
router.put('/reviews/:id/approve', approveReview);
router.delete('/reviews/:id', deleteReview);

export default router;
