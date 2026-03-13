import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Place from '../models/Place.js';
import District from '../models/District.js';

dotenv.config();

const ANNAMAYYA_PLACES = [
    {
        name: "Veerabhadra Swamy Temple",
        description: "Veerabhadra Swamy Temple in Rayachoti is a historic temple dedicated to Lord Veerabhadra, a fierce form of Lord Shiva. It is one of the most important religious sites in the region.",
        category: "Temples & Religious",
        address: "Rayachoti, Annamayya District, Andhra Pradesh, India",
        timings: "5:30 AM – 12:30 PM, 4:30 PM – 8:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Festival Days"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773231705/travelxplorer/places/fwrysyg6wk0o0kdzxajg.jpg", publicId: "travelxplorer/places/fwrysyg6wk0o0kdzxajg" }],
        dressCode: "Traditional attire preferred",
        specialRules: ["Remove footwear before entering temple"],
        foodRecommendations: ["Local tiffin centers in Rayachoti"],
        nearbyAttractions: ["Rayachoti Municipal Park", "Rayachoti Main Bazaar"],
        crowdLevel: "Moderate",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [78.7517, 14.0583] },
        featured: true
    },
    {
        name: "Chennakesava Swamy Temple",
        description: "Chennakesava Swamy Temple in Madanapalle is a well-known temple dedicated to Lord Vishnu and is famous for its traditional South Indian architecture.",
        category: "Temples & Religious",
        address: "Madanapalle, Annamayya District, Andhra Pradesh",
        timings: "6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Festival Days"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773232015/travelxplorer/places/ncqb6ykoygqcvpu91z5l.jpg", publicId: "travelxplorer/places/ncqb6ykoygqcvpu91z5l" }],
        dressCode: "Traditional attire recommended",
        specialRules: ["Remove footwear before entry"],
        foodRecommendations: ["Restaurants in Madanapalle"],
        nearbyAttractions: ["Horsley Hills", "Madanapalle Market"],
        crowdLevel: "Moderate",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [78.5029, 13.5503] },
        featured: false
    },
    {
        name: "Boyakonda Gangamma Temple",
        description: "Boyakonda Gangamma Temple is a famous hill temple near Chowdepalle dedicated to Goddess Gangamma and attracts devotees from many surrounding districts.",
        category: "Temples & Religious",
        address: "Boyakonda Hills, Chowdepalle, Annamayya District, Andhra Pradesh",
        timings: "5:00 AM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Festival Days"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773232167/travelxplorer/places/yculgpz3oeqfi2dab7d3.jpg", publicId: "travelxplorer/places/yculgpz3oeqfi2dab7d3" }],
        dressCode: "Traditional attire preferred",
        specialRules: ["Climb carefully on hill steps"],
        foodRecommendations: ["Small eateries near temple base"],
        nearbyAttractions: ["Horsley Hills"],
        crowdLevel: "High during festivals",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [78.4400, 13.6100] },
        featured: true
    },
    {
        name: "Horsley Hills",
        description: "Horsley Hills is a famous hill station in Andhra Pradesh known for its cool climate, scenic viewpoints, and lush forests.",
        category: "Wildlife & Nature",
        address: "Horsley Hills, Madanapalle Region, Annamayya District, Andhra Pradesh",
        timings: "6:00 AM – 6:30 PM",
        operationalDays: "All Days",
        entryFee: "Paid Entry",
        entryFeeAmount: 10,
        bestSeason: ["Winter", "Monsoon"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773232275/travelxplorer/places/uqototwfqtcwp2vhtnae.avif", publicId: "travelxplorer/places/uqototwfqtcwp2vhtnae" }],
        dressCode: "Outdoor casual clothing",
        specialRules: ["Avoid littering", "Follow forest rules"],
        foodRecommendations: ["AP Tourism Restaurant"],
        nearbyAttractions: ["Boyakonda Temple", "Rishi Valley"],
        crowdLevel: "High on weekends",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [78.3950, 13.6586] },
        featured: true
    },
    {
        name: "Rishi Valley",
        description: "Rishi Valley is a peaceful valley near Madanapalle surrounded by hills and forests. It is known for bird watching and serene natural beauty.",
        category: "Wildlife & Nature",
        address: "Rishi Valley, Near Madanapalle, Andhra Pradesh",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773232534/travelxplorer/places/xsekx5ki8qsmtshmwocm.jpg", publicId: "travelxplorer/places/xsekx5ki8qsmtshmwocm" }],
        dressCode: "Casual outdoor wear",
        specialRules: ["Maintain silence", "Respect campus rules"],
        foodRecommendations: ["Restaurants in Madanapalle"],
        nearbyAttractions: ["Horsley Hills"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [78.4700, 13.5800] },
        featured: false
    },
    {
        name: "Cheyyeru River",
        description: "Cheyyeru River flows through parts of Annamayya district and provides scenic natural surroundings and agricultural support.",
        category: "Wildlife & Nature",
        address: "Cheyyeru River Region, Annamayya District, Andhra Pradesh",
        timings: "Open 24 hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Monsoon", "Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773244320/travelxplorer/places/lpokpabnwpebowu5shw5.webp", publicId: "travelxplorer/places/lpokpabnwpebowu5shw5" }],
        dressCode: "Casual",
        specialRules: ["Avoid swimming during heavy flow"],
        foodRecommendations: ["Village eateries nearby"],
        nearbyAttractions: ["Rayachoti"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [78.7200, 14.0200] },
        featured: false
    },
    {
        name: "Galiveedu Forest Areas",
        description: "Galiveedu Forest Areas are known for greenery, rocky landscapes, and peaceful forest surroundings ideal for nature exploration.",
        category: "Wildlife & Nature",
        address: "Galiveedu Region, Annamayya District, Andhra Pradesh",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Monsoon"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773244523/travelxplorer/places/nhsx4x97h00zkh3nlnyw.webp", publicId: "travelxplorer/places/nhsx4x97h00zkh3nlnyw" }],
        dressCode: "Outdoor clothing",
        specialRules: ["Follow forest department rules"],
        foodRecommendations: ["Village eateries"],
        nearbyAttractions: ["Rayachoti"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [78.8300, 14.0200] },
        featured: false
    },
    {
        name: "Gurramkonda Fort",
        description: "Gurramkonda Fort is a historic hill fort believed to be built during the Vijayanagara period and offers scenic panoramic views.",
        category: "Historical & Archaeological",
        address: "Gurramkonda, Annamayya District, Andhra Pradesh",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773244618/travelxplorer/places/ow7gj3ggwsfnrty5gvnb.jpg", publicId: "travelxplorer/places/ow7gj3ggwsfnrty5gvnb" }],
        dressCode: "Trekking clothing",
        specialRules: ["Carry water", "Avoid trekking after sunset"],
        foodRecommendations: ["Local eateries"],
        nearbyAttractions: ["Rayachoti"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [78.5700, 13.7800] },
        featured: false
    },
    {
        name: "Rayachoti Old Town Area",
        description: "Rayachoti Old Town reflects the traditional culture of the town with old temples, markets, and historic streets.",
        category: "Historical & Archaeological",
        address: "Old Town, Rayachoti, Annamayya District, Andhra Pradesh",
        timings: "Open 24 hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773244968/travelxplorer/places/nehksitrgpe6vy8fg7jf.jpg", publicId: "travelxplorer/places/nehksitrgpe6vy8fg7jf" }],
        dressCode: "Casual",
        specialRules: ["Respect local culture"],
        foodRecommendations: ["Local food stalls"],
        nearbyAttractions: ["Veerabhadra Swamy Temple"],
        crowdLevel: "Moderate",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [78.7505, 14.0588] },
        featured: false
    },
    {
        name: "Rayachoti Municipal Park",
        description: "Rayachoti Municipal Park is a local park with greenery, walking paths, and a relaxing environment for families.",
        category: "Parks & Gardens",
        address: "Rayachoti, Annamayya District, Andhra Pradesh",
        timings: "6:00 AM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773245251/travelxplorer/places/p6n9vizuindg9om9qj6c.avif", publicId: "travelxplorer/places/p6n9vizuindg9om9qj6c" }],
        dressCode: "Casual",
        specialRules: ["Maintain cleanliness"],
        foodRecommendations: ["Street food stalls nearby"],
        nearbyAttractions: ["Rayachoti Bazaar"],
        crowdLevel: "Moderate",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [78.7510, 14.0600] },
        featured: false
    },
    {
        name: "Madanapalle Town Park",
        description: "Madanapalle Town Park is a relaxing green space popular for morning walks and family outings.",
        category: "Parks & Gardens",
        address: "Madanapalle, Annamayya District, Andhra Pradesh",
        timings: "6:00 AM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773245514/travelxplorer/places/l7znvbgtfefrbjppeelx.jpg", publicId: "travelxplorer/places/l7znvbgtfefrbjppeelx" }],
        dressCode: "Casual",
        specialRules: ["Keep the park clean"],
        foodRecommendations: ["Nearby street food"],
        nearbyAttractions: ["Madanapalle Market"],
        crowdLevel: "Moderate",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [78.5030, 13.5515] },
        featured: false
    },
    {
        name: "Rishi Valley Natural Campus",
        description: "Rishi Valley Natural Campus is a scenic educational campus surrounded by hills and forests known for biodiversity and peaceful surroundings.",
        category: "Parks & Gardens",
        address: "Rishi Valley, Near Madanapalle, Andhra Pradesh",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773245618/travelxplorer/places/sffokrdqwho9ihe1wtkl.webp", publicId: "travelxplorer/places/sffokrdqwho9ihe1wtkl" }],
        dressCode: "Casual outdoor wear",
        specialRules: ["Maintain silence"],
        foodRecommendations: ["Restaurants in Madanapalle"],
        nearbyAttractions: ["Rishi Valley"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [78.4680, 13.5790] },
        featured: false
    },
    {
        name: "Rayachoti Main Bazaar",
        description: "Rayachoti Main Bazaar is a bustling market area known for clothing shops, groceries, and street food stalls.",
        category: "Shopping Malls",
        address: "Main Bazaar, Rayachoti, Annamayya District, Andhra Pradesh",
        timings: "9:00 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Festival Days"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773245736/travelxplorer/places/c6q79iy7p8apyrohl73w.avif", publicId: "travelxplorer/places/c6q79iy7p8apyrohl73w" }],
        dressCode: "Casual",
        specialRules: ["Be cautious in crowded areas"],
        foodRecommendations: ["Local street food"],
        nearbyAttractions: ["Rayachoti Park"],
        crowdLevel: "High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [78.7520, 14.0580] },
        featured: false
    },
    {
        name: "Madanapalle Market",
        description: "Madanapalle Market is a lively commercial hub known for vegetables, clothing shops, and local street food.",
        category: "Shopping Malls",
        address: "Main Market, Madanapalle, Annamayya District, Andhra Pradesh",
        timings: "9:00 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Festival Days"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773245847/travelxplorer/places/nfo33lpudnva1zxai5nq.jpg", publicId: "travelxplorer/places/nfo33lpudnva1zxai5nq" }],
        dressCode: "Casual",
        specialRules: ["Crowded during festivals"],
        foodRecommendations: ["Street food stalls"],
        nearbyAttractions: ["Madanapalle Park"],
        crowdLevel: "High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [78.5028, 13.5510] },
        featured: false
    },
    {
        name: "Rajampet Town Market",
        description: "Rajampet Town Market is a busy local market where visitors can explore clothing, groceries, and traditional food stalls.",
        category: "Shopping Malls",
        address: "Rajampet Town, Annamayya District, Andhra Pradesh",
        timings: "9:00 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Festival Days"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773245985/travelxplorer/places/vbeowdphdkmedkhwhabm.avif", publicId: "travelxplorer/places/vbeowdphdkmedkhwhabm" }],
        dressCode: "Casual",
        specialRules: ["Watch belongings in crowded areas"],
        foodRecommendations: ["Tea stalls and snacks"],
        nearbyAttractions: ["Rayachoti"],
        crowdLevel: "High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [79.1580, 14.1950] },
        featured: false
    },
    {
        name: "Horsley Hills Sunrise Viewpoints",
        description: "Horsley Hills Sunrise Viewpoints offer breathtaking sunrise views over valleys and forests with cool climate and fresh mountain air.",
        category: "Unique Local Experiences",
        address: "Horsley Hills, Annamayya District, Andhra Pradesh",
        timings: "5:30 AM – 6:30 PM",
        operationalDays: "All Days",
        entryFee: "Paid Entry",
        entryFeeAmount: 10,
        bestSeason: ["Winter", "Monsoon"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773246082/travelxplorer/places/rhje21kpxhq0gofq67qj.avif", publicId: "travelxplorer/places/rhje21kpxhq0gofq67qj" }],
        dressCode: "Outdoor clothing",
        specialRules: ["Visit early morning for best views"],
        foodRecommendations: ["Hill station cafes"],
        nearbyAttractions: ["Horsley Hills"],
        crowdLevel: "Moderate",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [78.3952, 13.6590] },
        featured: true
    }
];

async function seedAnnamayya() {
    try {
        if (!process.env.MONGODB_URI) {
            console.error('MONGODB_URI is missing in .env');
            process.exit(1);
        }

        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB...');

        const district = await District.findOne({ name: 'Annamayya' });
        if (!district) {
            console.error('Annamayya District not found! Please run seedDistricts.js first.');
            process.exit(1);
        }

        if (ANNAMAYYA_PLACES.length === 0) {
            console.log('No places to seed for Annamayya yet.');
        } else {
            for (const placeData of ANNAMAYYA_PLACES) {
                await Place.findOneAndUpdate(
                    { name: placeData.name },
                    { ...placeData, district: district._id },
                    { upsert: true, new: true }
                );
                console.log(`Added/Updated: ${placeData.name}`);
            }
            console.log('Successfully seeded Annamayya data!');
        }

        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
}

seedAnnamayya();
