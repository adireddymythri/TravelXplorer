import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Place from './models/Place.js';

dotenv.config();

const API_KEY = process.env.OPENWEATHER_API_KEY;

async function checkWeather() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const places = await Place.find();
        console.log(`Testing weather for ${places.length} places...`);

        for (const p of places) {
            const coords = p.location?.coordinates;
            if (!coords || coords.length !== 2) {
                console.log(`❌ ${p.name}: Missing coordinates`);
                continue;
            }

            const [lng, lat] = coords;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

            try {
                const res = await fetch(url);
                const data = await res.json();
                if (res.ok) {
                    console.log(`✅ ${p.name}: ${data.main.temp}°C, ${data.weather[0].main}`);
                } else {
                    console.log(`❌ ${p.name}: API Error - ${data.message} (lat: ${lat}, lon: ${lng})`);
                }
            } catch (err) {
                console.log(`❌ ${p.name}: Fetch Error - ${err.message}`);
            }
        }
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}
checkWeather();
