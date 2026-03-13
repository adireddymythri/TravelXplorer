import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Place from '../models/Place.js';
import District from '../models/District.js';

dotenv.config();

const CHITTOOR_PLACES = [
    // User will add places later
    [
        {
            "name": "Kanipakam Vinayaka Temple",
            "description": "Kanipakam Vinayaka Temple is a famous temple dedicated to Lord Ganesha known for its self-manifested (Swayambhu) idol believed to be growing in size. It attracts thousands of devotees throughout the year.",
            "category": "Temple",
            "address": "Kanipakam Village, Chittoor District, Andhra Pradesh",
            "timings": "4:00 AM – 9:30 PM",
            "operationalDays": "All Days",
            "entryFee": "Free",
            "entryFeeAmount": 0,
            "bestSeason": ["All Seasons", "Vinayaka Chavithi Festival"],
            "images": [{ "url": "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773304941/travelxplorer/places/tbbrsx3uahvpffzgmx3d.jpg", "publicId": "travelxplorer/places/tbbrsx3uahvpffzgmx3d" }],
            "dressCode": "Traditional attire preferred",
            "specialRules": ["Footwear not allowed inside temple", "Follow temple queue system"],
            "foodRecommendations": ["Temple prasadam", "Local vegetarian restaurants"],
            "nearbyAttractions": ["Chandragiri Fort", "Chittoor Town"],
            "crowdLevel": "High",
            "weatherSensitive": false,
            "location": { "type": "Point", "coordinates": [79.0425, 13.2665] },
            "featured": true
        },

        {
            "name": "Sri Varadaraja Swamy Temple",
            "description": "Ancient temple in Chittoor dedicated to Lord Vishnu and an important local pilgrimage site.",
            "category": "Temple",
            "address": "Chittoor Town, Andhra Pradesh",
            "timings": "6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",
            "operationalDays": "All Days",
            "entryFee": "Free",
            "entryFeeAmount": 0,
            "bestSeason": ["Winter", "Festival Days"],
            "images": [{ "url": "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773305038/travelxplorer/places/ivkzlgs8mctpqbdggltc.avif", "publicId": "travelxplorer/places/ivkzlgs8mctpqbdggltc" }],
            "dressCode": "Traditional attire recommended",
            "specialRules": ["Remove footwear before entering"],
            "foodRecommendations": ["Local South Indian restaurants"],
            "nearbyAttractions": ["Chittoor Municipal Park"],
            "crowdLevel": "Moderate",
            "weatherSensitive": false,
            "location": { "type": "Point", "coordinates": [79.0970, 13.2170] },
            "featured": false
        },

        {
            "name": "Veeranjaneya Swamy Temple Aragonda",
            "description": "Popular Hanuman temple located in Aragonda village visited by devotees seeking blessings for strength and protection.",
            "category": "Temple",
            "address": "Aragonda Village, Chittoor District, Andhra Pradesh",
            "timings": "6:00 AM – 8:00 PM",
            "operationalDays": "All Days",
            "entryFee": "Free",
            "entryFeeAmount": 0,
            "bestSeason": ["Winter", "Hanuman Jayanti"],
            "images": [{ "url": "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773305113/travelxplorer/places/icxjhpu05czgcv0e0aut.jpg", "publicId": "travelxplorer/places/icxjhpu05czgcv0e0aut" }],
            "dressCode": "Traditional attire preferred",
            "specialRules": ["Maintain silence inside temple premises"],
            "foodRecommendations": ["Local eateries"],
            "nearbyAttractions": ["Gangadhara Nellore Rural Areas"],
            "crowdLevel": "Moderate",
            "weatherSensitive": false,
            "location": { "type": "Point", "coordinates": [79.1500, 13.3500] },
            "featured": false
        },

        {
            "name": "Mogili Shiva Temple",
            "description": "Ancient temple dedicated to Lord Shiva located in Mogili village known for its spiritual significance and historic architecture.",
            "category": "Temple",
            "address": "Mogili Village, Chittoor District, Andhra Pradesh",
            "timings": "6:00 AM – 7:30 PM",
            "operationalDays": "All Days",
            "entryFee": "Free",
            "entryFeeAmount": 0,
            "bestSeason": ["Winter", "Mahashivaratri Festival"],
            "images": [{ "url": "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773305290/travelxplorer/places/w2xx3o9gcuqjvrjlud9w.avif", "publicId": "travelxplorer/places/w2xx3o9gcuqjvrjlud9w" }],
            "dressCode": "Traditional attire recommended",
            "specialRules": ["Remove footwear before entering temple"],
            "foodRecommendations": ["Local village food"],
            "nearbyAttractions": ["Palamaner Forest Areas"],
            "crowdLevel": "Low",
            "weatherSensitive": false,
            "location": { "type": "Point", "coordinates": [78.7500, 13.2500] },
            "featured": false
        },

        {
            "name": "Kaundinya Wildlife Sanctuary",
            "description": "Kaundinya Wildlife Sanctuary is a protected forest reserve famous for its population of wild Asian elephants and rich biodiversity.",
            "category": "Nature & Scenic",
            "address": "Kaundinya Wildlife Sanctuary, Chittoor District, Andhra Pradesh",
            "timings": "6:00 AM – 5:30 PM",
            "operationalDays": "All Days",
            "entryFee": "Paid",
            "entryFeeAmount": 100,
            "bestSeason": ["Winter", "Post Monsoon"],
            "images": [{ "url": "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773305364/travelxplorer/places/y17nktyl7q3vn6jmp0as.jpg", "publicId": "travelxplorer/places/y17nktyl7q3vn6jmp0as" }],
            "dressCode": "Outdoor clothing",
            "specialRules": ["No littering", "Follow forest department instructions"],
            "foodRecommendations": ["Packed food recommended"],
            "nearbyAttractions": ["Palamaner Forest Areas"],
            "crowdLevel": "Moderate",
            "weatherSensitive": true,
            "location": { "type": "Point", "coordinates": [78.9500, 13.2500] },
            "featured": true
        },

        {
            "name": "Palamaner Forest Areas",
            "description": "Forest regions around Palamaner known for scenic landscapes and rich vegetation.",
            "category": "Nature & Scenic",
            "address": "Palamaner Region, Chittoor District",
            "timings": "6:00 AM – 6:00 PM",
            "operationalDays": "All Days",
            "entryFee": "Free",
            "entryFeeAmount": 0,
            "bestSeason": ["Monsoon", "Winter"],
            "images": [{ "url": "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773305451/travelxplorer/places/iig7th9pdwlrxrwyzpil.jpg", "publicId": "travelxplorer/places/iig7th9pdwlrxrwyzpil" }],
            "dressCode": "Outdoor clothing",
            "specialRules": ["Avoid entering restricted forest areas"],
            "foodRecommendations": ["Local roadside eateries"],
            "nearbyAttractions": ["Kaundinya Wildlife Sanctuary"],
            "crowdLevel": "Low",
            "weatherSensitive": true,
            "location": { "type": "Point", "coordinates": [78.7505, 13.2050] },
            "featured": false
        },

        {
            "name": "Gangadhara Nellore Rural Landscapes",
            "description": "Countryside landscapes with agricultural fields and traditional villages around Gangadhara Nellore.",
            "category": "Nature & Scenic",
            "address": "Gangadhara Nellore Region, Chittoor District",
            "timings": "Open Area",
            "operationalDays": "All Days",
            "entryFee": "Free",
            "entryFeeAmount": 0,
            "bestSeason": ["Monsoon", "Winter"],
            "images": [{ "url": "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773305546/travelxplorer/places/lsciv8almawfop9olvrg.webp", "publicId": "travelxplorer/places/lsciv8almawfop9olvrg" }],
            "dressCode": "Casual",
            "specialRules": ["Respect local communities"],
            "foodRecommendations": ["Village food"],
            "nearbyAttractions": ["Aragonda Temple"],
            "crowdLevel": "Low",
            "weatherSensitive": true,
            "location": { "type": "Point", "coordinates": [79.1700, 13.3000] },
            "featured": false
        },

        {
            "name": "Chandragiri Fort",
            "description": "Historic fort built during the Vijayanagara Empire and famous for its palace complex and museum.",
            "category": "Historical Site",
            "address": "Chandragiri, Chittoor District, Andhra Pradesh",
            "timings": "9:00 AM – 5:30 PM",
            "operationalDays": "All Days",
            "entryFee": "Paid",
            "entryFeeAmount": 25,
            "bestSeason": ["Winter"],
            "images": [{ "url": "", "publicId": "travelxplorer/places/chandragiri_fort" }],
            "dressCode": "Casual",
            "specialRules": ["Protect historical structures"],
            "foodRecommendations": ["Local restaurants"],
            "nearbyAttractions": ["Kanipakam Temple", "Tirupati"],
            "crowdLevel": "Moderate",
            "weatherSensitive": false,
            "location": { "type": "Point", "coordinates": [79.3180, 13.5850] },
            "featured": true
        },

        {
            "name": "Old Chittoor Town Heritage Structures",
            "description": "Historic streets and traditional architecture representing the cultural heritage of Chittoor town.",
            "category": "Historical Site",
            "address": "Old Town Chittoor, Andhra Pradesh",
            "timings": "Open Area",
            "operationalDays": "All Days",
            "entryFee": "Free",
            "entryFeeAmount": 0,
            "bestSeason": ["Winter"],
            "images": [{ "url": "https://source.unsplash.com/800x600/?heritage-town", "publicId": "travelxplorer/places/chittoor_oldtown" }],
            "dressCode": "Casual",
            "specialRules": ["Respect heritage buildings"],
            "foodRecommendations": ["Local street food"],
            "nearbyAttractions": ["Chittoor Municipal Park"],
            "crowdLevel": "Moderate",
            "weatherSensitive": false,
            "location": { "type": "Point", "coordinates": [79.0970, 13.2172] },
            "featured": false
        },

        {
            "name": "Chittoor Municipal Park",
            "category": "Park",
            "description": "Public park in Chittoor town used for relaxation, morning walks, and family outings.",
            "address": "Chittoor Town, Andhra Pradesh",
            "timings": "6:00 AM – 8:00 PM",
            "operationalDays": "All Days",
            "entryFee": "Free",
            "entryFeeAmount": 0,
            "bestSeason": ["Winter"],
            "images": [{ "url": "https://source.unsplash.com/800x600/?city-park", "publicId": "travelxplorer/places/chittoor_park" }],
            "dressCode": "Casual",
            "specialRules": ["Maintain cleanliness"],
            "foodRecommendations": ["Nearby cafes"],
            "nearbyAttractions": ["Chittoor Bazaar"],
            "crowdLevel": "Moderate",
            "weatherSensitive": false,
            "location": { "type": "Point", "coordinates": [79.0975, 13.2165] },
            "featured": false
        },

        {
            "name": "Gangadhara Nellore Local Parks",
            "category": "Park",
            "description": "Small local parks in Gangadhara Nellore town used by residents for recreation.",
            "address": "Gangadhara Nellore, Chittoor District",
            "timings": "6:00 AM – 8:00 PM",
            "operationalDays": "All Days",
            "entryFee": "Free",
            "entryFeeAmount": 0,
            "bestSeason": ["Winter"],
            "images": [{ "url": "https://source.unsplash.com/800x600/?green-park", "publicId": "travelxplorer/places/gangadhara_park" }],
            "dressCode": "Casual",
            "specialRules": ["Keep park clean"],
            "foodRecommendations": ["Local food stalls"],
            "nearbyAttractions": ["Gangadhara Nellore Market"],
            "crowdLevel": "Low",
            "weatherSensitive": false,
            "location": { "type": "Point", "coordinates": [79.1650, 13.3050] },
            "featured": false
        },

        {
            "name": "Palamaner Town Parks",
            "category": "Park",
            "description": "Public parks in Palamaner town offering greenery and relaxing spaces for visitors.",
            "address": "Palamaner Town, Chittoor District",
            "timings": "6:00 AM – 8:00 PM",
            "operationalDays": "All Days",
            "entryFee": "Free",
            "entryFeeAmount": 0,
            "bestSeason": ["Winter"],
            "images": [{ "url": "https://source.unsplash.com/800x600/?town-park", "publicId": "travelxplorer/places/palamaner_park" }],
            "dressCode": "Casual",
            "specialRules": ["Maintain park cleanliness"],
            "foodRecommendations": ["Nearby restaurants"],
            "nearbyAttractions": ["Palamaner Forest"],
            "crowdLevel": "Low",
            "weatherSensitive": false,
            "location": { "type": "Point", "coordinates": [78.7480, 13.2000] },
            "featured": false
        },

        {
            "name": "Chittoor Main Bazaar",
            "category": "Shopping",
            "description": "Main shopping street of Chittoor known for clothing, groceries, and local products.",
            "address": "Chittoor Main Bazaar, Andhra Pradesh",
            "timings": "9:00 AM – 9:00 PM",
            "operationalDays": "All Days",
            "entryFee": "Free",
            "entryFeeAmount": 0,
            "bestSeason": ["Festival Days"],
            "images": [{ "url": "https://source.unsplash.com/800x600/?bazaar-market", "publicId": "travelxplorer/places/chittoor_bazaar" }],
            "dressCode": "Casual",
            "specialRules": ["Crowded during evenings"],
            "foodRecommendations": ["Street food stalls"],
            "nearbyAttractions": ["Chittoor Municipal Park"],
            "crowdLevel": "High",
            "weatherSensitive": false,
            "location": { "type": "Point", "coordinates": [79.0965, 13.2175] },
            "featured": false
        },

        {
            "name": "Palamaner Town Market",
            "category": "Shopping",
            "description": "Traditional market area in Palamaner selling vegetables, clothing, and household goods.",
            "address": "Palamaner Town, Chittoor District",
            "timings": "9:00 AM – 8:30 PM",
            "operationalDays": "All Days",
            "entryFee": "Free",
            "entryFeeAmount": 0,
            "bestSeason": ["Festival Days"],
            "images": [{ "url": "https://source.unsplash.com/800x600/?local-market", "publicId": "travelxplorer/places/palamaner_market" }],
            "dressCode": "Casual",
            "specialRules": ["Busy during weekends"],
            "foodRecommendations": ["Local snacks"],
            "nearbyAttractions": ["Palamaner Park"],
            "crowdLevel": "Moderate",
            "weatherSensitive": false,
            "location": { "type": "Point", "coordinates": [78.7475, 13.1995] },
            "featured": false
        },

        {
            "name": "Gangadhara Nellore Market",
            "category": "Shopping",
            "description": "Local market in Gangadhara Nellore known for vegetables, groceries, and rural trade.",
            "address": "Gangadhara Nellore Town, Chittoor District",
            "timings": "8:30 AM – 8:30 PM",
            "operationalDays": "All Days",
            "entryFee": "Free",
            "entryFeeAmount": 0,
            "bestSeason": ["Festival Days"],
            "images": [{ "url": "https://source.unsplash.com/800x600/?village-market", "publicId": "travelxplorer/places/gangadhara_market" }],
            "dressCode": "Casual",
            "specialRules": ["Crowded during evenings"],
            "foodRecommendations": ["Local food stalls"],
            "nearbyAttractions": ["Gangadhara Nellore Park"],
            "crowdLevel": "Moderate",
            "weatherSensitive": false,
            "location": { "type": "Point", "coordinates": [79.1660, 13.3060] },
            "featured": false
        },

        {
            "name": "Visit Kanipakam Swayambhu Vinayaka Idol",
            "category": "Unique Local Experiences",
            "description": "Experience the spiritual significance of the self-manifested Vinayaka idol at Kanipakam temple believed to grow in size over time.",
            "address": "Kanipakam Temple Complex",
            "timings": "4:00 AM – 9:30 PM",
            "operationalDays": "All Days",
            "entryFee": "Free",
            "entryFeeAmount": 0,
            "bestSeason": ["Vinayaka Chavithi", "Festival Days"],
            "images": [{ "url": "https://source.unsplash.com/800x600/?ganesha-idol", "publicId": "travelxplorer/places/kanipakam_experience" }],
            "dressCode": "Traditional attire",
            "specialRules": ["Follow temple discipline"],
            "foodRecommendations": ["Temple prasadam"],
            "nearbyAttractions": ["Chandragiri Fort"],
            "crowdLevel": "High",
            "weatherSensitive": false,
            "location": { "type": "Point", "coordinates": [79.0426, 13.2664] },
            "featured": true
        },

        {
            "name": "Wildlife Safari Kaundinya Sanctuary",
            "category": "Unique Local Experiences",
            "description": "Wildlife safari experience inside Kaundinya Wildlife Sanctuary known for its wild elephant population.",
            "address": "Kaundinya Wildlife Sanctuary",
            "timings": "6:00 AM – 5:30 PM",
            "operationalDays": "All Days",
            "entryFee": "Paid",
            "entryFeeAmount": 150,
            "bestSeason": ["Winter", "Post Monsoon"],
            "images": [{ "url": "https://source.unsplash.com/800x600/?elephant-wildlife", "publicId": "travelxplorer/places/kaundinya_safari" }],
            "dressCode": "Outdoor clothing",
            "specialRules": ["Follow forest department rules"],
            "foodRecommendations": ["Packed food"],
            "nearbyAttractions": ["Palamaner Forest"],
            "crowdLevel": "Moderate",
            "weatherSensitive": true,
            "location": { "type": "Point", "coordinates": [78.9502, 13.2498] },
            "featured": true
        },

        {
            "name": "Explore Chittoor Mango Orchards",
            "category": "Unique Local Experiences",
            "description": "Explore the famous mango orchards and fruit markets of Chittoor district which is known for mango cultivation.",
            "address": "Rural Areas of Chittoor District",
            "timings": "Daytime",
            "operationalDays": "Seasonal",
            "entryFee": "Free",
            "entryFeeAmount": 0,
            "bestSeason": ["Summer"],
            "images": [{ "url": "https://source.unsplash.com/800x600/?mango-orchard", "publicId": "travelxplorer/places/mango_orchards" }],
            "dressCode": "Casual",
            "specialRules": ["Respect private farms"],
            "foodRecommendations": ["Fresh mango products"],
            "nearbyAttractions": ["Chittoor Markets"],
            "crowdLevel": "Low",
            "weatherSensitive": true,
            "location": { "type": "Point", "coordinates": [79.0900, 13.2200] },
            "featured": false
        },

        {
            "name": "Historic Exploration Chandragiri Fort",
            "category": "Unique Local Experiences",
            "description": "Walk through the historic Chandragiri Fort and explore Vijayanagara era palaces and architecture.",
            "address": "Chandragiri Fort Complex",
            "timings": "9:00 AM – 5:30 PM",
            "operationalDays": "All Days",
            "entryFee": "Paid",
            "entryFeeAmount": 25,
            "bestSeason": ["Winter"],
            "images": [{ "url": "https://source.unsplash.com/800x600/?historic-fort-india", "publicId": "travelxplorer/places/chandragiri_experience" }],
            "dressCode": "Casual",
            "specialRules": ["Do not damage heritage structures"],
            "foodRecommendations": ["Local restaurants"],
            "nearbyAttractions": ["Kanipakam Temple", "Tirupati"],
            "crowdLevel": "Moderate",
            "weatherSensitive": false,
            "location": { "type": "Point", "coordinates": [79.3182, 13.5851] },
            "featured": true
        }
    ]
];

async function seedChittoor() {
    try {
        if (!process.env.MONGODB_URI) {
            console.error('MONGODB_URI is missing in .env');
            process.exit(1);
        }

        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB...');

        const district = await District.findOne({ name: 'Chittoor' });
        if (!district) {
            console.error('Chittoor District not found! Please run seedDistricts.js first.');
            process.exit(1);
        }

        if (CHITTOOR_PLACES.length === 0) {
            console.log('No places to seed for Chittoor yet.');
        } else {
            for (const placeData of CHITTOOR_PLACES) {
                await Place.findOneAndUpdate(
                    { name: placeData.name },
                    { ...placeData, district: district._id },
                    { upsert: true, new: true }
                );
                console.log(`Added/Updated: ${placeData.name}`);
            }
            console.log('Successfully seeded Chittoor data!');
        }

        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
}

seedChittoor();
