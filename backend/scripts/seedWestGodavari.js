import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Place from '../models/Place.js';
import District from '../models/District.js';

dotenv.config();

const WEST_GODAVARI_PLACES = [
    {
        name: "Perupalem Beach",
        description: "Perupalem Beach is the most popular beach in West Godavari District, located along the Bay of Bengal near Narasapuram. Known for its wide sandy shoreline, peaceful atmosphere, and beautiful sunset views, it is a favorite weekend getaway for visitors from Bhimavaram and nearby towns.",
        category: "Beaches & Coastal",
        address: "Perupalem Village, Near Narasapuram, West Godavari District, Andhra Pradesh",
        timings: "Open 24 hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771691806/travelxplorer/places/lvxewblteswbscjhvpuo.png",
                publicId: "travelxplorer/places/lvxewblteswbscjhvpuo"
            }
        ],
        dressCode: "Comfortable beachwear; modest clothing recommended",
        specialRules: ["Avoid swimming during strong currents", "No littering", "Follow local safety advisories"],
        foodRecommendations: ["Fresh prawn fry", "Fish curry", "Local coconut water"],
        nearbyAttractions: ["Narasapuram Lighthouse", "Antarvedi Temple"],
        crowdLevel: "Medium",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [81.6020, 16.3410] },
        featured: true
    },
    {
        name: "Mollaparru Beach",
        description: "Mollaparru Beach is a serene and less crowded coastal stretch near Perupalem in West Godavari District. It is known for its calm surroundings, natural beauty, and peaceful seaside environment, making it ideal for quiet beach walks and photography.",
        category: "Beaches & Coastal",
        address: "Mollaparru Village, Near Narasapuram, West Godavari District, Andhra Pradesh",
        timings: "Open 24 hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771691897/travelxplorer/places/mzag2h9r8buuqvzwkzcj.webp",
                publicId: "travelxplorer/places/mzag2h9r8buuqvzwkzcj"
            }
        ],
        dressCode: "Comfortable casual wear",
        specialRules: ["Limited facilities available", "Avoid swimming due to unpredictable tides", "No littering"],
        foodRecommendations: ["Homestyle seafood", "Local fish fry"],
        nearbyAttractions: ["Perupalem Beach", "Narasapuram Town"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [81.5950, 16.3380] },
        featured: false
    },
    {
        name: "Valandhararevu Backwater Point",
        description: "Valandhararevu Backwater Point is a scenic estuary location near Narasapuram where the Godavari River meets the Bay of Bengal. Known for its peaceful backwater views, fishing boats, and sunset scenery, it offers a unique coastal experience different from open sea beaches.",
        category: "Beaches & Coastal",
        address: "Valandhararevu Village, Near Narasapuram, West Godavari District, Andhra Pradesh",
        timings: "Open 24 hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771691972/travelxplorer/places/umms743fbiidtvncmhai.jpg",
                publicId: "travelxplorer/places/umms743fbiidtvncmhai"
            }
        ],
        dressCode: "Casual comfortable wear",
        specialRules: ["Be cautious near deep backwater zones", "No boating without local permission", "Maintain cleanliness"],
        foodRecommendations: ["Fresh river fish curry", "Prawn roast"],
        nearbyAttractions: ["Perupalem Beach", "Narasapuram Lighthouse", "Antarvedi"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [81.7010, 16.4340] },
        featured: false
    },
    {
        name: "Sri Ksheerarama Lingeswara Swamy Temple",
        description: "Sri Ksheerarama Lingeswara Swamy Temple is one of the sacred Pancharama Kshetras dedicated to Lord Shiva. Located in Palakollu, the temple is famous for its massive Shiva Lingam and tall Rajagopuram. It is believed that the Lingam represents a fragment of the original Atma Lingam of Lord Shiva.",
        category: "Temples & Religious",
        address: "Palakollu Town, West Godavari District, Andhra Pradesh 534260",
        timings: "5:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771694284/travelxplorer/places/u9mrnuwxoi1zzsftdima.jpg",
                publicId: "travelxplorer/places/u9mrnuwxoi1zzsftdima"
            }
        ],
        dressCode: "Traditional Indian attire recommended",
        specialRules: [
            "Footwear not allowed inside temple premises",
            "Maintain silence inside sanctum",
            "Major Festivals: Maha Shivaratri, Karthika Masam"
        ],
        nearbyAttractions: ["Palakollu Town", "Narasapuram"],
        crowdLevel: "High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.7289, 16.5273] },
        featured: true
    },
    {
        name: "Sri Mavullamma Ammavari Temple",
        description: "Sri Mavullamma Ammavari Temple is a famous village goddess temple located in Bhimavaram. The temple is highly revered by local devotees and is especially crowded during annual jatara celebrations. Goddess Mavullamma is worshipped as a powerful protector deity.",
        category: "Temples & Religious",
        address: "Bhimavaram Town, West Godavari District, Andhra Pradesh 534201",
        timings: "5:30 AM – 12:30 PM, 4:30 PM – 8:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771694452/travelxplorer/places/wc5izpdgiyo7rmmi4m0n.jpg",
                publicId: "travelxplorer/places/wc5izpdgiyo7rmmi4m0n"
            }
        ],
        dressCode: "Traditional attire preferred",
        specialRules: [
            "Follow temple queue system during festivals",
            "Major Festival: Mavullamma Jatara"
        ],
        nearbyAttractions: ["Somarama Temple", "Bhimavaram Town"],
        crowdLevel: "High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.5361, 16.5413] },
        featured: true
    },
    {
        name: "Sri Someswara Janardhana Swamy Temple (Somarama)",
        description: "Sri Someswara Janardhana Swamy Temple, popularly known as Somarama Temple, is one of the five Pancharama Kshetras dedicated to Lord Shiva. Located in Gunupudi, Bhimavaram, the temple is unique as the Shiva Lingam is believed to change color during Amavasya and Pournami.",
        category: "Temples & Religious",
        address: "Gunupudi, Bhimavaram, West Godavari District, Andhra Pradesh 534201",
        timings: "5:00 AM – 12:00 PM, 4:00 PM – 8:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771694514/travelxplorer/places/zchklkhodewor4hewafq.jpg",
                publicId: "travelxplorer/places/zchklkhodewor4hewafq"
            }
        ],
        dressCode: "Traditional attire recommended",
        specialRules: [
            "No footwear inside temple",
            "Special darshan tickets available during festivals",
            "Major Festivals: Maha Shivaratri, Karthika Masam"
        ],
        nearbyAttractions: ["Mavullamma Temple", "Bhimavaram Railway Station"],
        crowdLevel: "High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.5352, 16.5422] },
        featured: true
    },
    {
        name: "Sri Vasavi Kanyakaparameswari Temple",
        description: "Sri Vasavi Kanyakaparameswari Temple in Penugonda is the birthplace temple of Goddess Vasavi, revered by the Arya Vysya community. The temple is a significant pilgrimage center and holds great cultural and historical importance.",
        category: "Temples & Religious",
        address: "Penugonda, West Godavari District, Andhra Pradesh 534320",
        timings: "5:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771694574/travelxplorer/places/qggazc4z0ikiemmrfbb1.avif",
                publicId: "travelxplorer/places/qggazc4z0ikiemmrfbb1"
            }
        ],
        dressCode: "Traditional attire preferred",
        specialRules: [
            "Maintain decorum inside temple",
            "Major Festival: Vasavi Jayanthi"
        ],
        nearbyAttractions: ["Penugonda Fort Remains"],
        crowdLevel: "Medium",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.7431, 16.6698] },
        featured: true
    },
    {
        name: "Juttiga & Natta Rameswaram Temples",
        description: "Juttiga and Natta Rameswaram temples are ancient Shiva temples located in rural West Godavari. These temples are historically significant and known for peaceful surroundings. Natta Rameswaram Temple is especially popular during Maha Shivaratri celebrations.",
        category: "Temples & Religious",
        address: "Juttiga & Natta Rameswaram Villages, West Godavari District, Andhra Pradesh",
        timings: "6:00 AM – 12:00 PM, 5:00 PM – 7:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771694694/travelxplorer/places/lningzckwwjuu7uac9hk.avif",
                publicId: "travelxplorer/places/lningzckwwjuu7uac9hk"
            }
        ],
        dressCode: "Traditional attire recommended",
        specialRules: [
            "Limited facilities available",
            "Major Festival: Maha Shivaratri"
        ],
        nearbyAttractions: ["Local village temples"],
        crowdLevel: "Medium",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.6625, 16.6110] },
        featured: false
    },
    {
        name: "Guntupalli Buddhist Caves",
        description: "Guntupalli Buddhist Caves, located in Kamavarapukota Mandal, are among the earliest rock-cut Buddhist monuments in Andhra Pradesh dating back to the 3rd–2nd century BCE. Also known locally as 'Kudavelli' or 'Kudiveli' caves, the site features a rare circular (vritta) chaitya hall carved into rock, along with a large monastery complex, stupas, and meditation cells. The site reflects early Buddhist monastic architecture and is protected by the Archaeological Survey of India.",
        category: "Historical & Archaeological",
        address: "Guntupalli Village, Kamavarapukota Mandal, West Godavari District, Andhra Pradesh 534449",
        timings: "9:00 AM – 5:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771696038/travelxplorer/places/kfsmnnucbmgfsees9j7f.jpg",
                publicId: "travelxplorer/places/kfsmnnucbmgfsees9j7f"
            }
        ],
        dressCode: "Comfortable walking attire recommended",
        specialRules: ["Do not damage rock structures", "Follow ASI guidelines", "Avoid littering"],
        foodRecommendations: ["Carry drinking water", "Local Andhra meals in nearby towns"],
        nearbyAttractions: ["Dwaraka Tirumala", "Kolleru Lake", "Eluru Buddha Park"],
        crowdLevel: "Low to Medium",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [81.1305, 17.0189] },
        featured: true
    },
    {
        name: "Rudramkota Archaeological Site",
        description: "Rudramkota, located in Velairpadu region (near Polavaram project zone), is an important archaeological site dating back nearly 3,000 years to the Megalithic period. Excavations carried out during the Polavaram project revealed ancient burial sites, megalithic graves, terracotta artifacts, pottery, and iron objects. The discoveries provide significant evidence of early Iron Age habitation and cultural practices in the Godavari region.",
        category: "Historical & Archaeological",
        address: "Rudramkota Village, Near Polavaram Region, West Godavari District, Andhra Pradesh",
        timings: "Open area – Accessible during daylight hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771696091/travelxplorer/places/gkqmvb8hprjpflkvx2u5.jpg",
                publicId: "travelxplorer/places/gkqmvb8hprjpflkvx2u5"
            }
        ],
        dressCode: "Comfortable outdoor clothing",
        specialRules: ["Excavation zone – Entry may be restricted", "Do not disturb archaeological remains"],
        foodRecommendations: ["Carry food and water (limited facilities nearby)"],
        nearbyAttractions: ["Polavaram Project Site", "Godavari River View Points"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [81.6435, 17.2502] },
        featured: false
    },
    {
        name: "Narasapuram Lace Park",
        description: "Narasapuram Lace Park is a dedicated handicrafts development center located in Narasapuram town on the banks of the Vasishta Godavari River. The park promotes the world-famous Narasapur crochet lace industry, which supports thousands of local women artisans. The lace products are exported internationally, and Narasapur Crochet Lace has received a Geographical Indication (GI) tag, recognizing its cultural and economic importance.",
        category: "Unique Local Experiences",
        address: "Narasapuram Town, West Godavari District, Andhra Pradesh 534275",
        timings: "10:00 AM – 5:00 PM",
        operationalDays: "Monday – Saturday",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771696965/travelxplorer/places/sugos3j60w1sbyxdapo9.avif",
                publicId: "travelxplorer/places/sugos3j60w1sbyxdapo9"
            }
        ],
        dressCode: "Casual attire",
        specialRules: ["Photography may be restricted inside production units", "Support local artisans by purchasing authentic products"],
        foodRecommendations: ["Local Andhra meals in Narasapuram", "Coconut water"],
        nearbyAttractions: ["Perupalem Beach", "Antarvedi Temple", "Narasapuram Lighthouse"],
        crowdLevel: "Low to Medium",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.7005, 16.4411] },
        featured: true
    },
    {
        name: "Sir Arthur Cotton Park (Velivennu)",
        description: "Sir Arthur Cotton Park in Velivennu village is a peaceful public park named after Sir Arthur Cotton, the British engineer who developed the Godavari Delta irrigation system. The park reflects the region’s strong agricultural heritage connected to the Godavari river irrigation network and offers a calm environment for visitors and families.",
        category: "Parks & Gardens",
        address: "Velivennu Village, West Godavari District, Andhra Pradesh",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771697025/travelxplorer/places/opb8cgwa5wk0w6fdtbj2.jpg",
                publicId: "travelxplorer/places/opb8cgwa5wk0w6fdtbj2"
            }
        ],
        dressCode: "Casual comfortable wear",
        specialRules: ["Maintain cleanliness", "No littering"],
        foodRecommendations: ["Local tiffin centers nearby"],
        nearbyAttractions: ["Tanuku Town", "Godavari Canal Network"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [81.6802, 16.7530] },
        featured: false
    },
    {
        name: "NTR Park (Tanuku)",
        description: "NTR Park in Tanuku is a popular urban recreational park known for its landscaped gardens, children's play area, slides, swings, and tree house structures. It serves as a family-friendly destination for evening walks and leisure activities within the town.",
        category: "Parks & Gardens",
        address: "Tanuku Town, West Godavari District, Andhra Pradesh 534211",
        timings: "5:00 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771697078/travelxplorer/places/qturzsq6nxd0leqmulaa.avif",
                publicId: "travelxplorer/places/qturzsq6nxd0leqmulaa"
            }
        ],
        dressCode: "Casual wear",
        specialRules: ["Children must be supervised in play area", "No littering"],
        foodRecommendations: ["Street snacks in Tanuku town"],
        nearbyAttractions: ["Tanuku Railway Station", "Local Shopping Areas"],
        crowdLevel: "Medium",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.6866, 16.7536] },
        featured: true
    },
    {
        name: "Coastal City Center",
        description: "Coastal City Center is one of the prominent shopping and entertainment hubs in Bhimavaram. The mall hosts popular retail brands such as Reliance Trends and FBB (Fashion at Big Bazaar), along with a multiplex cinema and family entertainment options like a fish spa. It serves as a key lifestyle and shopping destination for residents of Bhimavaram and nearby towns.",
        category: "Shopping Malls",
        address: "Undi Road, Bhimavaram, West Godavari District, Andhra Pradesh 534201",
        timings: "10:00 AM – 10:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771697749/travelxplorer/places/fwbmqgnpdpto2dgxe7ew.jpg",
                publicId: "travelxplorer/places/fwbmqgnpdpto2dgxe7ew"
            }
        ],
        dressCode: "Casual attire",
        specialRules: ["Follow mall security guidelines", "Parking charges may apply"],
        foodRecommendations: ["Food court snacks", "Local restaurants on Undi Road", "Andhra-style meals"],
        nearbyAttractions: ["Somarama Temple (Gunupudi)", "Mavullamma Temple", "Bhimavaram Railway Station"],
        crowdLevel: "High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.5212, 16.5449] },
        featured: true
    },
    {
        name: "YSTD Centre",
        description: "YSTD Centre is a well-known commercial and retail complex located on Mini Bypass Road in Kovvur. The center offers diverse shopping outlets and essential services catering to the daily needs of residents. It acts as a convenient local retail hub for Kovvur and surrounding areas.",
        category: "Shopping Malls",
        address: "Mini Bypass Road, Kovvur, West Godavari District, Andhra Pradesh 534350",
        timings: "9:00 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771697808/travelxplorer/places/zekchfn6sjoorwdo2bz2.jpg",
                publicId: "travelxplorer/places/zekchfn6sjoorwdo2bz2"
            }
        ],
        dressCode: "Casual wear",
        specialRules: ["Limited parking during peak hours"],
        foodRecommendations: ["Local bakeries nearby", "Street food options on Mini Bypass Road"],
        nearbyAttractions: ["Godavari River View Points", "Kovvur Railway Station", "Rajahmundry (across Godavari bridge)"],
        crowdLevel: "Medium",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.7333, 17.0167] },
        featured: false
    }
];

async function seedWestGodavari() {
    try {
        if (!process.env.MONGODB_URI) {
            console.error('MONGODB_URI is missing in .env');
            process.exit(1);
        }

        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB...');

        const district = await District.findOne({ name: 'West Godavari' });
        if (!district) {
            console.error('West Godavari District not found! Please run seedDistricts.js first.');
            process.exit(1);
        }

        for (const placeData of WEST_GODAVARI_PLACES) {
            await Place.findOneAndUpdate(
                { name: placeData.name },
                { ...placeData, district: district._id },
                { upsert: true, new: true }
            );
            console.log(`Added/Updated: ${placeData.name}`);
        }

        console.log('Successfully seeded West Godavari data!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
}

seedWestGodavari();
