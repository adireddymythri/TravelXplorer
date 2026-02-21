import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Place from './models/Place.js';
import District from './models/District.js';

dotenv.config();

async function checkDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB...');

        const places = await Place.find().populate('district', 'name');
        console.log(`Total Places in DB: ${places.length}`);

        places.forEach(p => {
            console.log(`- ${p.name} (District: ${p.district?.name || 'Unknown'}) - Images: ${p.images.length}`);
        });

        const districts = await District.find();
        console.log(`Total Districts in DB: ${districts.length}`);
        districts.forEach(d => console.log(`- ${d.name}`));

        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

checkDB();
