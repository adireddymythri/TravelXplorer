import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from './config/db.js';
import errorHandler from './utils/errorHandler.js';

import authRoutes from './routes/authRoutes.js';
import placeRoutes from './routes/placeRoutes.js';
import userRoutes from './routes/userRoutes.js';
import districtRoutes from './routes/districtRoutes.js';
import itineraryRoutes from './routes/itineraryRoutes.js';
import recommendationRoutes from './routes/recommendationRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import miscRoutes from './routes/miscRoutes.js';
import planRoutes from './routes/planRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.use('/api/auth', authRoutes);
app.use('/api/places', placeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/districts', districtRoutes);
app.use('/api/itinerary', itineraryRoutes);
app.use('/api/recommendations', recommendationRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/misc', miscRoutes);
app.use('/api/plans', planRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
