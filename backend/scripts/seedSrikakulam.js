import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Place from '../models/Place.js';
import District from '../models/District.js';

dotenv.config();

const SRIKAKULAM_PLACES = [
    {
        name: "Kalingapatnam Beach",
        description: "Kalingapatnam Beach is a historic coastal destination where the Vamsadhara River meets the Bay of Bengal. The beach is known for its peaceful surroundings, wide sandy shores, and the iconic British-era lighthouse. It was once a prominent port city during the colonial period.",
        category: "Beaches & Coastal",
        address: "Kalingapatnam Village, Gara Mandal, Srikakulam District, Andhra Pradesh 532406",
        timings: "Open 24 Hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771938626/travelxplorer/places/ppsaa1aingjuwmplmtlm.jpg",
                publicId: "travelxplorer/places/ppsaa1aingjuwmplmtlm"
            }
        ],
        dressCode: "Comfortable beachwear; modest clothing recommended near village areas",
        specialRules: ["Avoid deep sea swimming", "Follow coastal safety warnings", "Keep the beach clean"],
        foodRecommendations: ["Local seafood stalls", "Fresh coconut water", "Village-style snacks"],
        nearbyAttractions: ["Arasavalli Sun Temple", "Sri Kurmanatha Swamy Temple"],
        crowdLevel: "Medium",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [84.1211, 18.3387] },
        featured: true
    },
    {
        name: "Baruva Beach",
        description: "Baruva Beach is a serene coastal stretch famous for its historic old port, lush coconut groves, and calm atmosphere. It is one of the oldest beaches in the district and offers a picturesque view where the Mahendratanaya River meets the sea.",
        category: "Beaches & Coastal",
        address: "Baruva Village, Sompeta Mandal, Srikakulam District, Andhra Pradesh 532263",
        timings: "Open 24 Hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771938673/travelxplorer/places/ajp6yrqrdyxp9tre0ev2.jpg",
                publicId: "travelxplorer/places/ajp6yrqrdyxp9tre0ev2"
            }
        ],
        dressCode: "Comfortable beachwear",
        specialRules: ["Swimming with caution due to tides", "No littering"],
        foodRecommendations: ["Fresh fish fry", "Local coastal delicacies"],
        nearbyAttractions: ["Srimukhalingam Temple"],
        crowdLevel: "Low to Moderate",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [84.5963, 18.8815] },
        featured: true
    },
    {
        name: "Kallepalli Beach",
        description: "Kallepalli Beach is a quiet, untouched coastal area near Srikakulam town. It is known for its serene environment, golden sands, and the point where the River Nagavali meets the Bay of Bengal, making it a peaceful retreat.",
        category: "Beaches & Coastal",
        address: "Kallepalli, Srikakulam District, Andhra Pradesh 532001",
        timings: "Open 24 Hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771938710/travelxplorer/places/nfouytduubplbesl0duz.webp",
                publicId: "travelxplorer/places/nfouytduubplbesl0duz"
            }
        ],
        dressCode: "Casual outdoor wear",
        specialRules: ["Avoid deep water as river currents can be unpredictable"],
        foodRecommendations: ["Carry own snacks and water", "Local food in Srikakulam town"],
        nearbyAttractions: ["Arasavalli Sun Temple", "Sri Kurmanatha Swamy Temple"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [83.9301, 18.2374] },
        featured: false
    },
    {
        name: "Mogadalapadu Beach",
        description: "Mogadalapadu Beach is a pristine eco-tourism spot famous for being a nesting ground for the endangered Olive Ridley sea turtles. The beach offers a raw, natural beauty and is a must-visit for nature enthusiasts.",
        category: "Beaches & Coastal",
        address: "Mogadalapadu Village, Srikakulam District, Andhra Pradesh 532005",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771938762/travelxplorer/places/cjbfoa5onwxkpbq7dl0e.jpg",
                publicId: "travelxplorer/places/cjbfoa5onwxkpbq7dl0e"
            }
        ],
        dressCode: "Comfortable outdoor clothing",
        specialRules: [
            "Do not disturb turtle nesting areas",
            "No flash photography during nesting season",
            "Strictly no plastic usage"
        ],
        foodRecommendations: ["Carry essentials and water"],
        nearbyAttractions: ["Arasavalli Sun Temple"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [84.1697, 18.2831] },
        featured: true
    },
    {
        name: "Arasavalli Sun Temple",
        description: "The Arasavalli Sun Temple is one of the most ancient and famous Sun temples in India. Built in the 7th century, it is dedicated to Lord Suryanarayana Swamy. The temple is unique as the sun rays touch the feet of the deity twice a year during Ratha Saptami.",
        category: "Temples & Religious",
        address: "Arasavalli, Srikakulam, Andhra Pradesh 532001",
        timings: "6:00 AM – 12:30 PM & 3:30 PM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free (Special darshan tickets available)",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771938830/travelxplorer/places/fpyvpkmh7dceqfbtocwr.jpg",
                publicId: "travelxplorer/places/fpyvpkmh7dceqfbtocwr"
            }
        ],
        dressCode: "Traditional attire preferred",
        specialRules: ["No photography inside the sanctum", "Remove footwear before entry"],
        foodRecommendations: ["Temple Prasadam", "Local vegetarian restaurants in Srikakulam"],
        nearbyAttractions: ["Sri Kurmanatha Swamy Temple", "Kalingapatnam Beach"],
        crowdLevel: "High (especially on Sundays)",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.9136, 18.2879] },
        featured: true
    },
    {
        name: "Sri Kurmanatha Swamy Temple",
        description: "This unique temple in Kuru Village is the only temple in the world dedicated to the Kurma (Tortoise) avatar of Lord Vishnu. It is known for its remarkable architecture, two flag masts (Dhwajasthambas), and ancient inscriptions.",
        category: "Temples & Religious",
        address: "Srikurmam Village, Gara Mandal, Srikakulam District, Andhra Pradesh 532404",
        timings: "6:00 AM – 1:00 PM & 3:00 PM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round", "Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771938915/travelxplorer/places/o8pn6f6io6iezm9912la.jpg",
                publicId: "travelxplorer/places/o8pn6f6io6iezm9912la"
            }
        ],
        dressCode: "Traditional attire preferred",
        specialRules: ["Follow temple customs", "Photography restrictions apply"],
        foodRecommendations: ["Temple Prasadam"],
        nearbyAttractions: ["Arasavalli Sun Temple", "Kalingapatnam Beach"],
        crowdLevel: "Moderate",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [84.0066, 18.2700] },
        featured: true
    },
    {
        name: "Srimukhalingam Temple",
        description: "Srimukhalingam was the erstwhile capital of the Eastern Ganga kings. The temple complex, dedicated to Lord Shiva, is famous for its exquisite Kalinga-style architecture and fine stone carvings. It is situated on the banks of the Vamsadhara River.",
        category: "Temples & Religious",
        address: "Srimukhalingam Village, Jalumuru Mandal, Srikakulam District, Andhra Pradesh 532428",
        timings: "5:30 AM – 7:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771938995/travelxplorer/places/fgl7mzknwqpnhmv1wikt.jpg",
                publicId: "travelxplorer/places/fgl7mzknwqpnhmv1wikt"
            }
        ],
        dressCode: "Traditional/Modest attire",
        specialRules: ["Respect the archaeological site", "Photography allowed in outer complex"],
        foodRecommendations: ["Carry snacks", "Local eateries near the temple"],
        nearbyAttractions: ["Kalingapatnam Beach", "Arasavalli Sun Temple"],
        crowdLevel: "Moderate (High during Shivaratri)",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.9667, 18.6000] },
        featured: true
    },
    {
        name: "Sri Vasudeva Perumal Temple (Mandasa Temple)",
        description: "Sri Vasudeva Perumal Temple in Mandasa is a historical gem consecrated in 1744 AD. Dedicated to Lord Vishnu, the temple is renowned for its intricate stone carvings, wooden sculptures, and its unique cultural connection to the Mandasa Royal Family. It sits beautifully at the foot of the Mahendragiri Hills.",
        category: "Temples & Religious",
        address: "Mandasa Raja Vari Fort, Mandasa, Srikakulam District, Andhra Pradesh 532242",
        timings: "6:00 AM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771939099/travelxplorer/places/wauq9pnrkcmres1q598t.avif",
                publicId: "travelxplorer/places/wauq9pnrkcmres1q598t"
            }
        ],
        dressCode: "Traditional attire preferred",
        specialRules: ["Respect temple traditions", "Photography might be restricted in sanctum"],
        foodRecommendations: ["Mandasa Palakova (famous local sweet)", "Local village food"],
        nearbyAttractions: ["Baruva Beach", "Mandasa Fort"],
        crowdLevel: "Moderate",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [84.4630, 18.8683] },
        featured: true
    },
    {
        name: "Mandasa Fort",
        description: "Mandasa Fort is a 18th-century architectural marvel located near the Mahendragiri Mountain. Built in 1710 by Raja Damodara Champat Dev, the fort showcases a blend of regional and colonial architectural styles. It offers a majestic view of the Eastern Ghats and the lush landscape of the region.",
        category: "Historical & Archaeological",
        address: "Mandasa Village, Srikakulam District, Andhra Pradesh 532242",
        timings: "9:00 AM – 5:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771939833/travelxplorer/places/qbmwirfphof9qvizi0rm.jpg",
                publicId: "travelxplorer/places/qbmwirfphof9qvizi0rm"
            }
        ],
        dressCode: "Comfortable walking attire",
        specialRules: ["Do not litter", "No vandalism of historical structures", "Be cautious while climbing"],
        foodRecommendations: ["Nearby local eateries", "Try local Mandasa Palakova"],
        nearbyAttractions: ["Sri Vasudeva Perumal Temple (Mandasa Temple)", "Baruva Beach", "Mahendragiri Hills"],
        crowdLevel: "Low to Moderate",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [84.4630, 18.8683] },
        featured: true
    },
    {
        name: "Sri Kotilingeswara Temple",
        description: "Sri Kotilingeswara Temple is a serene spiritual sanctuary located on the banks of the Vamsadhara River. The temple is famous for its collection of Shivalingas and provides a tranquil atmosphere for meditation and worship away from the city's hustle.",
        category: "Temples & Religious",
        address: "Kothuru, Srikakulam District, Andhra Pradesh 532455",
        timings: "6:00 AM – 12:30 PM & 4:00 PM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771939244/travelxplorer/places/fbok2w6e3fhxxrysopab.jpg",
                publicId: "travelxplorer/places/fbok2w6e3fhxxrysopab"
            }
        ],
        dressCode: "Traditional attire recommended",
        specialRules: ["Maintain silence inside temple", "Follow local customs"],
        foodRecommendations: ["Local tiffin centers", "Fresh coconut water"],
        nearbyAttractions: ["Kalingapatnam Beach", "Arasavalli Sun Temple"],
        crowdLevel: "Moderate",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [84.0532, 18.2931] },
        featured: false
    },


    {
        name: "Salihundam Buddhist Stupas",
        description: "Salihundam Buddhist Stupas are ancient archaeological remains located on a hill overlooking the Vamsadhara River. The site contains stupas, chaityas, and monasteries dating back to early Buddhist civilization (2nd century BC to 12th century AD). It is an important site for Buddhist history in Andhra Pradesh.",
        category: "Historical & Archaeological",
        address: "Salihundam, Gara Mandal, Srikakulam District, Andhra Pradesh 532406",
        timings: "9:00 AM – 5:00 PM",
        operationalDays: "All Days",
        entryFee: "Nominal Fee",
        entryFeeAmount: 20,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771939940/travelxplorer/places/c8ye76d7lzvoatknxxbj.jpg",
                publicId: "travelxplorer/places/c8ye76d7lzvoatknxxbj"
            }
        ],
        dressCode: "Comfortable outdoor clothing",
        specialRules: ["Do not climb monuments", "Maintain cleanliness"],
        foodRecommendations: ["Carry water and snacks"],
        nearbyAttractions: ["Vamsadhara River Banks", "Kalingapatnam Beach"],
        crowdLevel: "Low to Moderate",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [84.0432, 18.3338] },
        featured: true
    },
    {
        name: "Baruva Old Port",
        description: "Baruva Old Port is a historic coastal trading port that once played an important role in maritime trade during colonial times. Today it remains a heritage landmark near Baruva Beach, with remains of old structures and a lighthouse.",
        category: "Historical & Archaeological",
        address: "Baruva, Srikakulam District, Andhra Pradesh 532263",
        timings: "Open 24 hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771939993/travelxplorer/places/rhlwcgph78o7dopm4wfv.jpg",
                publicId: "travelxplorer/places/rhlwcgph78o7dopm4wfv"
            }
        ],
        dressCode: "Casual outdoor wear",
        specialRules: ["Be careful near coastal structures"],
        foodRecommendations: ["Local seafood stalls"],
        nearbyAttractions: ["Baruva Beach", "Sri Vasudeva Perumal Temple (Mandasa Temple)"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [84.5823, 18.8887] },
        featured: true
    },


    {
        name: "Vamsadhara River Banks",
        description: "The Vamsadhara River is one of the major rivers flowing through Srikakulam district, offering scenic riverbank views, peaceful surroundings, and agricultural landscapes ideal for nature visits and photography. Several historic temples and sites are located along its banks.",
        category: "Wildlife & Nature",
        address: "Vamsadhara River Region, Srikakulam District, Andhra Pradesh",
        timings: "Open 24 hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Monsoon"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771940485/travelxplorer/places/dhrrh8tjdce1jtisdwid.jpg",
                publicId: "travelxplorer/places/dhrrh8tjdce1jtisdwid"
            }
        ],
        dressCode: "Comfortable outdoor clothing",
        specialRules: ["Avoid entering deep water", "Maintain cleanliness"],
        foodRecommendations: ["Local village food stalls"],
        nearbyAttractions: ["Salihundam Buddhist Stupas", "Srimukhalingam Temple", "Sri Kotilingeswara Temple"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [84.1333, 18.3500] },
        featured: true
    },
    {
        name: "Telineelapuram Bird Sanctuary",
        description: "Telineelapuram Bird Sanctuary is a famous seasonal bird habitat attracting migratory birds such as pelicans and painted storks from as far as Siberia. It is one of the most important bird-watching destinations in Andhra Pradesh.",
        category: "Wildlife & Nature",
        address: "Telineelapuram Village, Tekkali Mandal, Srikakulam District, Andhra Pradesh 532201",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771940536/travelxplorer/places/n3tnhzss5909vp8vtjra.jpg",
                publicId: "travelxplorer/places/n3tnhzss5909vp8vtjra"
            }
        ],
        dressCode: "Comfortable outdoor wear",
        specialRules: [
            "Do not disturb birds",
            "Avoid loud noises",
            "No littering",
            "Photography allowed from designated spots"
        ],
        foodRecommendations: ["Carry drinking water", "Local food in Tekkali town"],
        nearbyAttractions: ["Vamsadhara River Banks", "Sunabeda Wildlife Sanctuary (Nearby Region)"],
        crowdLevel: "Medium during migration season",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [84.2815, 18.5714] },
        featured: true
    },
    {
        name: "Kalingapatnam Lighthouse",
        description: "Kalingapatnam Lighthouse is a coastal landmark offering panoramic views of the Bay of Bengal and surrounding shoreline. It is located near the historic Kalingapatnam Beach.",
        category: "Wildlife & Nature",
        address: "Kalingapatnam, Srikakulam District, Andhra Pradesh",
        timings: "9:00 AM – 5:30 PM",
        operationalDays: "All Days",
        entryFee: "Nominal Fee",
        entryFeeAmount: 20,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771940590/travelxplorer/places/mgvnjw6rw4fjhe3qof50.jpg",
                publicId: "travelxplorer/places/mgvnjw6rw4fjhe3qof50"
            }
        ],
        dressCode: "Casual outdoor clothing",
        specialRules: ["Follow lighthouse safety instructions"],
        foodRecommendations: ["Beachside snacks"],
        nearbyAttractions: ["Kalingapatnam Beach"],
        crowdLevel: "Moderate",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [84.1218, 18.3405] },
        featured: true
    },
    {
        name: "Mahendragiri Hills",
        description: "Mahendragiri Hills, part of the Eastern Ghats near the Andhra Pradesh–Odisha border, is known for its lush greenery, biodiversity, and panoramic mountain views. It is a sacred peak mentioned in the Ramayana and Mahabharata, offering great trekking opportunities.",
        category: "Wildlife & Nature",
        address: "Mahendragiri Hill Range, Near Mandasa, Srikakulam District Border",
        timings: "6:00 AM – 5:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771942530/travelxplorer/places/x4nceavxr4ttmwec1wd6.jpg",
                publicId: "travelxplorer/places/x4nceavxr4ttmwec1wd6"
            }
        ],
        dressCode: "Trekking or comfortable outdoor wear",
        specialRules: [
            "Travel with local guidance",
            "Avoid trekking during heavy rains",
            "No overnight camping without permission"
        ],
        foodRecommendations: ["Carry heavy snacks and plenty of water"],
        nearbyAttractions: ["Mandasa Fort", "Sri Vasudeva Perumal Temple (Mandasa Temple)"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [84.3657, 18.9671] },
        featured: true
    },
    {
        name: "Indira Gandhi Municipal Park",
        description: "Indira Gandhi Municipal Park is the primary public park in Srikakulam town featuring landscaped gardens, walking tracks, seating areas, and children's play zones. It is a popular recreational space for families and evening visitors.",
        category: "Parks & Gardens",
        address: "Srikakulam Town, Srikakulam District, Andhra Pradesh",
        timings: "5:00 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round", "Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771942904/travelxplorer/places/v94zwqykwursfiujwofr.jpg",
                publicId: "travelxplorer/places/v94zwqykwursfiujwofr"
            }
        ],
        dressCode: "Casual and comfortable clothing",
        specialRules: ["Maintain cleanliness", "Supervise children in play areas"],
        foodRecommendations: ["Local snack stalls nearby"],
        nearbyAttractions: ["Arasavalli Sun Temple", "Srikakulam Town Center"],
        crowdLevel: "Medium",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.8970, 18.2965] },
        featured: true
    },
    {
        name: "Kalingapatnam Beach Garden Area",
        description: "Kalingapatnam Beach Garden Area is a small coastal recreational space near the beach offering open green surroundings and scenic sea views ideal for relaxation and evening visits.",
        category: "Parks & Gardens",
        address: "Kalingapatnam, Srikakulam District, Andhra Pradesh",
        timings: "Open 24 hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771942957/travelxplorer/places/au2c1bhldkxk8ekeuohw.webp",
                publicId: "travelxplorer/places/au2c1bhldkxk8ekeuohw"
            }
        ],
        dressCode: "Comfortable outdoor wear",
        specialRules: ["Avoid littering", "Follow coastal safety rules"],
        foodRecommendations: ["Beachside snacks", "Local seafood stalls"],
        nearbyAttractions: ["Kalingapatnam Beach", "Kalingapatnam Lighthouse"],
        crowdLevel: "Low to Medium",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [84.1165, 18.3385] },
        featured: false
    },

    {
        name: "CMR Shopping Mall - Srikakulam",
        description: "CMR Shopping Mall is one of the most popular shopping destinations in Srikakulam offering a wide range of clothing, fashion collections, and family shopping options. It attracts large crowds during festivals and wedding seasons.",
        category: "Shopping Malls",
        address: "Srikakulam Town, Srikakulam District, Andhra Pradesh",
        timings: "10:00 AM – 9:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771943332/travelxplorer/places/svtx9oeewzprgkr55m5c.avif",
                publicId: "travelxplorer/places/svtx9oeewzprgkr55m5c"
            }
        ],
        dressCode: "Casual or traditional wear",
        specialRules: ["Follow store policies"],
        foodRecommendations: ["Nearby restaurants and cafes"],
        nearbyAttractions: ["Indira Gandhi Municipal Park"],
        crowdLevel: "High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.8996, 18.2954] },
        featured: true
    },
    {
        name: "South India Shopping Mall - Srikakulam",
        description: "South India Shopping Mall is a well-known retail destination famous for sarees, ethnic wear, and family clothing collections, especially during festivals and celebrations.",
        category: "Shopping Malls",
        address: "Main Road, Srikakulam District, Andhra Pradesh",
        timings: "10:00 AM – 10:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771943376/travelxplorer/places/ftcyfmzc4tplywiw8xjl.avif",
                publicId: "travelxplorer/places/ftcyfmzc4tplywiw8xjl"
            }
        ],
        dressCode: "Casual wear",
        specialRules: ["Maintain billing receipts"],
        foodRecommendations: ["Local eateries nearby"],
        nearbyAttractions: ["Srikakulam Town Center"],
        crowdLevel: "High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.8950, 18.2965] },
        featured: true
    },
    {
        name: "SR Shopping Mall - Srikakulam",
        description: "SR Shopping Mall is a popular multi-floor shopping complex known for affordable fashion, family shopping, and daily lifestyle purchases in Srikakulam.",
        category: "Shopping Malls",
        address: "Srikakulam Town, Srikakulam District, Andhra Pradesh",
        timings: "10:00 AM – 9:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771943420/travelxplorer/places/iq0qtpzgtkc86ngkttot.avif",
                publicId: "travelxplorer/places/iq0qtpzgtkc86ngkttot"
            }
        ],
        dressCode: "Casual wear",
        specialRules: ["Follow mall guidelines"],
        foodRecommendations: ["Nearby food stalls"],
        nearbyAttractions: ["Local Market Area"],
        crowdLevel: "Medium to High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.8960, 18.2966] },
        featured: false
    },
    {
        name: "Mogadalapadu Turtle Nesting Experience",
        description: "Mogadalapadu Beach is one of the most important nesting grounds for Olive Ridley sea turtles along the Andhra coast. Visitors can participate in seasonal conservation activities and witness the rare sight of turtles nesting and hatchlings moving to the sea.",
        category: "Unique Local Experiences",
        address: "Mogadalapadu Village, Srikakulam District, Andhra Pradesh 532005",
        timings: "Evening & Early Morning (Best during nesting season)",
        operationalDays: "Best from November to February",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771943684/travelxplorer/places/jptlbunjkjtrvwooizrb.avif",
                publicId: "travelxplorer/places/jptlbunjkjtrvwooizrb"
            }
        ],
        dressCode: "Comfortable outdoor clothing",
        specialRules: [
            "Strictly do not disturb turtle nesting areas",
            "Avoid flash photography at night",
            "Follow forest department guidelines",
            "No plastic usage"
        ],
        foodRecommendations: ["Carry drinking water", "Local village food"],
        nearbyAttractions: ["Mogadalapadu Beach", "Kalingapatnam Beach", "Arasavalli Sun Temple"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [84.1697, 18.2831] },
        featured: true
    },



];

async function seedSrikakulam() {
    try {
        if (!process.env.MONGODB_URI) {
            console.error('MONGODB_URI is missing in .env');
            process.exit(1);
        }

        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB...');

        const district = await District.findOne({ name: 'Srikakulam' });
        if (!district) {
            console.error('Srikakulam District not found! Please run seedDistricts.js first.');
            process.exit(1);
        }

        if (SRIKAKULAM_PLACES.length === 0) {
            console.log('No places to seed for Srikakulam yet.');
        } else {
            for (const placeData of SRIKAKULAM_PLACES) {
                await Place.findOneAndUpdate(
                    { name: placeData.name },
                    { ...placeData, district: district._id },
                    { upsert: true, new: true }
                );
                console.log(`Added/Updated: ${placeData.name}`);
            }
            console.log('Successfully seeded Srikakulam data!');
        }

        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
}

seedSrikakulam();
