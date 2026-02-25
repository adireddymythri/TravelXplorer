import express from 'express';
import { createPlan, getMyPlans, deletePlan, getPlanById } from '../controllers/planController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.use(protect); // All plan routes are protected

router.route('/')
    .post(createPlan)
    .get(getMyPlans);

router.route('/:id')
    .get(getPlanById)
    .delete(deletePlan);

export default router;
