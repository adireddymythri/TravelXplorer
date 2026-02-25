import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Place from '../models/Place.js';
import District from '../models/District.js';

dotenv.config();

/**
 * KAKINADA_PLACES - Seed data with curated Unsplash/Wikimedia image URLs
 * These simulate Cloudinary stored objects. 
 */
const KAKINADA_PLACES = [
    {
        name: 'Coringa Wildlife Sanctuary',
        description: 'One of the largest mangrove forests in India. Famous for its wooden walkway through mangroves, boating, and spotting saltwater crocodiles and rare birds.',
        category: 'Wildlife & Nature',
        address: 'Near Kakinada-Yanam Road, Coringa, Andhra Pradesh',
        // Coringa Wildlife Sanctuary – visitor area (GeoJSON: [lng, lat])
        location: { type: 'Point', coordinates: [82.3370, 16.8315] },
        entryFee: 'Paid',
        entryFeeAmount: 50,
        bestSeason: ['Winter', 'Year-Round'],
        images: [
            {
                url: 'https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771605768/travelxplorer/places/prora3urrvrk9peqkrgu.jpg',
                publicId: 'travelxplorer/places/prora3urrvrk9peqkrgu'
            }
        ],
        featured: true
    },
    {
        name: "Uppada Beach",
        description: "Uppada Beach is one of the most popular coastal destinations near Kakinada, known for its long stretch of clean golden sands and gentle waves. The scenic beach road drive offers breathtaking sunrise and sunset views.",
        category: "Beaches & Coastal",
        address: "Uppada Village, Kakinada District, Andhra Pradesh",
        timings: "Open 24 hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771497810/travelxplorer/places/mxgyqbsxtkqjotxye1w8.webp",
                publicId: "travelxplorer/places/mxgyqbsxtkqjotxye1w8"
            }
        ],
        dressCode: "Comfortable beachwear; modest clothing recommended",
        specialRules: ["Avoid swimming during high tides", "No littering"],
        foodRecommendations: ["Fresh seafood fry", "Kakinada Kaja"],
        nearbyAttractions: ["Nemam Beach", "Hope Island"],
        crowdLevel: "Medium",
        weatherSensitive: true,
        // Uppada Beach – exact beach stretch
        location: { type: "Point", coordinates: [82.3360, 17.0762] },
        featured: true
    },
    {
        name: "Annavaram Satyanarayana Swamy Temple",
        description: "Located on Ratnagiri Hill, this world-famous temple is dedicated to Lord Satyanarayana Swamy. It is one of the most visited pilgrimage centers in Andhra Pradesh. Devotees perform Satyanarayana Vratham here seeking prosperity and well-being. The temple offers scenic hilltop views and well-organized darshan facilities.",
        category: "Temples & Religious",
        address: "Annavaram, Kakinada District, Andhra Pradesh",
        timings: "5:00 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        dressCode: "Traditional attire recommended",
        specialRules: ["Footwear not allowed inside temple premises", "Maintain silence near sanctum"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771599826/travelxplorer/places/s4luvpo5nefhkonfuwik.jpg",
                publicId: "travelxplorer/places/s4luvpo5nefhkonfuwik"
            }
        ],
        // Exact temple location: Annavaram Satyanarayana Swamy Temple (Ratnagiri Hill)
        location: { type: "Point", coordinates: [82.402529, 17.282876] },
        featured: true
    },
    {
        name: "Kakinada Beach / Beach Road",
        description: "Kakinada Beach, located along the city's Beach Road, is the primary urban beachfront area. It is well-developed with parks, walking paths, and the Haritha Beach Resort.",
        category: "Beaches & Coastal",
        address: "Beach Road, Kakinada, Andhra Pradesh",
        timings: "Open 24 hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771513416/travelxplorer/places/dyhpem2278fujoumf3aa.jpg",
                publicId: "travelxplorer/places/dyhpem2278fujoumf3aa"
            }
        ],
        // Kakinada Beach / Beach Road – main beachfront
        location: { type: "Point", coordinates: [82.2902, 17.0142] }
    },
    {
        name: "Nemam Beach",
        description: "Nemam Beach is a serene and less-crowded coastal stretch located along the scenic Uppada Beach Road near Kakinada. Known for its peaceful atmosphere, wide sandy shoreline, and uninterrupted views of the Bay of Bengal, it is an ideal destination for travelers seeking solitude away from busy city beaches. The calm surroundings make it perfect for early morning walks, sunset photography, and relaxed family outings. Unlike commercial beaches, Nemam Beach remains relatively untouched, offering a raw and natural coastal experience.",

        category: "Beaches & Coastal",
        address: "Nemam Village, near Uppada, Kakinada District, Andhra Pradesh",
        timings: "Open 24 hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Summer"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771494247/travelxplorer/places/jozzjsmnpp9qxpn83w79.avif",
                publicId: "travelxplorer/places/jozzjsmnpp9qxpn83w79"
            }
        ],
        // Nemam Beach – near Uppada
        location: { type: "Point", coordinates: [82.2950, 17.0458] }
    },
    {
        name: "Hope Island",
        description: "A 16km long natural sand spit that protects Kakinada port. A quiet, pristine spot accessible by boat from Kakinada Port.",
        category: "Beaches & Coastal",
        address: "Kakinada Bay, Bay of Bengal, Andhra Pradesh",
        timings: "Boat access 8:00 AM – 4:00 PM",
        entryFee: "Paid",
        entryFeeAmount: 200,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771579311/travelxplorer/places/dtdt99wbzixj53qbv4tq.avif",
                publicId: "travelxplorer/places/dtdt99wbzixj53qbv4tq"
            }
        ],
        // Hope Island – sand spit, boat access point
        location: { type: "Point", coordinates: [82.3430, 16.9775] },
        featured: true
    },
    {
        name: "Yanam Riverside & Confluence Point",
        description: "Yanam, part of the Union Territory of Puducherry, it is famous for its scenic riverside promenade and French colonial heritage.",
        category: "Beaches & Coastal",
        address: "Yanam, Puducherry Union Territory",
        entryFee: "Free",
        bestSeason: ["Winter"],
        images: [
            {
                url: 'https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771493808/travelxplorer/places/v2jwdokxrkaj9unsyvoi.avif',
                publicId: 'travelxplorer/places/v2jwdokxrkaj9unsyvoi'
            }
        ],
        // Yanam – riverside / Puducherry
        location: { type: "Point", coordinates: [82.2178, 16.7275] },
        featured: true
    },
    {
        name: "Draksharamam Bheemeshwara Swamy Temple",
        description: "One of the Pancharama Kshetras dedicated to Lord Shiva. Known as 'Dakshina Kashi', this 9th-century temple has magnificent stone architecture and deep spiritual importance. Thousands of devotees visit especially during Maha Shivaratri.",
        category: "Temples & Religious",
        address: "Draksharamam, Kakinada District, Andhra Pradesh",
        timings: "6:00 AM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        dressCode: "Traditional attire recommended",
        specialRules: ["Photography restricted in inner sanctum"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771601076/travelxplorer/places/peum4swxuyasxov0hn1v.webp",
                publicId: "travelxplorer/places/peum4swxuyasxov0hn1v"
            }
        ],
        // Draksharamam Bheemeshwara Temple – Pancharama Kshetra (16.79°N, 82.06°E)
        location: { type: "Point", coordinates: [82.0605, 16.7910] },
        featured: true
    },
    {
        name: "Sri Kukkuteswara Swamy Temple",
        description: "Located in Pithapuram, this ancient temple dedicated to Lord Shiva is one of the 18 Shakti Peethas (Puruhutika Devi Temple within premises). It holds great mythological significance and attracts pilgrims from across South India.",
        category: "Temples & Religious",
        address: "Pithapuram, Kakinada District, Andhra Pradesh",
        timings: "5:30 AM – 8:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        dressCode: "Traditional attire preferred",
        specialRules: ["Remove footwear before entry"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771601178/travelxplorer/places/vquxxba6m0eylcmvuriq.jpg",
                publicId: "travelxplorer/places/vquxxba6m0eylcmvuriq"
            }
        ],
        // Exact temple: 17°06′24.46″N 82°14′36″E (Pithapuram Kukkuteswara Swamy Temple)
        location: { type: "Point", coordinates: [82.24333, 17.1067944] },
        featured: true
    },


    {
        name: "Sri Bhavanarayana Swamy Temple",
        description: "A peaceful temple dedicated to Lord Vishnu located near Sarpavaram. It is known for its spiritual atmosphere and local devotion, especially during Vaikunta Ekadasi.",
        category: "Temples & Religious",
        address: "Sarpavaram, Kakinada, Andhra Pradesh",
        timings: "6:00 AM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        dressCode: "Traditional attire",
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771601247/travelxplorer/places/aalk0iu14mhewikdmagq.jpg",
                publicId: "travelxplorer/places/aalk0iu14mhewikdmagq"
            }
        ],
        // Sarpavaram – temple location (near Kakinada)
        location: { type: "Point", coordinates: [82.2515, 16.9818] }
    },
    {
        name: "Adurru Buddhist Stupa",
        description: "Adurru Buddhist Stupa, locally known as Dubaraju Gudi, is a 2400-year-old Buddhist archaeological site. Excavated in 1923, it features a unique wheel-shaped Mahastupa and several other structures, offering a glimpse into the region's ancient Buddhist heritage. It is considered a protected monument of great spiritual and historical significance.",
        category: "Historical & Heritage",
        address: "Adurru Village, Mamidikuduru Mandal, Kakinada District, Andhra Pradesh",
        timings: "9:00 AM - 5:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771602681/travelxplorer/places/lp21ajzvyxr4hpgruawm.webp",
                publicId: "travelxplorer/places/lp21ajzvyxr4hpgruawm"
            }
        ],
        // Adurru Buddhist Stupa – Mamidikuduru mandal
        location: { type: "Point", coordinates: [81.9545, 16.4786] },
        featured: true
    },
    {
        name: "A.S.P. Government Museum and Research Institute",
        description: "Located in Kakinada, this museum preserves the rich archaeological and cultural heritage of the region. It houses ancient sculptures, inscriptions, coins, pottery, and artifacts dating back to the Buddhist, Satavahana, and Eastern Chalukya periods. The museum serves as an important research center for historians and archaeology enthusiasts studying the history of the Godavari region.",
        category: "Historical & Archaeological",
        address: "Kakinada, Kakinada District, Andhra Pradesh",
        timings: "10:30 AM – 5:00 PM",
        operationalDays: "Tuesday – Sunday (Closed on Mondays & Government Holidays)",
        entryFee: "Nominal Fee",
        entryFeeAmount: 10,
        bestSeason: ["Year-Round"],
        dressCode: "No specific dress code",
        specialRules: ["Photography may be restricted inside certain galleries"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771603535/travelxplorer/places/axo0tpktwlqfsj8rpyex.jpg",
                publicId: "travelxplorer/places/axo0tpktwlqfsj8rpyex"
            }
        ],
        // A.S.P. Museum – Kakinada town
        location: { type: "Point", coordinates: [82.2480, 16.9892] },
        featured: false
    },
    {
        name: "Vivekananda Park",
        description: "Vivekananda Park is one of the most popular and well-maintained public parks in Kakinada. It features lush green lawns, walking and jogging tracks, seating areas, and open spaces suitable for families and fitness enthusiasts. The park is especially crowded during early mornings and evenings and serves as a major recreational hub in the city.",
        category: "Parks & Gardens",
        address: "Vivekananda Park Area, Kakinada, Kakinada District, Andhra Pradesh",
        timings: "5:00 AM – 9:00 AM, 4:30 PM – 8:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["October", "November", "December", "January", "February"],
        dressCode: "Comfortable casual wear",
        specialRules: ["Maintain cleanliness", "Avoid littering", "Pets may be restricted"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771604679/travelxplorer/places/m4eek78xnkhcpiovulks.jpg",
                publicId: "travelxplorer/places/m4eek78xnkhcpiovulks"
            }
        ],
        // Vivekananda Park – Kakinada
        location: { type: "Point", coordinates: [82.2472, 16.9896] },
        featured: true
    },
    {
        name: "Janmabhumi Park",
        description: "Janmabhumi Park is a spacious green park located near the National Highway in Kakinada. It offers open lawns, shaded seating areas, and walking paths, making it a popular place for evening relaxation and casual gatherings. Its convenient location near the highway makes it easily accessible for visitors and local residents.",
        category: "Parks & Gardens",
        address: "Near NH-216, Kakinada, Kakinada District, Andhra Pradesh",
        timings: "5:00 AM – 9:00 AM, 4:30 PM – 8:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["October", "November", "December", "January", "February"],
        dressCode: "Comfortable casual wear",
        specialRules: ["Maintain cleanliness", "No littering", "Avoid damaging plants"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771604782/travelxplorer/places/fwwzxxchwmkfz5b3l4zz.jpg",
                publicId: "travelxplorer/places/fwwzxxchwmkfz5b3l4zz"
            }
        ],
        // Janmabhumi Park – near NH-216, Kakinada
        location: { type: "Point", coordinates: [82.2598, 16.9822] },
        featured: false
    },
    {
        name: "82° East SRMT Mall & Multiplex",
        description: "82° East SRMT Mall & Multiplex is the largest and most popular shopping mall in Kakinada. It features branded fashion outlets, a multiplex cinema, restaurants, and a spacious food court. The mall serves as the main entertainment and shopping hub for families and youth in the city, especially during weekends and holidays.",
        category: "Shopping Malls",
        address: "Main Road, Kakinada, Kakinada District, Andhra Pradesh",
        timings: "10:00 AM – 10:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        dressCode: "Casual wear",
        specialRules: ["Follow mall security guidelines", "Outside food not allowed"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771605361/travelxplorer/places/d4p4iwchcocjppxmxgul.jpg",
                publicId: "travelxplorer/places/d4p4iwchcocjppxmxgul"
            }
        ],
        // 82° East Mall – Main Road, Kakinada
        location: { type: "Point", coordinates: [82.2438, 16.9982] },
        featured: true
    },
    {
        name: "CMR Shopping Mall",
        description: "CMR Shopping Mall is one of the most well-known shopping destinations in Kakinada, popular for clothing, jewelry, and festive collections. It attracts large crowds during festivals and special occasions and is considered a trusted retail brand across Andhra Pradesh.",
        category: "Shopping Malls",
        address: "Cinema Road, Kakinada, Kakinada District, Andhra Pradesh",
        timings: "10:00 AM – 9:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        dressCode: "Casual wear",
        specialRules: ["Follow store policies", "Keep belongings secure during rush hours"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771605426/travelxplorer/places/zoyllikil64gnc3bdmix.avif",
                publicId: "travelxplorer/places/zoyllikil64gnc3bdmix"
            }
        ],
        // CMR Mall – Cinema Road, Kakinada
        location: { type: "Point", coordinates: [82.2498, 16.9879] },
        featured: false
    },
    {
        name: "South India Shopping Mall",
        description: "South India Shopping Mall in Kakinada is a popular retail center known for sarees, traditional wear, and affordable fashion collections. It is especially crowded during festival seasons and wedding shopping periods.",
        category: "Shopping Malls",
        address: "Main Road, Kakinada, Kakinada District, Andhra Pradesh",
        timings: "10:00 AM – 9:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        dressCode: "Casual wear",
        specialRules: ["Follow store rules", "Peak hours during festivals"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771605489/travelxplorer/places/fp4n4bamtf5p77gtn99i.webp",
                publicId: "travelxplorer/places/fp4n4bamtf5p77gtn99i"
            }
        ],
        // South India Mall – Main Road, Kakinada
        location: { type: "Point", coordinates: [82.2488, 16.9886] },
        featured: false
    },
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
            console.log(`Added/Updated with Images: ${placeData.name}`);
        }

        console.log('Successfully seeded Kakinada data with images!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
}

seedKakinada();
