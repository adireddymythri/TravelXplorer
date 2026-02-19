import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Place from '../models/Place.js';
import District from '../models/District.js';

dotenv.config();

const KAKINADA_PLACES = [
    {
        name: 'Coringa Wildlife Sanctuary',
        description: 'One of the largest mangrove forests in India. Famous for its wooden walkway through mangroves, boating, and spotting saltwater crocodiles and rare birds.',
        category: 'Wildlife & Nature',
        address: 'Near Kakinada-Yanam Road, Coringa, Andhra Pradesh',
        location: { type: 'Point', coordinates: [82.23, 16.80] },
        entryFee: 'Paid',
        entryFeeAmount: 50,
        bestSeason: ['Winter', 'Year-Round'],
        featured: true
    },
    {
        name: 'Uppada Beach',
        description: 'A beautiful coastal stretch known for its wide shore and silver sands. Famous for the nearby Uppada Silk Sarees and stunning sunset views.',
        category: 'Beaches & Coastal',
        address: 'Uppada, Kakinada District, Andhra Pradesh',
        location: { type: 'Point', coordinates: [82.33, 17.08] },
        entryFee: 'Free',
        bestSeason: ['Winter', 'Summer']
    },
    {
        name: 'Annavaram Satyanarayana Swamy Temple',
        description: 'A world-famous hilltop temple dedicated to Lord Satyanarayana Swamy. It is one of the most visited pilgrimage sites in Andhra Pradesh.',
        category: 'Temples & Religious',
        address: 'Annavaram, Kakinada District, Andhra Pradesh',
        location: { type: 'Point', coordinates: [82.40, 17.28] },
        entryFee: 'Free',
        bestSeason: ['Year-Round'],
        featured: true
    },
    {
        name: 'Draksharamam Bheemeshwara Swamy Temple',
        description: 'One of the five Pancharama Kshetras. Known as the "Dakshina Kashi", this massive 9th-century temple is dedicated to Lord Shiva.',
        category: 'Temples & Religious',
        address: 'Draksharamam, Kakinada District, Andhra Pradesh',
        location: { type: 'Point', coordinates: [82.06, 16.79] },
        entryFee: 'Free',
        bestSeason: ['Year-Round']
    },
    {
        name: 'Hope Island',
        description: 'A 16km long natural sand spit that protects Kakinada port. A quiet, pristine spot accessible by boat from Kakinada Port.',
        category: 'Unique Local Experiences',
        address: 'Kakinada Bay, Kakinada, Andhra Pradesh',
        location: { type: 'Point', coordinates: [82.35, 16.97] },
        entryFee: 'Paid',
        entryFeeAmount: 200,
        bestSeason: ['Winter']
    }
];

async function seedKakinada() {
    try {
        if (!process.env.MONGODB_URI) {
            console.error('MONGODB_URI is missing in .env');
            process.exit(1);
        }

        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB...');

        const district = await District.findOne({ name: 'Kakinada' });
        if (!district) {
            console.error('Kakinada District not found! Please run seedDistricts.js first.');
            process.exit(1);
        }

        for (const placeData of KAKINADA_PLACES) {
            await Place.findOneAndUpdate(
                { name: placeData.name },
                { ...placeData, district: district._id },
                { upsert: true, new: true }
            );
            console.log(`Added/Updated: ${placeData.name}`);
        }

        console.log('Successfully seeded Kakinada data!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
}

seedKakinada();
