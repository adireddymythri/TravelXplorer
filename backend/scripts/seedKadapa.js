import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Place from '../models/Place.js';
import District from '../models/District.js';

dotenv.config();

const KADAPA_PLACES = [
    {
        name: "Ameen Peer Dargah",
        description: "Ameen Peer Dargah in Kadapa is one of the most visited Sufi shrines in South India attracting devotees from multiple religions.",
        category: "Temples & Religious",
        address: "Ameen Peer Dargah, Kadapa, YSR Kadapa District, Andhra Pradesh",
        timings: "6:00 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Festival Days"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773248238/travelxplorer/places/tzt1v6efqmaqhgdd55f6.jpg", publicId: "travelxplorer/places/tzt1v6efqmaqhgdd55f6" }],
        dressCode: "Modest attire recommended",
        specialRules: ["Respect religious customs"],
        foodRecommendations: ["Local restaurants in Kadapa"],
        nearbyAttractions: ["Kadapa Main Bazaar", "Kadapa Municipal Park"],
        crowdLevel: "High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [78.8297, 14.4753] },
        featured: true
    },
    {
        name: "Devuni Kadapa Temple",
        description: "Devuni Kadapa Temple is a historic temple dedicated to Lord Venkateswara and is traditionally visited before going to Tirupati.",
        category: "Temples & Religious",
        address: "Devuni Kadapa, Kadapa, YSR Kadapa District, Andhra Pradesh",
        timings: "5:30 AM – 12:00 PM, 4:30 PM – 8:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Festival Days"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773248351/travelxplorer/places/xlvayx1ddyl7ioodmtxm.jpg", publicId: "travelxplorer/places/xlvayx1ddyl7ioodmtxm" }],
        dressCode: "Traditional attire preferred",
        specialRules: ["Remove footwear before entering temple"],
        foodRecommendations: ["Local tiffin centers"],
        nearbyAttractions: ["Ameen Peer Dargah"],
        crowdLevel: "Moderate",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [78.8242, 14.4663] },
        featured: true
    },
    {
        name: "Sri Venkateswara Swamy Temple Proddatur",
        description: "A prominent temple dedicated to Lord Venkateswara located in Proddatur town attracting devotees from nearby regions.",
        category: "Temples & Religious",
        address: "Proddatur, YSR Kadapa District, Andhra Pradesh",
        timings: "6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Festival Days"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773248491/travelxplorer/places/ppwtvtrvctjxqx253epb.avif", publicId: "travelxplorer/places/ppwtvtrvctjxqx253epb" }],
        dressCode: "Traditional attire recommended",
        specialRules: ["Follow temple customs"],
        foodRecommendations: ["Restaurants in Proddatur"],
        nearbyAttractions: ["Proddatur Gold Market"],
        crowdLevel: "Moderate",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [78.5473, 14.7325] },
        featured: false
    },
    {
        name: "Madhavaraya Temple Gandikota",
        description: "Madhavaraya Temple is an ancient temple located inside the Gandikota Fort complex reflecting Vijayanagara architecture.",
        category: "Temples & Religious",
        address: "Gandikota Fort Area, YSR Kadapa District, Andhra Pradesh",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773248673/travelxplorer/places/wgnkjigoe9am8grd2wko.jpg", publicId: "travelxplorer/places/wgnkjigoe9am8grd2wko" }],
        dressCode: "Casual",
        specialRules: ["Respect heritage structures"],
        foodRecommendations: ["Local village food"],
        nearbyAttractions: ["Gandikota Fort"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [78.2750, 14.8167] },
        featured: false
    },
    {
        name: "Gandikota Canyon",
        description: "Gandikota is known as the Grand Canyon of India where the Pennar River cuts through massive red rock cliffs.",
        category: "Wildlife & Nature",
        address: "Gandikota Village, YSR Kadapa District, Andhra Pradesh",
        timings: "6:00 AM – 6:30 PM",
        operationalDays: "All Days",
        entryFee: "Paid",
        entryFeeAmount: 10,
        bestSeason: ["Winter", "Monsoon"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773249079/travelxplorer/places/agchyfmr8g4sq8unajgw.jpg", publicId: "travelxplorer/places/agchyfmr8g4sq8unajgw" }],
        dressCode: "Outdoor clothing",
        specialRules: ["Avoid cliff edges"],
        foodRecommendations: ["Village eateries"],
        nearbyAttractions: ["Gandikota Fort"],
        crowdLevel: "High on weekends",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [78.2752, 14.8161] },
        featured: true
    },
    {
        name: "Pushpagiri Wildlife Sanctuary",
        description: "Pushpagiri Wildlife Sanctuary is a protected forest region known for biodiversity, trekking routes, and wildlife.",
        category: "Wildlife & Nature",
        address: "Pushpagiri Hills, YSR Kadapa District, Andhra Pradesh",
        timings: "6:00 AM – 5:30 PM",
        operationalDays: "All Days",
        entryFee: "Paid",
        entryFeeAmount: 20,
        bestSeason: ["Winter", "Monsoon"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773249299/travelxplorer/places/tupba5iputz4k6n6gxc4.jpg", publicId: "travelxplorer/places/tupba5iputz4k6n6gxc4" }],
        dressCode: "Trekking clothing",
        specialRules: ["Follow forest department rules"],
        foodRecommendations: ["Local village food"],
        nearbyAttractions: ["Pushpagiri Hills"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [78.6800, 14.2500] },
        featured: false
    },
    {
        name: "Pennar River Gorge Gandikota",
        description: "The Pennar River Gorge near Gandikota offers dramatic canyon landscapes formed by the river flowing between rocky cliffs.",
        category: "Wildlife & Nature",
        address: "Pennar River Gorge, Gandikota, YSR Kadapa District, Andhra Pradesh",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773249382/travelxplorer/places/swslpq8xzjldxr5xnrsd.jpg", publicId: "travelxplorer/places/swslpq8xzjldxr5xnrsd" }],
        dressCode: "Outdoor clothing",
        specialRules: ["Avoid going close to cliff edges"],
        foodRecommendations: ["Village eateries"],
        nearbyAttractions: ["Gandikota Canyon"],
        crowdLevel: "Moderate",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [78.2748, 14.8160] },
        featured: true
    },
    {
        name: "Gandikota Fort",
        description: "Historic fort overlooking the Pennar River gorge built during the Kakatiya and Vijayanagara periods.",
        category: "Historical & Archaeological",
        address: "Gandikota Village, YSR Kadapa District, Andhra Pradesh",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Paid",
        entryFeeAmount: 10,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773249506/travelxplorer/places/bhdtpx4lmivtjt0pu6ge.avif", publicId: "travelxplorer/places/bhdtpx4lmivtjt0pu6ge" }],
        dressCode: "Casual",
        specialRules: ["Protect historic structures"],
        foodRecommendations: ["Village eateries"],
        nearbyAttractions: ["Gandikota Canyon"],
        crowdLevel: "Moderate",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [78.2755, 14.8164] },
        featured: true
    },
    {
        name: "Siddavatam Fort",
        description: "Ancient fort located along the Pennar River featuring historic ruins and scenic riverbank views.",
        category: "Historical & Archaeological",
        address: "Siddavatam, YSR Kadapa District, Andhra Pradesh",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773249632/travelxplorer/places/sk8szhebgfm0dbd4utz5.jpg", publicId: "travelxplorer/places/sk8szhebgfm0dbd4utz5" }],
        dressCode: "Casual",
        specialRules: ["Do not damage ruins"],
        foodRecommendations: ["Local village eateries"],
        nearbyAttractions: ["Pennar River"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [78.7480, 14.3830] },
        featured: false
    },
    {
        name: "Kadapa Old Town",
        description: "Kadapa Old Town area represents the cultural heritage of the city with traditional streets, mosques, and historic buildings.",
        category: "Historical & Archaeological",
        address: "Old Town, Kadapa, YSR Kadapa District, Andhra Pradesh",
        timings: "Open 24 hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773249727/travelxplorer/places/mkjnierbttneocjzsyq2.jpg", publicId: "travelxplorer/places/mkjnierbttneocjzsyq2" }],
        dressCode: "Casual",
        specialRules: ["Respect local culture"],
        foodRecommendations: ["Traditional local food"],
        nearbyAttractions: ["Ameen Peer Dargah"],
        crowdLevel: "Moderate",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [78.8295, 14.4700] },
        featured: false
    },
    {
        name: "Kadapa Municipal Park",
        category: "Parks & Gardens",
        description: "Public park in Kadapa city offering greenery and walking paths.",
        address: "Kadapa City, Andhra Pradesh",
        timings: "6:00 AM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773249897/travelxplorer/places/kfnhhen15j7qsjx3dttb.jpg", publicId: "travelxplorer/places/kfnhhen15j7qsjx3dttb" }],
        dressCode: "Casual",
        specialRules: ["Maintain cleanliness"],
        foodRecommendations: ["Nearby street food"],
        nearbyAttractions: ["Kadapa Main Bazaar"],
        crowdLevel: "Moderate",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [78.8240, 14.4670] },
        featured: false
    },
    {
        name: "Proddatur Park",
        category: "Parks & Gardens",
        description: "A local park in Proddatur town used for recreation and evening walks.",
        address: "Proddatur, YSR Kadapa District",
        timings: "6:00 AM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773249990/travelxplorer/places/mbv1o4rwsagrk9odj5qb.avif", publicId: "travelxplorer/places/mbv1o4rwsagrk9odj5qb" }],
        dressCode: "Casual",
        specialRules: ["Maintain park cleanliness"],
        foodRecommendations: ["Local restaurants"],
        nearbyAttractions: ["Proddatur Gold Market"],
        crowdLevel: "Moderate",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [78.5485, 14.7335] },
        featured: false
    },
    {
        name: "Mydukur Town Park",
        category: "Parks & Gardens",
        description: "Small public park in Mydukur town providing green space for locals.",
        address: "Mydukur, YSR Kadapa District",
        timings: "6:00 AM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773250110/travelxplorer/places/xyeyymb1mpx5rsvacbkc.avif", publicId: "travelxplorer/places/xyeyymb1mpx5rsvacbkc" }],
        dressCode: "Casual",
        specialRules: ["Maintain cleanliness"],
        foodRecommendations: ["Nearby local snacks"],
        nearbyAttractions: ["Mydukur Market"],
        crowdLevel: "Low",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [78.2600, 14.8000] },
        featured: false
    },
    {
        name: "Proddatur Gold Market",
        category: "Shopping Malls",
        description: "One of the largest gold markets in Andhra Pradesh known for jewellery trade.",
        address: "Proddatur, YSR Kadapa District",
        timings: "10:00 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Festival Days"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773250203/travelxplorer/places/mhl6kbglmtl3hnhecqvm.avif", publicId: "travelxplorer/places/mhl6kbglmtl3hnhecqvm" }],
        dressCode: "Casual",
        specialRules: ["Be cautious with valuables"],
        foodRecommendations: ["Restaurants in Proddatur"],
        nearbyAttractions: ["Proddatur Park"],
        crowdLevel: "High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [78.5480, 14.7328] },
        featured: true
    },
    {
        name: "Kadapa Main Bazaar",
        category: "Shopping Malls",
        description: "A bustling commercial street with clothing shops, groceries, and street food.",
        address: "Kadapa City, YSR Kadapa District",
        timings: "9:00 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Festival Days"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773250312/travelxplorer/places/zmhxteyzkk2acfmuhtr9.jpg", publicId: "travelxplorer/places/zmhxteyzkk2acfmuhtr9" }],
        dressCode: "Casual",
        specialRules: ["Crowded during festivals"],
        foodRecommendations: ["Street food stalls"],
        nearbyAttractions: ["Kadapa Old Town"],
        crowdLevel: "High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [78.8280, 14.4690] },
        featured: false
    },
    {
        name: "Pulivendula Commercial Area",
        category: "Shopping Malls",
        description: "Busy commercial area with retail stores, local markets, and food stalls.",
        address: "Pulivendula, YSR Kadapa District",
        timings: "9:00 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Festival Days"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773250427/travelxplorer/places/edudjbrllnyl1jyttwgq.jpg", publicId: "travelxplorer/places/edudjbrllnyl1jyttwgq" }],
        dressCode: "Casual",
        specialRules: ["Busy during evenings"],
        foodRecommendations: ["Local restaurants"],
        nearbyAttractions: ["Pulivendula Town"],
        crowdLevel: "High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [78.2310, 14.4210] },
        featured: false
    },
    {
        name: "Gandikota Canyon Viewpoints",
        category: "Unique Local Experiences",
        description: "Viewpoints offering spectacular views of the Pennar River canyon cliffs often called the Grand Canyon of India.",
        address: "Gandikota, YSR Kadapa District",
        timings: "6:00 AM – 6:30 PM",
        operationalDays: "All Days",
        entryFee: "Paid",
        entryFeeAmount: 10,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773250511/travelxplorer/places/bkfvs6kd2mc8cjldbid3.jpg", publicId: "travelxplorer/places/bkfvs6kd2mc8cjldbid3" }],
        dressCode: "Outdoor clothing",
        specialRules: ["Avoid cliff edges"],
        foodRecommendations: ["Village eateries"],
        nearbyAttractions: ["Gandikota Fort"],
        crowdLevel: "High",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [78.2752, 14.8163] },
        featured: true
    },
    {
        name: "Kayaking in Pennar River",
        category: "Unique Local Experiences",
        description: "Seasonal adventure activity organized near Gandikota allowing visitors to kayak in the Pennar River.",
        address: "Pennar River, Gandikota",
        timings: "Seasonal",
        operationalDays: "Seasonal",
        entryFee: "Paid",
        entryFeeAmount: 700,
        bestSeason: ["Winter", "Post Monsoon"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773250608/travelxplorer/places/rdhuhk31bifqidnm1j6u.jpg", publicId: "travelxplorer/places/rdhuhk31bifqidnm1j6u" }],
        dressCode: "Adventure sports wear",
        specialRules: ["Follow safety instructions"],
        foodRecommendations: ["Local food stalls"],
        nearbyAttractions: ["Gandikota Canyon"],
        crowdLevel: "Moderate",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [78.2748, 14.8162] },
        featured: true
    },
    {
        name: "Exploring Siddavatam Fort Ruins",
        category: "Unique Local Experiences",
        description: "Walking through the ruins of Siddavatam Fort along the Pennar River offers a glimpse into medieval architecture and history.",
        address: "Siddavatam, Kadapa District",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [{ url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1773250787/travelxplorer/places/wzrohhomsclv4z6nsctb.jpg", publicId: "travelxplorer/places/wzrohhomsclv4z6nsctb" }],
        dressCode: "Casual",
        specialRules: ["Do not damage structures"],
        foodRecommendations: ["Local village food"],
        nearbyAttractions: ["Pennar River"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [78.7482, 14.3832] },
        featured: false
    }
];

async function seedKadapa() {
    try {
        if (!process.env.MONGODB_URI) {
            console.error('MONGODB_URI is missing in .env');
            process.exit(1);
        }

        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB...');

        const district = await District.findOne({ name: 'Kadapa' });
        if (!district) {
            console.error('Kadapa District not found! Please run seedDistricts.js first.');
            process.exit(1);
        }

        if (KADAPA_PLACES.length === 0) {
            console.log('No places to seed for Kadapa yet.');
        } else {
            for (const placeData of KADAPA_PLACES) {
                await Place.findOneAndUpdate(
                    { name: placeData.name },
                    { ...placeData, district: district._id },
                    { upsert: true, new: true }
                );
                console.log(`Added/Updated: ${placeData.name}`);
            }
            console.log('Successfully seeded Kadapa data!');
        }

        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
}

seedKadapa();
