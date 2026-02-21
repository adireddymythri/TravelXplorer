import express from 'express';
import {
  createPlace,
  updatePlace,
  deletePlace,
  uploadPlaceImages,
  deletePlaceImage,
  getAnalytics,
  getReviewsForModeration,
  approveReview,
  deleteReview,
} from '../controllers/adminController.js';
import { protect } from '../middleware/auth.js';
import { admin } from '../middleware/admin.js';
import upload from '../middleware/upload.js';

const router = express.Router();

router.use(protect);
router.use(admin);

router.post('/places', createPlace);
router.put('/places/:id', updatePlace);
router.delete('/places/:id', deletePlace);
router.post('/places/:id/images', upload.array('images', 5), uploadPlaceImages);
router.delete('/places/:id/images/:publicId', deletePlaceImage);
router.get('/analytics', getAnalytics);
router.get('/reviews', getReviewsForModeration);
router.put('/reviews/:id/approve', approveReview);
router.delete('/reviews/:id', deleteReview);

export default router;
