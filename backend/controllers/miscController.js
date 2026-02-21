import asyncHandler from '../utils/asyncHandler.js';
import { getCurrentWeather } from '../services/weatherService.js';

/**
 * @route   GET /api/weather
 * @desc    Get current weather for coordinates
 * @access  Public
 */
export const getWeather = asyncHandler(async (req, res) => {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
        res.status(400);
        throw new Error('Latitude and longitude are required');
    }

    const weather = await getCurrentWeather(lat, lon);
    res.json({ success: true, data: weather });
});
