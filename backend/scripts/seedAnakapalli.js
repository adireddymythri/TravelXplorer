import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Place from '../models/Place.js';
import District from '../models/District.js';

dotenv.config();

const ANAKAPALLI_PLACES = [
    {
        name: "Bojjannakonda Buddhist Site",
        description: "Bojjannakonda and Lingalakonda are two sacred Buddhist rock-cut caves and monasteries dating back to the 4th-9th century AD. Located near Sankaram village, the site features numerous monolithic stupas, rock-cut caves, and a massive statue of Buddha in a meditative posture. It is one of the most significant archaeological sites in Andhra Pradesh.",
        category: "Historical & Archaeological",
        address: "Sankaram Village, Anakapalli Mandal, Anakapalli District, Andhra Pradesh 531001",
        timings: "9:00 AM – 5:30 PM",
        operationalDays: "All Days",
        entryFee: "Nominal Fee",
        entryFeeAmount: 25,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771949387/travelxplorer/places/ziarask7nrvv98wqlukf.jpg",
                publicId: "travelxplorer/places/ziarask7nrvv98wqlukf"
            }
        ],
        dressCode: "Comfortable walking shoes; modest attire for historical site",
        specialRules: ["Do not touch or climb on ancient stupas", "Photography allowed in designated areas", "Keep the premises clean"],
        foodRecommendations: ["Local tiffin centers in Anakapalli town"],
        nearbyAttractions: ["Lingalakonda", "Anakapalli Jaggery Market", "Sri Nookambika Ammavari Temple"],
        crowdLevel: "Moderate",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [83.0130, 17.7126] },
        featured: true
    },
    {
        name: "Kondakarla Ava Bird Sanctuary",
        description: "Kondakarla Ava is the second largest freshwater lake in Andhra Pradesh and a thriving bird sanctuary. Surrounded by the Eastern Ghats, it is famous for its unique palm-log boating experience and diverse migratory birds including Pelicans and Painted Storks. The lake is filled with beautiful lotus flowers, making it a peaceful eco-tourism spot.",
        category: "Wildlife & Nature",
        address: "Kondakarla Village, Atchutapuram Mandal, Anakapalli District, Andhra Pradesh 531033",
        timings: "7:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Entry Fee + Boating Charges",
        entryFeeAmount: 50,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771950416/travelxplorer/places/e4ynmy3mja33e42cdnxi.jpg",
                publicId: "travelxplorer/places/e4ynmy3mja33e42cdnxi"
            }
        ],
        dressCode: "Casual/Outdoor wear",
        specialRules: ["Wear life jackets during boating", "Do not disturb birds", "Avoid loud music"],
        foodRecommendations: ["Carry snacks and water", "Local village style fish curry"],
        nearbyAttractions: ["Panchadarla Dharmalingeswara Temple", "Revupolavaram Beach", "Appikonda Beach"],
        crowdLevel: "Medium (High on weekends)",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [82.9868, 17.5872] },
        featured: true
    },




    {
        name: "Eastern Ghats Forest Belt (Anakapalli Region)",
        description: "The Eastern Ghats forest belt across interior mandals of Anakapalli district features dense greenery, biodiversity, tribal culture, and untouched natural landscapes.",
        category: "Wildlife & Nature",
        address: "Eastern Ghats Interior Mandals, Anakapalli District, Andhra Pradesh",
        timings: "6:00 AM – 5:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Monsoon"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771950789/travelxplorer/places/rkdtc0rvqguyxwsqxid9.jpg",
                publicId: "travelxplorer/places/rkdtc0rvqguyxwsqxid9"
            }
        ],
        dressCode: "Outdoor / trekking attire",
        specialRules: ["Avoid forest entry without guidance", "Protect wildlife habitat"],
        foodRecommendations: ["Carry food supplies"],
        nearbyAttractions: ["Ravikamatam Hills"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [82.8050, 17.7550] },
        featured: true
    },
    {
        name: "Anakapalli Agricultural Countryside Landscapes",
        description: "The agricultural countryside of Anakapalli district showcases lush paddy fields, jaggery cultivation areas, and rural scenic beauty representing traditional farming life of coastal Andhra.",
        category: "Wildlife & Nature",
        address: "Rural Areas Around Anakapalli, Andhra Pradesh",
        timings: "Open 24 hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Monsoon", "Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771950882/travelxplorer/places/zdjz2luqmxwaqr5tslbe.jpg",
                publicId: "travelxplorer/places/zdjz2luqmxwaqr5tslbe"
            }
        ],
        dressCode: "Casual outdoor clothing",
        specialRules: ["Respect farmland and private property"],
        foodRecommendations: ["Local village cuisine"],
        nearbyAttractions: ["Anakapalli Jaggery Market"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [82.9870, 17.6200] },
        featured: false
    },
    {
        name: "Etikoppaka Toy Village",
        description: "Etikoppaka is globally famous for its GI-tagged wooden lacquer toys. Artisans here use 'Ankudu Karra' (soft wood) and natural dyes derived from seeds, lacquer, and roots to create eco-friendly, colorful toys. Visitors can witness the intricate process of toy-making and purchase authentic handicrafts directly from the workshops.",
        category: "Unique Local Experiences",
        address: "Etikoppaka Village, Yelamanchili Mandal, Anakapalli District, Andhra Pradesh 531082",
        timings: "9:00 AM – 7:00 PM (Workshop hours)",
        operationalDays: "All Days except major festivals",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771950993/travelxplorer/places/t7mwtpc2xufl7pak0giu.jpg",
                publicId: "travelxplorer/places/t7mwtpc2xufl7pak0giu"
            }
        ],
        dressCode: "Casual",
        specialRules: ["Respect the artisans' work", "Ask permission before filming detailed processes"],
        foodRecommendations: ["Traditional village meals", "Local sweets"],
        nearbyAttractions: ["Panchadarla Dharmalingeswara Temple", "Kondakarla Ava Bird Sanctuary"],
        crowdLevel: "Low to Moderate",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [82.7550, 17.4350] },
        featured: true
    },

    {
        name: "Appikonda Beach",
        description: "Appikonda Beach is the primary coastal destination in Anakapalli district known for its peaceful shoreline, scenic sea views, and proximity to the historic Appikonda Someswara Swamy Temple. The beach remains less crowded and offers a calm natural environment.",
        category: "Beaches & Coastal",
        address: "Appikonda Village, Anakapalli District, Andhra Pradesh",
        timings: "Open 24 hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771948814/travelxplorer/places/wqfj6ukg4fdxgi3igkhr.jpg",
                publicId: "travelxplorer/places/wqfj6ukg4fdxgi3igkhr"
            }
        ],
        dressCode: "Comfortable beachwear; modest clothing recommended",
        specialRules: [
            "Avoid swimming during strong tides",
            "Maintain beach cleanliness",
            "Carry essentials as facilities are limited"
        ],
        foodRecommendations: ["Local seafood", "Carry snacks and water"],
        nearbyAttractions: ["Appikonda Someswara Temple", "Kondakarla Ava Bird Sanctuary"],
        crowdLevel: "Low to Medium",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [83.2165, 17.6080] },
        featured: true
    },
    {
        name: "Panchadarla Dharmalingeswara Temple",
        description: "Panchadarla, also known as Dharapalem, is home to the ancient Dharmalingewara Temple built by the Eastern Chalukyas. The name comes from 'five streams' (Panchadarla) that flow continuously through the temple complex from a natural underground source. The temple features 15th-century inscriptions and beautiful stone pillars.",
        category: "Temples & Religious",
        address: "Dharapalem Village, Rambilli Mandal, Anakapalli District, Andhra Pradesh 531061",
        timings: "6:00 AM – 7:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771950081/travelxplorer/places/ho2ekcyzcluz4owfllig.jpg",
                publicId: "travelxplorer/places/ho2ekcyzcluz4owfllig"
            }
        ],
        dressCode: "Traditional/Modest attire preferred",
        specialRules: ["No photography inside the main sanctum", "Maintain silence"],
        foodRecommendations: ["Temple surroundings have limited options; Anakapalli town is better"],
        nearbyAttractions: ["Kondakarla Ava Bird Sanctuary", "Etikoppaka Toy Village"],
        crowdLevel: "Low",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [82.8805, 17.5258] },
        featured: false
    },
    {
        name: "Anakapalli Jaggery Market",
        description: "Anakapalli is home to the second largest jaggery market in India and the largest in South India. It is a vibrant commercial hub where thousands of tons of jaggery blocks are traded daily. A visit offers a unique insight into the agricultural economy and the traditional jaggery-making heritage of north coastal Andhra.",
        category: "Unique Local Experiences",
        address: "Jaggery Market Road, Anakapalli Town, Anakapalli District, Andhra Pradesh 531001",
        timings: "8:00 AM – 3:00 PM (Market peak hours)",
        operationalDays: "All Days except Sundays and bank holidays",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Summer"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771951077/travelxplorer/places/sjaopqwrbhpmdfzd0fkk.jpg",
                publicId: "travelxplorer/places/sjaopqwrbhpmdfzd0fkk"
            }
        ],
        dressCode: "Casual",
        specialRules: ["Watch out for heavy vehicle movement", "Be careful of your surroundings in the busy market"],
        foodRecommendations: ["Anakapalli traditional sweets", "Spicy local Garijalu (deep fried snacks)"],
        nearbyAttractions: ["Bojjannakonda Buddhist Site", "Sri Nookambika Ammavari Temple", "Sri Jagannatha Swamy Temple (Anakapalle)"],
        crowdLevel: "Very High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.0035, 17.6898] },
        featured: false
    },
    {
        name: "Appikonda Someswara Temple",
        description: "Appikonda Someswara Temple is an ancient temple dedicated to Lord Shiva located near the Bay of Bengal coast. The temple is known for its peaceful spiritual atmosphere and historic importance.",
        category: "Temples & Religious",
        address: "Appikonda Village, Anakapalli District, Andhra Pradesh",
        timings: "6:00 AM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771949288/travelxplorer/places/ko8jlrjwzpvahfj7ukev.webp",
                publicId: "travelxplorer/places/ko8jlrjwzpvahfj7ukev"
            }
        ],
        dressCode: "Traditional attire recommended",
        specialRules: ["Remove footwear before entry"],
        foodRecommendations: ["Local village food stalls"],
        nearbyAttractions: ["Appikonda Beach"],
        crowdLevel: "Medium",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.2155, 17.6085] },
        featured: true
    },

    {
        name: "Lingalakonda",
        description: "Lingalakonda is a Buddhist archaeological hill site located opposite Bojjannakonda featuring ancient stupas carved into hill formations.",
        category: "Temples & Religious",
        address: "Sankaram, Anakapalli District, Andhra Pradesh",
        timings: "9:00 AM – 5:00 PM",
        operationalDays: "All Days",
        entryFee: "Included with Bojjannakonda Entry",
        entryFeeAmount: 20,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771949649/travelxplorer/places/ko7lrnehucvhbrkxjh2u.jpg",
                publicId: "travelxplorer/places/ko7lrnehucvhbrkxjh2u"
            }
        ],
        dressCode: "Comfortable trekking wear",
        specialRules: ["Avoid climbing restricted areas"],
        foodRecommendations: ["Carry essentials"],
        nearbyAttractions: ["Bojjannakonda Buddhist Site"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [83.0120, 17.7090] },
        featured: false
    },
    {
        name: "Sri Nookambika Ammavari Temple",
        description: "Sri Nookambika Ammavari Temple is the presiding deity temple of Anakapalle town and attracts thousands of devotees during annual festivals.",
        category: "Temples & Religious",
        address: "Anakapalle Town, Anakapalli District, Andhra Pradesh",
        timings: "5:00 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Summer", "Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771949764/travelxplorer/places/srocjsxnkqvk2gbuzowq.webp",
                publicId: "travelxplorer/places/srocjsxnkqvk2gbuzowq"
            }
        ],
        dressCode: "Traditional attire preferred",
        specialRules: ["Follow temple customs"],
        foodRecommendations: ["Local restaurants in Anakapalle"],
        nearbyAttractions: ["Anakapalli Jaggery Market", "Bojjannakonda Buddhist Site", "Sri Jagannatha Swamy Temple (Anakapalle)"],
        crowdLevel: "High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.0215, 17.7013] },
        featured: true
    },
    {
        name: "Sri Jagannatha Swamy Temple (Anakapalle)",
        description: "Sri Jagannatha Swamy Temple in Anakapalle is an important spiritual center dedicated to Lord Jagannatha and hosts traditional festivals celebrated by local devotees.",
        category: "Temples & Religious",
        address: "Anakapalle, Anakapalli District, Andhra Pradesh",
        timings: "6:00 AM – 8:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Summer", "Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771949892/travelxplorer/places/uqdpr9yjr3nitd6kpiqa.jpg",
                publicId: "travelxplorer/places/uqdpr9yjr3nitd6kpiqa"
            }
        ],
        dressCode: "Traditional attire recommended",
        specialRules: ["Maintain temple discipline"],
        foodRecommendations: ["Local sweet shops"],
        nearbyAttractions: ["Anakapalle Jaggery Market", "Sri Nookambika Ammavari Temple"],
        crowdLevel: "Medium",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.0005, 17.6855] },
        featured: false
    },
    {
        name: "Narsipatnam Municipal Park",
        description: "Narsipatnam Municipal Park is a well-maintained public garden offering greenery, walking paths, and recreational space for families and visitors in the Narsipatnam region.",
        category: "Parks & Gardens",
        address: "Narsipatnam Town, Anakapalli District, Andhra Pradesh",
        timings: "5:30 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771951484/travelxplorer/places/p1rhl84qjhmeij3fdksl.webp",
                publicId: "travelxplorer/places/p1rhl84qjhmeij3fdksl"
            }
        ],
        dressCode: "Casual clothing",
        specialRules: ["Maintain cleanliness"],
        foodRecommendations: ["Local eateries nearby"],
        nearbyAttractions: ["Eastern Ghats Forest Belt (Anakapalli Region)"],
        crowdLevel: "Medium",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [82.6135, 17.6685] },
        featured: false
    },
    {
        name: "Anakapalle Municipal Park",
        description: "Anakapalle Municipal Park is a popular green recreational space in the town featuring gardens, seating areas, and walking tracks used by locals for relaxation and evening visits.",
        category: "Parks & Gardens",
        address: "Anakapalle Town, Anakapalli District, Andhra Pradesh",
        timings: "5:00 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round", "Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771951524/travelxplorer/places/qooyjpfukgwj5dujty92.avif",
                publicId: "travelxplorer/places/qooyjpfukgwj5dujty92"
            }
        ],
        dressCode: "Casual wear",
        specialRules: ["Follow park rules"],
        foodRecommendations: ["Nearby street food stalls"],
        nearbyAttractions: ["Sri Nookambika Ammavari Temple", "CMR Shopping Mall - Anakapalle"],
        crowdLevel: "Medium",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.0040, 17.6890] },
        featured: true
    },


    {
        name: "CMR Shopping Mall - Anakapalle",
        description: "CMR Shopping Mall is one of the most popular shopping destinations in Anakapalle offering sarees, ethnic wear, fashion clothing, and family shopping collections. It is a major festive shopping hub in the district.",
        category: "Shopping Malls",
        address: "Perugu Bazar, GNT Road, Anakapalle, Anakapalli District, Andhra Pradesh",
        timings: "10:00 AM – 9:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771951802/travelxplorer/places/lo4ghnu1cf5mak636rjz.jpg",
                publicId: "travelxplorer/places/lo4ghnu1cf5mak636rjz"
            }
        ],
        dressCode: "Casual or traditional wear",
        specialRules: ["Follow store policies"],
        foodRecommendations: ["Nearby restaurants and cafes"],
        nearbyAttractions: ["Sri Nookambika Ammavari Temple", "Anakapalle Municipal Park"],
        crowdLevel: "High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.0018, 17.6912] },
        featured: true
    },

    {
        name: "Lucky Shopping Mall - Anakapalle",
        description: "Lucky Shopping Mall is a popular retail shopping center in Anakapalle known for affordable fashion, clothing collections, and everyday family shopping.",
        category: "Shopping Malls",
        address: "Main Road, Gavarapalem, Anakapalle, Andhra Pradesh",
        timings: "10:00 AM – 9:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771951859/travelxplorer/places/frwmc6xy98v7fqbicxmi.avif",
                publicId: "travelxplorer/places/frwmc6xy98v7fqbicxmi"
            }
        ],
        dressCode: "Casual wear",
        specialRules: ["Follow mall guidelines"],
        foodRecommendations: ["Nearby local eateries"],
        nearbyAttractions: ["Anakapalle Jaggery Market", "CMR Shopping Mall - Anakapalle"],
        crowdLevel: "Medium",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.0022, 17.6915] },
        featured: false
    },


];

async function seedAnakapalli() {
    try {
        if (!process.env.MONGODB_URI) {
            console.error('MONGODB_URI is missing in .env');
            process.exit(1);
        }

        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB...');

        const district = await District.findOne({ name: 'Anakapalli' });
        if (!district) {
            console.error('Anakapalli District not found! Please run seedDistricts.js first.');
            process.exit(1);
        }

        if (ANAKAPALLI_PLACES.length === 0) {
            console.log('No places to seed for Anakapalli yet.');
        } else {
            for (const placeData of ANAKAPALLI_PLACES) {
                await Place.findOneAndUpdate(
                    { name: placeData.name },
                    { ...placeData, district: district._id },
                    { upsert: true, new: true }
                );
                console.log(`Added/Updated: ${placeData.name}`);
            }
            console.log('Successfully seeded Anakapalli data!');
        }

        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
}

seedAnakapalli();
