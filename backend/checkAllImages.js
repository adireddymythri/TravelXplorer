import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Place from './models/Place.js';
import District from './models/District.js';

dotenv.config();

async function checkAllImages() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const places = await Place.find().populate('district', 'name');

        console.log('--- Current Images in DB ---');
        places.forEach(p => {
            console.log(`Place: ${p.name}`);
            console.log(`Images: ${JSON.stringify(p.images, null, 2)}`);
            console.log('---------------------------');
        });

        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

checkAllImages();
