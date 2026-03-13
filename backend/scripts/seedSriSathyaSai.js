import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Place from '../models/Place.js';
import District from '../models/District.js';

dotenv.config();

const SRI_SATHYA_SAI_PLACES = [
    {
        name: "Prasanthi Nilayam",
        description: "Prasanthi Nilayam is the main ashram of Sri Sathya Sai Baba located in Puttaparthi and is one of the most important spiritual centers attracting devotees from around the world.",
        category: "Temples & Religious",
        address: "Prasanthi Nilayam Ashram, Puttaparthi, Sri Sathya Sai District, Andhra Pradesh",
        timings: "5:30 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Festival Days"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773300949/travelxplorer/places/ns5chn10tyhcmd7lbqre.jpg", publicId: "travelxplorer/places/prasanthi_nilayam" }],
        dressCode: "Modest attire recommended",
        specialRules: ["Maintain silence in meditation halls"],
        foodRecommendations: ["Ashram canteen food", "Local vegetarian restaurants"],
        nearbyAttractions: ["Chitravathi River Area"],
        crowdLevel: "High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [77.8050, 14.1650] },
        featured: true
    },
    {
        name: "Bugga Ramalingeswara Swamy Temple",
        description: "Ancient temple dedicated to Lord Shiva known for its spiritual significance and traditional architecture.",
        category: "Temples & Religious",
        address: "Tadimarri Region, Sri Sathya Sai District, Andhra Pradesh",
        timings: "6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Festival Days"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773301933/travelxplorer/places/ohzzhrfl0h8n1zcuuycm.jpg", publicId: "travelxplorer/places/ohzzhrfl0h8n1zcuuycm" }],
        dressCode: "Traditional attire preferred",
        specialRules: ["Remove footwear before entering"],
        foodRecommendations: ["Local village eateries"],
        nearbyAttractions: ["Penukonda Hills"],
        crowdLevel: "Moderate",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [77.6400, 14.2600] },
        featured: false
    },
    {
        name: "Penukonda Temples",
        description: "Group of historic temples in Penukonda town associated with the Vijayanagara period.",
        category: "Temples & Religious",
        address: "Penukonda, Sri Sathya Sai District, Andhra Pradesh",
        timings: "6:00 AM – 7:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773302114/travelxplorer/places/vfdkantykzypcrkkzxds.jpg", publicId: "travelxplorer/places/vfdkantykzypcrkkzxds" }],
        dressCode: "Traditional attire recommended",
        specialRules: ["Respect heritage structures"],
        foodRecommendations: ["Local restaurants"],
        nearbyAttractions: ["Penukonda Fort"],
        crowdLevel: "Moderate",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [77.5910, 14.0830] },
        featured: false
    },
    {
        name: "Sri Lakshmi Narasimha Swamy Temple Penukonda",
        description: "Historic temple dedicated to Lord Narasimha and an important pilgrimage site in the region.",
        category: "Temples & Religious",
        address: "Penukonda, Sri Sathya Sai District, Andhra Pradesh",
        timings: "6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Festival Days"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773302588/travelxplorer/places/f1nhbuylhdxb5pbdqfr8.jpg", publicId: "travelxplorer/places/f1nhbuylhdxb5pbdqfr8" }],
        dressCode: "Traditional attire preferred",
        specialRules: ["Follow temple customs"],
        foodRecommendations: ["Local eateries"],
        nearbyAttractions: ["Penukonda Fort"],
        crowdLevel: "Moderate",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [77.5905, 14.0825] },
        featured: true
    },
    {
        name: "Penukonda Hills",
        description: "Scenic hill ranges around Penukonda offering panoramic views of the surrounding countryside.",
        category: "Wildlife & Nature",
        address: "Penukonda Hills, Sri Sathya Sai District, Andhra Pradesh",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Monsoon"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773302767/travelxplorer/places/so8enbnh67b0wusyd1ti.jpg", publicId: "travelxplorer/places/so8enbnh67b0wusyd1ti" }],
        dressCode: "Outdoor clothing",
        specialRules: ["Avoid trekking alone"],
        foodRecommendations: ["Local village food"],
        nearbyAttractions: ["Penukonda Fort"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [77.5950, 14.0850] },
        featured: false
    },
    {
        name: "Chitravathi River Area",
        description: "Sacred river area associated with stories from the childhood of Sri Sathya Sai Baba and a peaceful spiritual spot.",
        category: "Wildlife & Nature",
        address: "Chitravathi River, Puttaparthi, Sri Sathya Sai District",
        timings: "6:00 AM – 6:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Post Monsoon"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773302879/travelxplorer/places/rb1gutyucar0jg1ie0qe.jpg", publicId: "travelxplorer/places/rb1gutyucar0jg1ie0qe" }],
        dressCode: "Casual",
        specialRules: ["Maintain cleanliness"],
        foodRecommendations: ["Ashram canteen"],
        nearbyAttractions: ["Prasanthi Nilayam"],
        crowdLevel: "Moderate",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [77.8080, 14.1700] },
        featured: true
    },
    {
        name: "Hindupur Rural Landscape",
        description: "Countryside landscapes surrounding Hindupur featuring agricultural fields and traditional villages.",
        category: "Wildlife & Nature",
        address: "Hindupur Rural Area, Sri Sathya Sai District",
        timings: "Open area",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Monsoon", "Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773303021/travelxplorer/places/vykml8kvwfot6kdewbi5.jpg", publicId: "travelxplorer/places/vykml8kvwfot6kdewbi5" }],
        dressCode: "Casual",
        specialRules: ["Respect local communities"],
        foodRecommendations: ["Local village food"],
        nearbyAttractions: ["Hindupur Market"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [77.4920, 13.8290] },
        featured: false
    },
    {
        name: "Penukonda Fort",
        description: "Historic hilltop fort built during the Vijayanagara Empire and once served as the empire’s capital after Hampi.",
        category: "Historical & Archaeological",
        address: "Penukonda Fort, Sri Sathya Sai District, Andhra Pradesh",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773303065/travelxplorer/places/bahf10rsyggntatf9sge.jpg", publicId: "travelxplorer/places/bahf10rsyggntatf9sge" }],
        dressCode: "Casual",
        specialRules: ["Protect historical structures"],
        foodRecommendations: ["Local eateries"],
        nearbyAttractions: ["Penukonda Temples"],
        crowdLevel: "Moderate",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [77.5920, 14.0840] },
        featured: true
    },
    {
        name: "Penukonda Old Town Heritage",
        description: "Historic part of Penukonda with traditional streets and buildings reflecting Vijayanagara-era architecture.",
        category: "Historical & Archaeological",
        address: "Old Town Penukonda, Sri Sathya Sai District",
        timings: "Open area",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773303211/travelxplorer/places/lgsudzvsuusoalpfcc48.jpg", publicId: "travelxplorer/places/lgsudzvsuusoalpfcc48" }],
        dressCode: "Casual",
        specialRules: ["Respect heritage structures"],
        foodRecommendations: ["Local street food"],
        nearbyAttractions: ["Penukonda Fort"],
        crowdLevel: "Low",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [77.5915, 14.0835] },
        featured: false
    },
    {
        name: "Puttaparthi Park Areas",
        description: "Green park spaces around Puttaparthi town used by visitors and residents for relaxation.",
        category: "Parks & Gardens",
        address: "Puttaparthi Town, Sri Sathya Sai District",
        timings: "6:00 AM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773303368/travelxplorer/places/fz4fflqq6y00zv4atdfz.webp", publicId: "travelxplorer/places/fz4fflqq6y00zv4atdfz" }],
        dressCode: "Casual",
        specialRules: ["Maintain cleanliness"],
        foodRecommendations: ["Local cafes"],
        nearbyAttractions: ["Prasanthi Nilayam"],
        crowdLevel: "Moderate",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [77.8040, 14.1640] },
        featured: false
    },
    {
        name: "Hindupur Town Park",
        description: "Public park in Hindupur town popular for evening walks and family visits.",
        category: "Parks & Gardens",
        address: "Hindupur, Sri Sathya Sai District",
        timings: "6:00 AM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773303430/travelxplorer/places/sisixbjypcs9w0wlka8m.jpg", publicId: "travelxplorer/places/sisixbjypcs9w0wlka8m" }],
        dressCode: "Casual",
        specialRules: ["Keep park clean"],
        foodRecommendations: ["Nearby restaurants"],
        nearbyAttractions: ["Hindupur Market"],
        crowdLevel: "Moderate",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [77.4925, 13.8285] },
        featured: false
    },
    {
        name: "Penukonda Local Parks",
        description: "Small public parks in Penukonda town offering greenery and relaxation areas.",
        category: "Parks & Gardens",
        address: "Penukonda Town, Sri Sathya Sai District",
        timings: "6:00 AM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773303537/travelxplorer/places/afbeh3hc7ihby3gxfqgz.webp", publicId: "travelxplorer/places/afbeh3hc7ihby3gxfqgz" }],
        dressCode: "Casual",
        specialRules: ["Maintain park cleanliness"],
        foodRecommendations: ["Local eateries"],
        nearbyAttractions: ["Penukonda Fort"],
        crowdLevel: "Low",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [77.5900, 14.0820] },
        featured: false
    },
    {
        name: "Puttaparthi Ashram Shopping Complex",
        description: "Shopping complex inside the ashram area selling spiritual books, souvenirs, clothes, and devotional items.",
        category: "Shopping Malls",
        address: "Prasanthi Nilayam Area, Puttaparthi",
        timings: "9:00 AM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Festival Days"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773303606/travelxplorer/places/imejwltyxkuarabn9ioi.avif", publicId: "travelxplorer/places/imejwltyxkuarabn9ioi" }],
        dressCode: "Casual",
        specialRules: ["Respect ashram guidelines"],
        foodRecommendations: ["Ashram canteen"],
        nearbyAttractions: ["Prasanthi Nilayam"],
        crowdLevel: "High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [77.8048, 14.1652] },
        featured: false
    },
    {
        name: "Hindupur Commercial Market",
        description: "Busy market area in Hindupur known for textiles, electronics, and local food stalls.",
        category: "Shopping Malls",
        address: "Hindupur Town, Sri Sathya Sai District",
        timings: "9:00 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Festival Days"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773303714/travelxplorer/places/wa7iek6ihqh3x3mcvy30.webp", publicId: "travelxplorer/places/wa7iek6ihqh3x3mcvy30" }],
        dressCode: "Casual",
        specialRules: ["Crowded during evenings"],
        foodRecommendations: ["Street food stalls"],
        nearbyAttractions: ["Hindupur Park"],
        crowdLevel: "High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [77.4915, 13.8295] },
        featured: false
    },
    {
        name: "Penukonda Market",
        description: "Traditional town market selling groceries, clothing, and local goods.",
        category: "Shopping Malls",
        address: "Penukonda Town, Sri Sathya Sai District",
        timings: "9:00 AM – 8:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Festival Days"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773303850/travelxplorer/places/zjz30zb4ot5a6kdnbsrn.avif", publicId: "travelxplorer/places/zjz30zb4ot5a6kdnbsrn" }],
        dressCode: "Casual",
        specialRules: ["Busy during weekends"],
        foodRecommendations: ["Local street food"],
        nearbyAttractions: ["Penukonda Fort"],
        crowdLevel: "Moderate",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [77.5908, 14.0828] },
        featured: false
    },
    {
        name: "Meditation at Prasanthi Nilayam Ashram",
        description: "Visitors can participate in meditation sessions at the Prasanthi Nilayam Ashram for spiritual peace.",
        category: "Unique Local Experiences",
        address: "Prasanthi Nilayam, Puttaparthi",
        timings: "Morning & Evening Sessions",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773300949/travelxplorer/places/ns5chn10tyhcmd7lbqre.jpg", publicId: "travelxplorer/places/prasanthi_nilayam" }],
        dressCode: "Modest attire",
        specialRules: ["Maintain silence"],
        foodRecommendations: ["Ashram canteen"],
        nearbyAttractions: ["Chitravathi River"],
        crowdLevel: "Moderate",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [77.8051, 14.1651] },
        featured: true
    },
    {
        name: "Chitravathi River Sand Meditation Area",
        description: "Sacred sand area near the Chitravathi River connected to childhood stories of Sathya Sai Baba.",
        category: "Unique Local Experiences",
        address: "Chitravathi River Bank, Puttaparthi",
        timings: "6:00 AM – 6:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773304259/travelxplorer/places/mvqjlpbp0uqwcatb0wyx.jpg", publicId: "travelxplorer/places/mvqjlpbp0uqwcatb0wyx" }],
        dressCode: "Casual",
        specialRules: ["Maintain silence and cleanliness"],
        foodRecommendations: ["Ashram food"],
        nearbyAttractions: ["Prasanthi Nilayam"],
        crowdLevel: "Moderate",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [77.8070, 14.1705] },
        featured: true
    },
    {
        name: "Exploring Penukonda Fort Vijayanagara Heritage",
        description: "Exploring the historic Penukonda Fort which served as a capital of the Vijayanagara Empire.",
        category: "Unique Local Experiences",
        address: "Penukonda Fort",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773304349/travelxplorer/places/dmjiq9qgocprqkavgb6g.jpg", publicId: "travelxplorer/places/dmjiq9qgocprqkavgb6g" }],
        dressCode: "Casual",
        specialRules: ["Do not damage historic structures"],
        foodRecommendations: ["Local eateries"],
        nearbyAttractions: ["Penukonda Temples"],
        crowdLevel: "Moderate",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [77.5922, 14.0842] },
        featured: true
    },
    {
        name: "Spiritual Tourism in Puttaparthi Ashram Town",
        description: "Puttaparthi is known internationally as a spiritual tourism destination with visitors from many countries.",
        category: "Unique Local Experiences",
        address: "Puttaparthi Town, Sri Sathya Sai District",
        timings: "All Day",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Festival Days"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773303368/travelxplorer/places/fz4fflqq6y00zv4atdfz.webp", publicId: "travelxplorer/places/fz4fflqq6y00zv4atdfz" }],
        dressCode: "Modest attire",
        specialRules: ["Respect spiritual environment"],
        foodRecommendations: ["International vegetarian restaurants"],
        nearbyAttractions: ["Prasanthi Nilayam", "Chitravathi River"],
        crowdLevel: "High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [77.8045, 14.1655] },
        featured: true
    }
];

async function seedSriSathyaSai() {
    try {
        if (!process.env.MONGODB_URI) {
            console.error('MONGODB_URI is missing in .env');
            process.exit(1);
        }

        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB...');

        const district = await District.findOne({ name: 'Sri Sathya Sai' });
        if (!district) {
            console.error('Sri Sathya Sai District not found! Please run seedDistricts.js first.');
            process.exit(1);
        }

        if (SRI_SATHYA_SAI_PLACES.length === 0) {
            console.log('No places to seed for Sri Sathya Sai yet.');
        } else {
            for (const placeData of SRI_SATHYA_SAI_PLACES) {
                await Place.findOneAndUpdate(
                    { name: placeData.name },
                    { ...placeData, district: district._id },
                    { upsert: true, new: true }
                );
                console.log(`Added/Updated: ${placeData.name}`);
            }
            console.log('Successfully seeded Sri Sathya Sai data!');
        }

        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
}

seedSriSathyaSai();
