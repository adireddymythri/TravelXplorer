import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Place from './models/Place.js';

dotenv.config();

const API_KEY = process.env.OPENWEATHER_API_KEY;

async function checkWeather() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const places = await Place.find();
        let failures = 0;
        for (const p of places) {
            const coords = p.location?.coordinates;
            if (!coords || coords.length !== 2) {
                console.log(`❌ ${p.name}: Missing coordinates`);
                failures++;
                continue;
            }
            const [lng, lat] = coords;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
            const res = await fetch(url);
            if (!res.ok) {
                const data = await res.json();
                console.log(`❌ ${p.name}: API Error - ${data.message} (lat: ${lat}, lon: ${lng})`);
                failures++;
            }
        }
        if (failures === 0) {
            console.log('✅ All places have working weather updates.');
        } else {
            console.log(`Summary: ${failures} places failed.`);
        }
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}
checkWeather();
