import dotenv from 'dotenv';
dotenv.config();

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

/**
 * Get current weather for a location
 * @param {number} lat - Latitude
 * @param {number} lon - Longitude
 * @returns {Promise<Object>} Weather data
 */
export const getCurrentWeather = async (lat, lon) => {
    if (!OPENWEATHER_API_KEY) {
        throw new Error('OpenWeather API Key is missing');
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.message || 'Failed to fetch weather');
        }

        const data = await response.json();

        return {
            temp: Math.round(data.main.temp),
            condition: data.weather[0].main,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
        };
    } catch (error) {
        if (error.name === 'AbortError') {
            console.warn('Weather Service: Fetch aborted.');
            return null;
        }

        // Handle common network errors
        const networkErrors = ['ENOTFOUND', 'ETIMEDOUT', 'ECONNREFUSED', 'EAI_AGAIN'];
        if (networkErrors.includes(error.code) || error.message.includes('fetch failed')) {
            console.warn(`Weather Service: Network issue (${error.code || 'fetch failed'}). Using fallback.`);
            return null;
        }

        console.error('Weather Service Error Details:', {
            message: error.message,
            code: error.code,
            stack: error.stack
        });

        // Don't throw for weather - it's a non-critical feature
        return null;
    }
};
