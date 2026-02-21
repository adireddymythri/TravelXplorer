import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Place from './models/Place.js';

dotenv.config();

async function check() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const places = await Place.find();
        console.log(`Checking ${places.length} places for coordinates...`);
        places.forEach(p => {
            const hasCoords = p.location && p.location.coordinates && p.location.coordinates.length === 2;
            const lat = hasCoords ? p.location.coordinates[1] : null;
            const lng = hasCoords ? p.location.coordinates[0] : null;
            console.log(`${hasCoords ? '✅' : '❌'} ${p.name}: [${lng}, ${lat}]`);
        });
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}
check();
