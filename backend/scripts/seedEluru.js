import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Place from '../models/Place.js';
import District from '../models/District.js';

dotenv.config();

const ELURU_PLACES = [
    {
        name: "Kolleru Lake",
        description: "Kolleru Lake is one of the largest freshwater lakes in India, located in Eluru district of Andhra Pradesh. It serves as an important wetland ecosystem between the Krishna and Godavari river deltas and is known for its scenic beauty, birdlife, and peaceful lake views.",
        category: "Beaches & Coastal",
        address: "Kolleru Lake Region, Eluru District, Andhra Pradesh",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "October to March"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771850980/travelxplorer/places/nsoazkdlmyhhmojrzz4o.webp",
                publicId: "travelxplorer/places/nsoazkdlmyhhmojrzz4o"
            }
        ],
        dressCode: "Casual and comfortable clothing",
        specialRules: [
            "Avoid littering",
            "Do not disturb migratory birds",
            "Follow local eco-tourism guidelines"
        ],
        foodRecommendations: [
            "Local village eateries nearby",
            "Carry drinking water"
        ],
        nearbyAttractions: [
            "Kolleru Bird Sanctuary",
            "Peddintlamma Temple (Kolletikota)"
        ],
        crowdLevel: "Moderate (High during winter season)",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [81.2150, 16.6300] },
        featured: true
    },




    {
        name: "Dwaraka Tirumala Temple (Chinna Tirupati)",
        description: "Dwaraka Tirumala Temple, popularly known as Chinna Tirupati, is a famous temple dedicated to Lord Venkateswara. It is one of the most important pilgrimage centers in Andhra Pradesh.",
        category: "Temples & Religious",
        address: "Dwaraka Tirumala, Eluru District, Andhra Pradesh",
        timings: "5:00 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free (Special Darshan tickets available)",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Festival Days"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771852413/travelxplorer/places/pbd37btpdxsc4gs34bvq.webp",
                publicId: "travelxplorer/places/pbd37btpdxsc4gs34bvq"
            }
        ],
        dressCode: "Traditional attire preferred",
        specialRules: ["Maintain temple discipline", "Follow darshan queue system"],
        foodRecommendations: ["Temple prasadam", "Local vegetarian restaurants"],
        nearbyAttractions: ["Guntupalli Buddhist Caves", "Eluru Clock Tower – Heritage City Walk"],
        crowdLevel: "Very High during festivals",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.2470, 16.9660] },
        featured: true
    },
    {
        name: "Maddi Anjaneya Swamy Temple",
        description: "A popular temple dedicated to Lord Hanuman, known for its spiritual atmosphere and devotional gatherings. Located in Guravaigudem near Jangareddygudem.",
        category: "Temples & Religious",
        address: "Guravaigudem, Jangareddygudem Mandal, Eluru District, Andhra Pradesh",
        timings: "6:00 AM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Hanuman Jayanti"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771852459/travelxplorer/places/iyby2763gwk3ukwmhggd.webp",
                publicId: "travelxplorer/places/iyby2763gwk3ukwmhggd"
            }
        ],
        dressCode: "Traditional attire preferred",
        specialRules: ["Remove footwear before entry"],
        foodRecommendations: ["Local tiffin centers nearby"],
        nearbyAttractions: ["Dwaraka Tirumala Temple (Chinna Tirupati)", "Sri Venkateswara Swami Temple (Jangareddygudem)"],
        crowdLevel: "Moderate",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.2773, 17.0863] },
        featured: false
    },
    {
        name: "Sri Venkateswara Swami Temple (Jangareddygudem)",
        description: "A revered temple dedicated to Lord Venkateswara and an important spiritual center in the region.",
        category: "Temples & Religious",
        address: "Jangareddygudem, Eluru District, Andhra Pradesh",
        timings: "6:00 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Brahmotsavam"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771852503/travelxplorer/places/hyli8eppbzkwrfzxvyhp.jpg",
                publicId: "travelxplorer/places/hyli8eppbzkwrfzxvyhp"
            }
        ],
        dressCode: "Traditional attire preferred",
        specialRules: ["Follow temple customs"],
        foodRecommendations: ["Local vegetarian hotels"],
        nearbyAttractions: ["Maddi Anjaneya Swamy Temple", "Dwaraka Tirumala Temple (Chinna Tirupati)"],
        crowdLevel: "Moderate",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.2750, 17.1230] },
        featured: false
    },
    {
        name: "Peddintlamma Temple (Kolletikota)",
        description: "A village temple located near Kolleru Lake, known for regional festivals and community worship.",
        category: "Temples & Religious",
        address: "Kolletikota, Eluru District, Andhra Pradesh",
        timings: "6:00 AM – 7:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Village Festival Days"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771852936/travelxplorer/places/af6wytslkk8cd4j0dvq6.jpg",
                publicId: "travelxplorer/places/af6wytslkk8cd4j0dvq6"
            }
        ],
        dressCode: "Traditional attire preferred",
        specialRules: ["Respect local customs"],
        foodRecommendations: ["Carry food and water"],
        nearbyAttractions: ["Kolleru Lake", "Kolleru Bird Sanctuary"],
        crowdLevel: "High during local festivals",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.2100, 16.6400] },
        featured: false
    },
    {
        name: "Pet Church / CSI Church",
        description: "A historic Christian church in Eluru known for its peaceful atmosphere and colonial-style architecture.",
        category: "Temples & Religious",
        address: "Eluru Town, Eluru District, Andhra Pradesh",
        timings: "6:00 AM – 8:00 PM (Service timings vary)",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Christmas", "New Year"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771852684/travelxplorer/places/zgvadfonfjg3blgudbai.jpg",
                publicId: "travelxplorer/places/zgvadfonfjg3blgudbai"
            }
        ],
        dressCode: "Modest attire recommended",
        specialRules: ["Maintain silence during prayers"],
        foodRecommendations: ["Local bakeries nearby"],
        nearbyAttractions: ["Eluru Clock Tower – Heritage City Walk", "Eluru Buddha Park"],
        crowdLevel: "High during Sunday services",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.1050, 16.7105] },
        featured: false
    },
    {
        name: "Eluru Buddha Park",
        description: "The Buddha Park in Eluru features a magnificent 72-foot statue of Lord Buddha in the middle of Gaja Vallivari Cheruvu tank. It is a peaceful city landmark with a walking track, boating facilities, and beautifully landscaped gardens.",
        category: "Parks & Gardens",
        address: "Gaja Vallivari Cheruvu, Eluru City, Eluru District, Andhra Pradesh",
        timings: "10:00 AM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Nominal Fee",
        entryFeeAmount: 20,
        bestSeason: ["Winter", "Evenings"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771856956/travelxplorer/places/cd2g411bqa8sy8rzhpmh.jpg",
                publicId: "travelxplorer/places/cd2g411bqa8sy8rzhpmh"
            }
        ],
        dressCode: "Casual wear",
        specialRules: ["Maintain cleanliness", "No littering in the tank"],
        foodRecommendations: ["Street food near park entrance", "Restaurants in Eluru city"],
        nearbyAttractions: ["Kolleru Lake", "Guntupalli Caves"],
        crowdLevel: "Medium (High on weekends)",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.1042, 16.7112] },
        featured: true
    },
    {
        name: "Balayogi Science Park",
        description: "Balayogi Science Park is an educational and recreational park in Eluru that features interactive science exhibits, models, and open green spaces. It is popular among students and families for learning-based outdoor activities.",
        category: "Parks & Gardens",
        address: "Ashok Nagar, Eluru, Eluru District, Andhra Pradesh 534002",
        timings: "10:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Nominal Fee",
        entryFeeAmount: 20,
        bestSeason: ["Winter", "All Seasons"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771856993/travelxplorer/places/fm9jecrasmycbrsgvppg.jpg",
                publicId: "travelxplorer/places/fm9jecrasmycbrsgvppg"
            }
        ],
        dressCode: "Casual and comfortable clothing",
        specialRules: [
            "Do not damage exhibits",
            "Follow park safety guidelines",
            "Supervise children carefully"
        ],
        foodRecommendations: [
            "Local snacks available nearby",
            "Carry water bottles"
        ],
        nearbyAttractions: [
            "Eluru Buddha Park",
            "V Max Cinemas & Shopping Mall"
        ],
        crowdLevel: "Moderate (High on weekends and holidays)",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [81.0952, 16.7107] },
        featured: false
    },
    {
        name: "Guntupalli Buddhist Caves",
        description: "Guntupalli Buddhist Caves, located in Kamavarapukota Mandal, are among the earliest rock-cut Buddhist monuments in Andhra Pradesh dating back to the 3rd–2nd century BCE. Also known locally as 'Kudavelli' or 'Kudiveli' caves, the site features a rare circular (vritta) chaitya hall carved into rock, along with a large monastery complex, stupas, and meditation cells. The site reflects early Buddhist monastic architecture and is protected by the Archaeological Survey of India.",
        category: "Historical & Archaeological",
        address: "Guntupalli Village, Kamavarapukota Mandal, Eluru District, Andhra Pradesh 534449",
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
        nearbyAttractions: ["Dwaraka Tirumala Temple (Chinna Tirupati)", "Kolleru Lake", "Eluru Buddha Park"],
        crowdLevel: "Low to Medium",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [81.1305, 17.0189] },
        featured: true
    },
    {
        name: "Rudramkota Archaeological Site",
        description: "Rudramkota, located in Velairpadu region (near Polavaram project zone), is an important archaeological site dating back nearly 3,000 years to the Megalithic period. Excavations carried out during the Polavaram project revealed ancient burial sites, megalithic graves, terracotta artifacts, pottery, and iron objects. The discoveries provide significant evidence of early Iron Age habitation and cultural practices in the Godavari region.",
        category: "Historical & Archaeological",
        address: "Rudramkota Village, Near Polavaram Region, Eluru District, Andhra Pradesh",
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
        name: "V Max Cinemas & Shopping Mall",
        description: "V Max Cinemas & Shopping Mall is one of the most modern shopping complexes in Eluru featuring a multiplex cinema, branded retail stores, and food outlets. It is a popular entertainment and shopping destination for youth and families.",
        category: "Shopping Malls",
        address: "Benarjipet Panntakaluva Rd, Paidichintapadu, Eluru, Andhra Pradesh 534001",
        timings: "10:00 AM – 10:30 PM",
        operationalDays: "All Days",
        entryFee: "Free (Movie tickets charged separately)",
        entryFeeAmount: 0,
        bestSeason: ["All Seasons", "Festival Days"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771859596/travelxplorer/places/g4gz2ont8ipzhdfjeo21.avif",
                publicId: "travelxplorer/places/g4gz2ont8ipzhdfjeo21"
            }
        ],
        dressCode: "Casual Wear",
        specialRules: ["Follow cinema guidelines", "No outside food inside theatre"],
        foodRecommendations: ["Mall food court", "Nearby restaurants"],
        nearbyAttractions: ["Eluru Buddha Park", "Balayogi Science Park", "CMR Shopping Mall Eluru"],
        crowdLevel: "High during weekends and new movie releases",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.0969, 16.7121] },
        featured: true
    },
    {
        name: "CMR Shopping Mall Eluru",
        description: "CMR Shopping Mall is a well-known retail shopping destination in Eluru, popular for sarees, gold jewellery, and family clothing collections. It is located near the main RTC bus station.",
        category: "Shopping Malls",
        address: "Main Road, Near RTC Bus Stand, Eluru, Eluru District, Andhra Pradesh 534006",
        timings: "9:30 AM – 9:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Festival Season", "Wedding Season"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771859659/travelxplorer/places/sdyv0dkfrrfif2s2vbus.avif",
                publicId: "travelxplorer/places/sdyv0dkfrrfif2s2vbus"
            }
        ],
        dressCode: "Casual or Traditional Wear",
        specialRules: ["Maintain billing receipts for returns"],
        foodRecommendations: ["Nearby sweet shops and restaurants"],
        nearbyAttractions: ["RS Brothers Eluru", "Eluru Buddha Park", "V Max Cinemas & Shopping Mall"],
        crowdLevel: "Very High during festivals",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.0889, 16.7078] },
        featured: true
    },
    {
        name: "South India Shopping Mall Eluru",
        description: "South India Shopping Mall in Eluru is a popular retail chain store offering affordable traditional and modern clothing for men, women, and children. It is a preferred choice for festive shopping.",
        category: "Shopping Malls",
        address: "MDR77, Chanikyapuri Colony, Powerpet, Eluru, Andhra Pradesh 534002",
        timings: "10:00 AM – 9:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["All Seasons", "Festival Days"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771859717/travelxplorer/places/fem0jld1ro85n5xfbhsf.avif",
                publicId: "travelxplorer/places/fem0jld1ro85n5xfbhsf"
            }
        ],
        dressCode: "Casual Wear",
        specialRules: ["Follow store exchange policies"],
        foodRecommendations: ["Nearby cafes and bakeries", "Powerpet eateries"],
        nearbyAttractions: ["V Max Cinemas & Shopping Mall", "Pet Church / CSI Church"],
        crowdLevel: "High during weekends",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.0964, 16.7029] },
        featured: false
    },
    {
        name: "RS Brothers Eluru",
        description: "RS Brothers is a famous textile and saree showroom in Eluru known for its vast collection of wedding silks, ethnic wear, and daily wear for the whole family.",
        category: "Shopping Malls",
        address: "RR Peta, Main Road, Eluru, Eluru District, Andhra Pradesh 534002",
        timings: "9:30 AM – 9:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Wedding Season", "Festival Season"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771859788/travelxplorer/places/i98k9ttkkvd3iuwcseme.avif",
                publicId: "travelxplorer/places/i98k9ttkkvd3iuwcseme"
            }
        ],
        dressCode: "Casual or Traditional Wear",
        specialRules: ["Check size and bill before leaving store"],
        foodRecommendations: ["Local tiffin centers nearby", "Main Road restaurants"],
        nearbyAttractions: ["CMR Shopping Mall Eluru", "Eluru Buddha Park", "South India Shopping Mall Eluru"],
        crowdLevel: "Very High during festive periods",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.0895, 16.7075] },
        featured: false
    },

    {
        name: "Kolleru Bird Sanctuary",
        description: "Kolleru Bird Sanctuary is a major freshwater wetland sanctuary located within Kolleru Lake in Eluru district. Known as 'Pelican Paradise' at Atapaka village, it is one of India's largest bird habitats and a designated Ramsar site, attracting thousands of migratory birds such as pelicans, painted storks, herons, and egrets during winter season.",
        category: "Wildlife & Nature",
        address: "Atapaka Village, Kolleru Lake Region, Eluru District, Andhra Pradesh",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Nominal Fee (Varies for camera/vehicle entry)",
        entryFeeAmount: 50,
        bestSeason: ["October", "November", "December", "January", "February", "March"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771860019/travelxplorer/places/ywrc9nwz64smigr6h7gp.jpg",
                publicId: "travelxplorer/places/ywrc9nwz64smigr6h7gp"
            }
        ],
        dressCode: "Comfortable outdoor clothing",
        specialRules: [
            "Do not disturb birds",
            "Avoid loud noises",
            "No littering inside sanctuary",
            "Follow forest department guidelines"
        ],
        foodRecommendations: [
            "Carry drinking water",
            "Local eateries in nearby villages"
        ],
        nearbyAttractions: [
            "Kolleru Lake",
            "Peddintlamma Temple (Kolletikota)"
        ],
        crowdLevel: "High during winter migratory season",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [81.2330, 16.6710] },
        featured: true
    },

    {
        name: "Eluru Clock Tower – Heritage City Walk",
        description: "Eluru Clock Tower is a historic British-era landmark located in the heart of Eluru city. A heritage city walk around the clock tower offers a glimpse into the old-town atmosphere, bustling local markets, traditional eateries, and colonial architectural charm. It is one of the best ways to experience the authentic cultural vibe of Eluru.",
        category: "Unique Local Experiences",
        address: "Main Center, Eluru, Eluru District, Andhra Pradesh",
        timings: "Best experienced between 5:00 PM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Evenings", "Festival Days"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771860298/travelxplorer/places/dwh7qywpis8pomzr3rub.jpg",
                publicId: "travelxplorer/places/dwh7qywpis8pomzr3rub"
            }
        ],
        dressCode: "Casual and comfortable walking attire",
        specialRules: [
            "Be cautious of traffic",
            "Respect local shops and vendors",
            "Maintain cleanliness"
        ],
        foodRecommendations: [
            "Local street food stalls",
            "Nearby traditional tiffin centers",
            "Sweet shops around main center"
        ],
        nearbyAttractions: [
            "Eluru Buddha Park",
            "Balayogi Science Park",
            "Pet Church / CSI Church"
        ],
        crowdLevel: "High during evenings and weekends",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.1006, 16.7107] },
        featured: true
    },
];

async function seedEluru() {
    try {
        if (!process.env.MONGODB_URI) {
            console.error('MONGODB_URI is missing in .env');
            process.exit(1);
        }

        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB...');

        const district = await District.findOne({ name: 'Eluru' });
        if (!district) {
            console.error('Eluru District not found! Please run seedDistricts.js first.');
            process.exit(1);
        }

        for (const placeData of ELURU_PLACES) {
            await Place.findOneAndUpdate(
                { name: placeData.name },
                { ...placeData, district: district._id },
                { upsert: true, new: true }
            );
            console.log(`Added/Updated: ${placeData.name}`);
        }

        console.log('Successfully seeded Eluru data!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
}

seedEluru();
