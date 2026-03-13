import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Place from '../models/Place.js';
import District from '../models/District.js';

dotenv.config();

const TIRUPATI_PLACES = [
    // User will add places later


    {
        name: "Sri Venkateswara Temple (Tirumala)",
        description: "Sri Venkateswara Temple on Tirumala Hills is one of the most visited pilgrimage centers in the world dedicated to Lord Venkateswara.",
        category: "Temples & Religious",
        address: "Tirumala Hills, Tirupati District, Andhra Pradesh",
        timings: "Open almost 24 hours (Darshan timings vary)",
        operationalDays: "All Days",
        entryFee: "Free (Special Darshan tickets available)",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Festival Days"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773157622/travelxplorer/places/nbnc8yxg1uvxstvznkpm.jpg", publicId: "travelxplorer/places/nbnc8yxg1uvxstvznkpm" }],
        dressCode: "Traditional attire recommended",
        specialRules: ["Mobile phones restricted", "Follow queue system"],
        foodRecommendations: ["TTD Anna Prasadam"],
        nearbyAttractions: ["Akasa Ganga", "Papavinasam Dam", "Silathoranam"],
        crowdLevel: "Very High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [79.3470, 13.6833] },
        featured: true
    },

    {
        name: "Sri Padmavathi Ammavari Temple",
        description: "Important temple dedicated to Goddess Padmavathi located in Tiruchanur near Tirupati.",
        category: "Temples & Religious",
        address: "Tiruchanur, Tirupati District, Andhra Pradesh",
        timings: "5:00 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Festival Days"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773157675/travelxplorer/places/vq0zzwuahaoliadjejbk.jpg", publicId: "travelxplorer/places/vq0zzwuahaoliadjejbk" }],
        dressCode: "Traditional attire preferred",
        specialRules: ["Maintain temple decorum"],
        foodRecommendations: ["Local vegetarian restaurants"],
        nearbyAttractions: ["Tirupati City", "Govindaraja Temple"],
        crowdLevel: "High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [79.4367, 13.6289] },
        featured: false
    },

    {
        name: "Sri Govindaraja Swamy Temple",
        description: "Historic temple in Tirupati dedicated to Lord Govindaraja, an incarnation of Lord Vishnu.",
        category: "Temples & Religious",
        address: "Tirupati City, Andhra Pradesh",
        timings: "5:00 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773157722/travelxplorer/places/dvkrzzs07qhqpuhcyleh.jpg", publicId: "travelxplorer/places/dvkrzzs07qhqpuhcyleh" }],
        dressCode: "Traditional attire recommended",
        specialRules: ["Maintain temple decorum"],
        foodRecommendations: ["Local vegetarian hotels"],
        nearbyAttractions: ["Tirupati Bazaar", "Kodandarama Temple"],
        crowdLevel: "Medium",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [79.4192, 13.6288] },
        featured: false
    },

    {
        name: "Sri Kalahasteeswara Temple",
        description: "Ancient Shiva temple famous for Rahu-Ketu pooja located in Srikalahasti.",
        category: "Temples & Religious",
        address: "Srikalahasti, Tirupati District, Andhra Pradesh",
        timings: "5:30 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773157787/travelxplorer/places/adsxgqtd1ueyszjzney9.jpg", publicId: "travelxplorer/places/adsxgqtd1ueyszjzney9" }],
        dressCode: "Traditional attire preferred",
        specialRules: ["Special queue for Rahu-Ketu pooja"],
        foodRecommendations: ["Temple town restaurants"],
        nearbyAttractions: ["Swarnamukhi River"],
        crowdLevel: "High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [79.7037, 13.7496] },
        featured: true
    },

    {
        name: "Kapila Theertham",
        description: "Sacred temple and waterfall dedicated to Lord Shiva located at Tirumala foothills.",
        category: "Temples & Religious",
        address: "Kapila Theertham Road, Tirupati",
        timings: "5:00 AM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Monsoon", "Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773157835/travelxplorer/places/fgv0ywyyrt19ogxbxvb1.jpg", publicId: "travelxplorer/places/fgv0ywyyrt19ogxbxvb1" }],
        dressCode: "Traditional attire preferred",
        specialRules: ["Be cautious near waterfall"],
        foodRecommendations: ["Local vegetarian restaurants"],
        nearbyAttractions: ["Tirupati City"],
        crowdLevel: "Medium",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [79.4167, 13.6367] },
        featured: true
    },

    {
        name: "Akasa Ganga Waterfall",
        description: "Sacred waterfall in Tirumala hills whose water is used in temple rituals.",
        category: "Wildlife & Nature",
        address: "Tirumala Hills, Tirupati District",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Monsoon", "Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773157939/travelxplorer/places/ee0n0aaalx7oadvu48yf.jpg", publicId: "travelxplorer/places/ee0n0aaalx7oadvu48yf" }],
        dressCode: "Casual clothing",
        specialRules: ["Be careful on steps"],
        foodRecommendations: ["TTD food counters"],
        nearbyAttractions: ["Papavinasam Dam"],
        crowdLevel: "Medium",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [79.3562, 13.6984] },
        featured: true
    },

    {
        name: "Silathoranam",
        description: "Rare natural rock arch formation located in Tirumala hills.",
        category: "Wildlife & Nature",
        address: "Tirumala Hills, Tirupati District",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773158079/travelxplorer/places/opfvrpytgkgyl2wnme9n.jpg", publicId: "travelxplorer/places/opfvrpytgkgyl2wnme9n" }],
        dressCode: "Casual clothing",
        specialRules: ["Do not climb rocks"],
        foodRecommendations: ["Tirumala restaurants"],
        nearbyAttractions: ["Akasa Ganga"],
        crowdLevel: "Medium",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [79.3576, 13.6944] },
        featured: true
    },

    {
        name: "Japali Hanuman Temple",
        description: "Peaceful forest temple dedicated to Lord Hanuman in Tirumala hills.",
        category: "Temples & Religious",
        address: "Japali Teertham, Tirumala",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Monsoon"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773158157/travelxplorer/places/l60gmw1d8lptke96ubkt.jpg", publicId: "travelxplorer/places/l60gmw1d8lptke96ubkt" }],
        dressCode: "Traditional attire preferred",
        specialRules: ["Maintain silence"],
        foodRecommendations: ["Food stalls in Tirumala"],
        nearbyAttractions: ["Akasa Ganga", "Silathoranam"],
        crowdLevel: "Low",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [79.3502, 13.6957] },
        featured: false
    },

    {
        name: "Talakona Waterfalls",
        description: "Highest waterfall in Andhra Pradesh located in Sri Venkateswara National Park.",
        category: "Wildlife & Nature",
        address: "Talakona Forest Area, Tirupati District",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Paid Entry",
        entryFeeAmount: 20,
        bestSeason: ["Monsoon", "Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773158244/travelxplorer/places/vkjrpxikvmqb3hqllgse.jpg", publicId: "travelxplorer/places/vkjrpxikvmqb3hqllgse" }],
        dressCode: "Outdoor clothing",
        specialRules: ["Follow forest department rules"],
        foodRecommendations: ["Local stalls"],
        nearbyAttractions: ["Sri Venkateswara National Park"],
        crowdLevel: "Medium",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [79.2115, 13.8024] },
        featured: true
    },

    {
        name: "Chandragiri Fort",
        description: "Historic Vijayanagara empire fort with palace museum.",
        category: "Historical & Archaeological",
        address: "Chandragiri, Tirupati District",
        timings: "9:00 AM – 5:30 PM",
        operationalDays: "All Days",
        entryFee: "Paid Entry",
        entryFeeAmount: 25,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773158412/travelxplorer/places/vc9uhjkbtpzlzqioubmb.jpg", publicId: "travelxplorer/places/vc9uhjkbtpzlzqioubmb" }],
        dressCode: "Casual clothing",
        specialRules: ["Do not damage heritage structures"],
        foodRecommendations: ["Restaurants in Tirupati"],
        nearbyAttractions: ["Tirupati City"],
        crowdLevel: "Medium",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [79.3189, 13.5858] },
        featured: false
    },

    {
        name: "Sri Venkateswara Zoological Park",
        description: "One of the largest zoological parks in Asia located in Tirupati.",
        category: "Parks & Gardens",
        address: "Tirupati, Andhra Pradesh",
        timings: "9:00 AM – 5:00 PM",
        operationalDays: "Tuesday – Sunday",
        entryFee: "Paid Entry",
        entryFeeAmount: 50,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773158502/travelxplorer/places/eigfipaqmdwc5r5atpcv.jpg", publicId: "travelxplorer/places/eigfipaqmdwc5r5atpcv" }],
        dressCode: "Casual clothing",
        specialRules: ["Do not feed animals"],
        foodRecommendations: ["Zoo food court"],
        nearbyAttractions: ["Kapila Theertham"],
        crowdLevel: "Medium",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [79.4095, 13.6093] },
        featured: false
    },

    {
        name: "Venkatagiri Palace",
        description: "Historic royal residence of the Venkatagiri Zamindari rulers.",
        category: "Historical & Archaeological",
        address: "Venkatagiri Town, Tirupati District",
        timings: "9:00 AM – 5:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773158551/travelxplorer/places/topwwgoxdvhyiotxo1if.jpg", publicId: "travelxplorer/places/topwwgoxdvhyiotxo1if" }],
        dressCode: "Casual clothing",
        specialRules: ["Respect heritage property"],
        foodRecommendations: ["Local restaurants"],
        nearbyAttractions: ["Venkatagiri Market"],
        crowdLevel: "Low",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [79.5886, 13.9616] },
        featured: false
    },

    {
        name: "Sri Vari Museum",
        description: "Museum showcasing Tirumala temple history and artifacts.",
        category: "Historical & Archaeological",
        address: "Tirumala, Tirupati District",
        timings: "10:00 AM – 5:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["All Seasons"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773158709/travelxplorer/places/im8fetsle8wjysafj0o5.jpg", publicId: "travelxplorer/places/im8fetsle8wjysafj0o5" }],
        dressCode: "Casual attire",
        specialRules: ["Photography restricted"],
        foodRecommendations: ["TTD food complexes"],
        nearbyAttractions: ["Tirumala Temple"],
        crowdLevel: "Low",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [79.3495, 13.6838] },
        featured: false
    },

    {
        name: "Subhamasthu Shopping Mall",
        description: "One of the popular shopping malls in Tirupati offering clothing brands, electronics stores, and food outlets for locals and tourists.",
        category: "Shopping Malls",
        address: "Air Bypass Road, Tirupati, Tirupati District, Andhra Pradesh",
        timings: "10:00 AM – 10:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["All Seasons"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773159840/travelxplorer/places/vxxpizi0fqemr69cjywg.avif",
                publicId: "travelxplorer/places/vxxpizi0fqemr69cjywg"
            }
        ],
        dressCode: "Casual attire",
        specialRules: ["Follow mall security rules"],
        foodRecommendations: ["Food court restaurants", "Nearby cafes"],
        nearbyAttractions: ["Tirupati Bazaar Streets"],
        crowdLevel: "Medium",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [79.4192, 13.6288] },
        featured: false
    },

    {
        name: "DMart Tirupati",
        description: "Popular supermarket chain where visitors can shop for groceries, clothing, and household items at affordable prices.",
        category: "Shopping Malls",
        address: "Air Bypass Road, Tirupati, Tirupati District, Andhra Pradesh",
        timings: "9:00 AM – 10:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["All Seasons"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773159913/travelxplorer/places/izg66fsrhfxkiyteyvqc.avif",
                publicId: "travelxplorer/places/izg66fsrhfxkiyteyvqc"
            }
        ],
        dressCode: "Casual attire",
        specialRules: ["Follow store guidelines"],
        foodRecommendations: ["Nearby restaurants"],
        nearbyAttractions: ["Subhamasthu Mall"],
        crowdLevel: "High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [79.4145, 13.6260] },
        featured: false
    },



    {
        name: "Papavinasam Dam",
        description: "A scenic dam and sacred water site in Tirumala hills where pilgrims believe the water washes away sins.",
        category: "Unique Local Experiences",
        address: "Papavinasam, Tirumala Hills, Tirupati District, Andhra Pradesh",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Monsoon", "Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773160082/travelxplorer/places/ysuuypw3ljfyyvfnme3b.jpg",
                publicId: "travelxplorer/places/ysuuypw3ljfyyvfnme3b"
            }
        ],
        dressCode: "Casual clothing",
        specialRules: ["Be careful near water areas"],
        foodRecommendations: ["Food stalls in Tirumala"],
        nearbyAttractions: ["Akasa Ganga", "Silathoranam"],
        crowdLevel: "Medium",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [79.3605, 13.7031] },
        featured: true
    },

    {
        name: "Srivari Mettu",
        description: "One of the traditional walking paths used by pilgrims to reach Tirumala temple through a forest route with around 2400 steps.",
        category: "Unique Local Experiences",
        address: "Srinivasa Mangapuram, Tirupati District, Andhra Pradesh",
        timings: "5:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Monsoon"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773160159/travelxplorer/places/x2isfhgixqi6khruk7ql.jpg",
                publicId: "travelxplorer/places/x2isfhgixqi6khruk7ql"
            }
        ],
        dressCode: "Comfortable walking clothes",
        specialRules: ["Carry water", "Follow trekking guidelines"],
        foodRecommendations: ["Local tiffin stalls near entrance"],
        nearbyAttractions: ["Tirumala Temple"],
        crowdLevel: "High during festivals",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [79.3304, 13.6484] },
        featured: true
    }
];

async function seedTirupati() {
    try {
        if (!process.env.MONGODB_URI) {
            console.error('MONGODB_URI is missing in .env');
            process.exit(1);
        }

        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB...');

        const district = await District.findOne({ name: 'Tirupati' });
        if (!district) {
            console.error('Tirupati District not found! Please run seedDistricts.js first.');
            process.exit(1);
        }

        if (TIRUPATI_PLACES.length === 0) {
            console.log('No places to seed for Tirupati yet.');
        } else {
            for (const placeData of TIRUPATI_PLACES) {
                await Place.findOneAndUpdate(
                    { name: placeData.name },
                    { ...placeData, district: district._id },
                    { upsert: true, new: true }
                );
                console.log(`Added/Updated: ${placeData.name}`);
            }
            console.log('Successfully seeded Tirupati data!');
        }

        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
}

seedTirupati();
