import express from 'express';
import { getPersonalizedRecommendations } from '../controllers/recommendationController.js';

const router = express.Router();

router.post('/', getPersonalizedRecommendations);

export default router;
