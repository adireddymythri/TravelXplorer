import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Place from './models/Place.js';

dotenv.config();

async function checkImages() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const place = await Place.findOne({ name: 'Nemam Beach' });
        if (place) {
            console.log('--- Nemam Beach Images ---');
            console.log(JSON.stringify(place.images, null, 2));
        } else {
            console.log('Nemam Beach not found');
        }

        const uppada = await Place.findOne({ name: 'Uppada Beach' });
        if (uppada) {
            console.log('--- Uppada Beach Images ---');
            console.log(JSON.stringify(uppada.images, null, 2));
        }
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

checkImages();
