import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Place from '../models/Place.js';
import District from '../models/District.js';

dotenv.config();

const EAST_GODAVARI_PLACES = [
    {
        name: "Pushkar Ghat",
        description: "Pushkar Ghat is the main and most prominent ghat on the banks of the Godavari River in Rajamahendravaram. It is well known for its daily evening Aarti (including special multi-lamp aarti rituals), clean surroundings, and panoramic views of the Godavari Rail-cum-Road Bridge. The ghat becomes the central spiritual hub during the Godavari Pushkaralu festival.",
        category: "Unique Local Experiences",
        address: "Godavari Bund Road, Rajamahendravaram, East Godavari District, Andhra Pradesh 533101",
        timings: "Open 24 hours (Evening Aarti around sunset)",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Pushkaralu Period"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771777771/travelxplorer/places/tkbttdsksdsmksd9ffch.jpg",
                publicId: "travelxplorer/places/tkbttdsksdsmksd9ffch"
            }
        ],
        dressCode: "Traditional or modest attire recommended",
        specialRules: ["Maintain cleanliness", "Follow safety near water", "Respect religious rituals"],
        foodRecommendations: ["Street food on Bund Road", "Local Andhra restaurants nearby"],
        nearbyAttractions: ["Godavari River Bund", "Dowleswaram Barrage", "Markandeya Swamy Temple"],
        crowdLevel: "High during evenings and festivals",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [81.7890, 17.0009] },
        featured: true
    },
    {
        name: "Gowthami Ghat",
        description: "Gowthami Ghat is a peaceful riverside ghat located near the ISKCON Temple in Rajamahendravaram. It is known for its serene atmosphere, making it ideal for relaxation, meditation, and evening strolls. Devotees also visit nearby temples, including a Shiva shrine.",
        category: "Unique Local Experiences",
        address: "Near ISKCON Temple, Godavari Bund, Rajamahendravaram, East Godavari District, Andhra Pradesh 533101",
        timings: "Open 24 hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Evenings Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771777827/travelxplorer/places/hh4qrrtj43blvbaywbit.jpg",
                publicId: "travelxplorer/places/hh4qrrtj43blvbaywbit"
            }
        ],
        dressCode: "Casual or traditional attire",
        specialRules: ["Be cautious near river steps", "No littering"],
        foodRecommendations: ["ISKCON prasadam", "Bund Road eateries"],
        nearbyAttractions: ["ISKCON Temple", "Pushkar Ghat", "Godavari Rail Bridge"],
        crowdLevel: "Medium",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [81.7878, 17.0025] },
        featured: false
    },
    {
        name: "Markandeya Ghat (Padmavathi Ghat)",
        description: "Markandeya Ghat, also known as Padmavathi Ghat, is situated near the ancient Sri Uma Markandeya Swamy Temple. It is historically significant and frequently visited by devotees who perform rituals and take holy dips in the Godavari River.",
        category: "Unique Local Experiences",
        address: "Near Markandeya Swamy Temple, Rajamahendravaram, East Godavari District, Andhra Pradesh 533101",
        timings: "Open 24 hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Festival Days"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771777877/travelxplorer/places/jvojbgdf67b9cdoodjv4.jpg",
                publicId: "travelxplorer/places/jvojbgdf67b9cdoodjv4"
            }
        ],
        dressCode: "Traditional attire recommended",
        specialRules: ["Follow temple guidelines", "Be careful during high river flow"],
        foodRecommendations: ["Temple prasadam", "Local vegetarian hotels nearby"],
        nearbyAttractions: ["Sri Uma Markandeya Swamy Temple", "Pushkar Ghat"],
        crowdLevel: "Medium to High",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [81.7885, 17.0016] },
        featured: true
    },
    {
        name: "Saraswati Ghat (VIP Ghat)",
        description: "Saraswati Ghat, commonly referred to as VIP Ghat, is a well-maintained and organized ghat used for official ceremonies and special religious occasions. It provides structured access to the river and clean surroundings.",
        category: "Unique Local Experiences",
        address: "Godavari Bund Road, Rajamahendravaram, East Godavari District, Andhra Pradesh",
        timings: "Open 24 hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771777920/travelxplorer/places/kzpbdybkx9bowpnusq9c.jpg",
                publicId: "travelxplorer/places/kzpbdybkx9bowpnusq9c"
            }
        ],
        dressCode: "Modest attire recommended",
        specialRules: ["Access may be restricted during official events"],
        foodRecommendations: ["Nearby Bund Road eateries"],
        nearbyAttractions: ["Pushkar Ghat", "Godavari Bridge View Point"],
        crowdLevel: "Medium",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [81.7905, 17.0020] },
        featured: false
    },
    {
        name: "Kotilingala Ghat (PMK Ghat)",
        description: "Kotilingala Ghat, also known as PMK Ghat, is one of the historic and heavily visited ghats along the Godavari River in Rajamahendravaram. It is popular for ritual baths, religious gatherings, and local spiritual activities.",
        category: "Unique Local Experiences",
        address: "Kotilingala Area, Rajamahendravaram, East Godavari District, Andhra Pradesh",
        timings: "Open 24 hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Festival Days"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771777962/travelxplorer/places/p6fpqfsjt3sg24el3kmk.jpg",
                publicId: "travelxplorer/places/p6fpqfsjt3sg24el3kmk",
            }
        ],
        dressCode: "Traditional attire preferred",
        specialRules: ["Be cautious during heavy river flow", "Follow ritual guidelines"],
        foodRecommendations: ["Local tiffin centers nearby"],
        nearbyAttractions: ["Pushkar Ghat", "Markandeya Swamy Temple"],
        crowdLevel: "High during auspicious days",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [81.7912, 17.0035] },
        featured: true
    },
    {
        name: "Pattiseema Island",
        description: "Pattiseema is a scenic river island located in the Godavari River within East Godavari District. Accessible by boat, the island is famous for the Sri Veerabhadra Swamy Temple and serene river surroundings. It is a popular spiritual and picnic destination offering scenic river views.",
        category: "Beaches & Coastal",
        address: "Pattiseema Village, Near Polavaram, East Godavari District, Andhra Pradesh",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Free (Boat charges applicable)",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771764296/travelxplorer/places/vksutrxg8zfkfinpm75x.jpg",
                publicId: "travelxplorer/places/vksutrxg8zfkfinpm75x"
            }
        ],
        dressCode: "Traditional attire recommended for temple visit",
        specialRules: ["Boat travel depends on river conditions", "Follow temple guidelines", "Avoid visiting during heavy floods"],
        foodRecommendations: ["Carry drinking water", "Local meals in Polavaram area"],
        nearbyAttractions: ["Polavaram River View Point", "Godavari Hill Ranges"],
        crowdLevel: "Medium",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [81.6005, 17.1065] },
        featured: true
    },
    {
        name: "Polavaram River View Point",
        description: "Polavaram River View Point offers panoramic views of the Godavari River surrounded by scenic hills. The area is known for its natural beauty and proximity to the Polavaram Project. It is a peaceful location ideal for photography and nature lovers.",
        category: "Beaches & Coastal",
        address: "Polavaram, East Godavari District, Andhra Pradesh 534315",
        timings: "Open during daylight hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Post-Monsoon"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771764392/travelxplorer/places/arndnagaumz8okvb85do.avif",
                publicId: "travelxplorer/places/arndnagaumz8okvb85do"
            }
        ],
        dressCode: "Comfortable outdoor wear",
        specialRules: ["Be cautious near project zones", "Avoid restricted construction areas"],
        foodRecommendations: ["Carry food and water (limited facilities nearby)"],
        nearbyAttractions: ["Pattiseema Island", "Polavaram Project Area"],
        crowdLevel: "Low to Medium",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [81.6435, 17.2475] },
        featured: false
    },
    {
        name: "Dowleswaram Barrage (Sir Arthur Cotton Barrage)",
        description: "Dowleswaram Barrage is a historic irrigation structure built across the Godavari River near Rajamahendravaram. Originally constructed by Sir Arthur Cotton, the barrage transformed the Godavari delta into a fertile agricultural region. The area provides scenic river views and is an important engineering landmark.",
        category: "Beaches & Coastal",
        address: "Dowleswaram, Rajamahendravaram, East Godavari District, Andhra Pradesh 533125",
        timings: "6:00 AM – 7:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771764543/travelxplorer/places/nhhleokzmibaeehjwsmq.webp",
                publicId: "travelxplorer/places/nhhleokzmibaeehjwsmq"
            }
        ],
        dressCode: "Casual wear",
        specialRules: ["Do not enter restricted technical areas", "Follow safety signage"],
        foodRecommendations: ["Local eateries in Dowleswaram", "Rajamahendravaram restaurants"],
        nearbyAttractions: ["Godavari River Bund", "Cotton Museum"],
        crowdLevel: "Medium",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.7923, 16.9828] },
        featured: true
    },
    {
        name: "Sri Uma Markandeya Swamy Temple",
        description: "Sri Uma Markandeya Swamy Temple is an old and important Shiva temple on the banks of the Godavari River in Rajamahendravaram. Associated with Sage Markandeya, it draws large numbers of devotees during Maha Shivaratri and Godavari Pushkaralu.",
        category: "Temples & Religious",
        address: "Markandeya Temple Street, Rajamahendravaram, East Godavari District, Andhra Pradesh 533101",
        timings: "5:00 AM – 12:00 PM, 4:00 PM – 8:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Maha Shivaratri"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771766336/travelxplorer/places/mw5dlixl7gazuov8xkot.jpg",
                publicId: "travelxplorer/places/mw5dlixl7gazuov8xkot"
            }
        ],
        dressCode: "Traditional attire recommended",
        specialRules: ["Footwear not allowed inside temple", "Maintain silence inside sanctum"],
        foodRecommendations: ["Temple prasadam", "Vegetarian hotels in Rajamahendravaram"],
        nearbyAttractions: ["Godavari River Bund (Pushkar Ghat)", "Dowleswaram Barrage", "Cotton Museum"],
        crowdLevel: "High during festivals",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.7885, 17.0015] },
        featured: true
    },
    {
        name: "ISKCON Sri Sri Radha Gopinath Temple",
        description: "ISKCON Temple, Rajamahendravaram is a prominent Vaishnavite spiritual centre known for daily aartis, Bhagavad Gita classes and festive Janmashtami celebrations. It provides organized devotional programs and prasadam.",
        category: "Temples & Religious",
        address: "Near Godavari Bund, Rajamahendravaram, East Godavari District, Andhra Pradesh 533101",
        timings: "4:30 AM – 1:00 PM, 4:30 PM – 8:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771766387/travelxplorer/places/ap4k0uokjiauntxu9hm2.webp",
                publicId: "travelxplorer/places/ap4k0uokjiauntxu9hm2"
            }
        ],
        dressCode: "Modest traditional attire",
        specialRules: ["Follow temple discipline", "Photography may be restricted during rituals"],
        foodRecommendations: ["ISKCON prasadam meals"],
        nearbyAttractions: ["Godavari River Bund", "Dowleswaram Barrage", "Rallabandi Subbarao Museum"],
        crowdLevel: "Medium",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.7878, 17.0024] },
        featured: true
    },
    {
        name: "Sri Veerabhadra Swamy Temple (Pattiseema)",
        description: "Sri Veerabhadra Swamy Temple sits on Pattiseema Island in the Godavari River and is dedicated to Lord Veerabhadra. The temple is reached by boat and is both a spiritual and scenic destination within East Godavari district.",
        category: "Temples & Religious",
        address: "Pattiseema Island, Near Polavaram, East Godavari District, Andhra Pradesh",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Free (Boat charges applicable)",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771766450/travelxplorer/places/hz4moaxrpboipwjwvirs.jpg",
                publicId: "travelxplorer/places/hz4moaxrpboipwjwvirs"
            }
        ],
        dressCode: "Traditional attire recommended",
        specialRules: ["Boat service depends on river conditions", "Follow temple guidelines and island rules"],
        foodRecommendations: ["Carry drinking water", "Local food options in Polavaram area"],
        nearbyAttractions: ["Polavaram River View Point", "Godavari Hill Ranges"],
        crowdLevel: "Medium",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [81.6005, 17.1065] },
        featured: true
    },

    {
        name: "Sri Lakshmi Narasimha Swamy Temple (Korukonda)",
        description: "Sri Lakshmi Narasimha Swamy Temple at Korukonda (a small hill near Rajamahendravaram) is an ancient Vaishnava kshetram. The site contains a swayambhu (self-manifested) Narasimha and a prathishta deity; the hill (‘konda’) is locally regarded as a wishing hill (koru = wish, konda = hill). It is a well-known pilgrimage spot for devotees from Rajamahendravaram and surrounding areas.",
        category: "Temples & Religious",
        address: "Korukonda Post, Korukonda Mandal, Rajamahendravaram (East Godavari District), Andhra Pradesh 533289",
        timings: "9:00 AM – 12:00 PM, 4:00 PM – 7:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Festival Season"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771766631/travelxplorer/places/hn38vq1oh9dhsevhv4rg.jpg",
                publicId: "travelxplorer/places/hn38vq1oh9dhsevhv4rg"
            }
        ],
        dressCode: "Traditional attire recommended",
        specialRules: ["Footwear removed before entering sanctum", "Follow temple trustees' guidelines"],
        foodRecommendations: ["Local vegetarian meals in Rajamahendravaram", "Temple prasadam on festival days"],
        nearbyAttractions: ["Rajamahendravaram Airport (Madhurapudi)", "Korukonda Road scenic stretches", "Kadiyam Nurseries"],
        crowdLevel: "Medium (in festival periods)",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.826538, 17.170408] },
        featured: true
    },
    {
        name: "Sri Subrahmanya Swamy Temple (Shanmuka Peetam, Konthamuru / Official Colony)",
        description: "Sri Subrahmanya Swamy Temple (often called Shanmuka Peetam) in the Konthamuru / Official Colony area of Rajamahendravaram is a popular Murugan/Subrahmanya shrine serving local devotees. The temple organizes regular abhishekams, annadhanam (food distribution) and special observances on Tuesdays and Subrahmanya-related festivals.",
        category: "Temples & Religious",
        address: "Official Colony, Konthamuru, Rajamahendravaram, East Godavari District, Andhra Pradesh 533102",
        timings: "6:00 AM – 12:00 PM, 4:00 PM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Skanda Shasti"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771766684/travelxplorer/places/caxshvxw8cf7vet1s7x2.jpg",
                publicId: "travelxplorer/places/caxshvxw8cf7vet1s7x2"
            }
        ],
        dressCode: "Traditional attire preferred",
        specialRules: ["Follow temple timetable for abhishekam", "Respect queueing for special sevas"],
        foodRecommendations: ["Annadhanam prasadam when available", "Local eateries in Konthamuru and Lalacheruvu"],
        nearbyAttractions: ["Official Colony neighbourhood", "Godavari River Bund (short drive)", "Rajahmundry Railway Station"],
        crowdLevel: "Medium (Tuesdays & festival days)",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.7978, 17.0447] },
        featured: true
    },
    {
        name: "Mahakaleshwar Temple",
        description: "Known as the first Mahakaleshwar temple in South India, this shrine on the banks of the Godavari at Gautama Ghat has earned Rajamahendravaram the name 'South Indian Ujjain'. It is famous for performing the sacred Bhasma Aarti (ritual with holy ash), a tradition unique to this temple in the region. The temple's architecture and riverside location offer a powerful spiritual experience.",
        category: "Temples & Religious",
        address: "Gautama Ghat, Rajamahendravaram, East Godavari District, Andhra Pradesh 533101",
        timings: "4:00 AM – 8:30 PM (Bhasma Aarti at 4:30 AM)",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Maha Shivaratri"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771766737/travelxplorer/places/gn3owixf7nrvkaaccugw.jpg",
                publicId: "travelxplorer/places/gn3owixf7nrvkaaccugw"
            }
        ],
        dressCode: "Traditional attire recommended",
        specialRules: ["Footwear not allowed", "Women are permitted for Bhasma Aarti", "Follow morning ritual schedules"],
        foodRecommendations: ["Local vegetarian meals", "Andhra snacks at Gautama Ghat"],
        nearbyAttractions: ["Godavari River Bund", "ISKCON Rajamahendravaram", "Rallabandi Subbarao Museum"],
        crowdLevel: "High during morning Aarti and festivals",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.7766, 17.0061] },
        featured: true
    },
    {
        name: "Kambalacheruvu Park",
        description: "Kambalacheruvu Park is one of the largest and most popular public parks in Rajamahendravaram. Located near the Kambala Tank area, the park is known for its walking tracks, landscaped gardens, open green spaces, and children’s play zones. It is a favorite destination for morning walkers, joggers, and families seeking a peaceful recreational environment.",
        category: "Parks & Gardens",
        address: "Kambala Cheruvu Area, Rajamahendravaram, East Godavari District, Andhra Pradesh 533105",
        timings: "5:00 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771768864/travelxplorer/places/dhqzih5xbjxe4s9wwdde.jpg",
                publicId: "travelxplorer/places/dhqzih5xbjxe4s9wwdde"
            }
        ],
        dressCode: "Casual comfortable wear",
        specialRules: ["Maintain cleanliness", "Pets may be restricted in certain areas"],
        foodRecommendations: ["Street food near park entrance", "Local tiffin centers nearby"],
        nearbyAttractions: ["RMC Glow Garden", "Rajamahendravaram Railway Station", "Godavari River Bund"],
        crowdLevel: "Medium to High (Evenings)",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.7924, 17.0123] },
        featured: true
    },
    {
        name: "Gauthami Park",
        description: "Gauthami Park is a scenic riverfront park situated along the Godavari Bund Road in Rajamahendravaram. The park offers beautiful views of the Godavari River, landscaped lawns, seating areas, and a peaceful atmosphere ideal for evening walks and family outings.",
        category: "Parks & Gardens",
        address: "Godavari Bund Road, Rajamahendravaram, East Godavari District, Andhra Pradesh 533101",
        timings: "5:00 AM – 8:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Post-Monsoon"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771768928/travelxplorer/places/gutf15lupngsi7tcnczm.jpg",
                publicId: "travelxplorer/places/gutf15lupngsi7tcnczm"
            }
        ],
        dressCode: "Casual wear",
        specialRules: ["Avoid littering", "Follow safety near river bund"],
        foodRecommendations: ["Evening snacks along Bund Road", "Local Andhra restaurants"],
        nearbyAttractions: ["Godavari River Bund (Pushkar Ghat)", "Sri Uma Markandeya Swamy Temple", "Dowleswaram Barrage"],
        crowdLevel: "High during evenings",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.7899, 17.0009] },
        featured: true
    },

    {
        name: "Sir Arthur Cotton Park",
        description: "Sir Arthur Cotton Park is a scenic riverside park located near the historic Dowleswaram Barrage across the Godavari River in Rajamahendravaram. Named after Sir Arthur Cotton, the British engineer who designed the Godavari irrigation system, the park offers landscaped gardens, shaded walkways, seating areas, and beautiful river views. It is a popular family outing and evening relaxation spot.",
        category: "Parks & Gardens",
        address: "Dowleswaram, Near Godavari Barrage, Rajamahendravaram, East Godavari District, Andhra Pradesh 533125",
        timings: "6:00 AM – 7:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Post-Monsoon"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771768978/travelxplorer/places/fmvv05d1op4weksnnlcj.avif",
                publicId: "travelxplorer/places/fmvv05d1op4weksnnlcj"
            }
        ],
        dressCode: "Casual comfortable wear",
        specialRules: ["Maintain cleanliness", "Avoid restricted barrage areas"],
        foodRecommendations: ["Local snacks near barrage road", "Restaurants in Rajamahendravaram city"],
        nearbyAttractions: ["Dowleswaram Barrage", "Godavari River Bund", "Cotton Museum"],
        crowdLevel: "Medium to High (Evenings)",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.7923, 16.9828] },
        featured: true
    },
    {
        name: "Children’s Park (Godavari Bund)",
        description: "Children’s Park near the Godavari Bund in Rajamahendravaram is a well-maintained recreational park designed especially for kids and families. It features swings, slides, play equipment, open lawns, and seating areas with pleasant river breeze. The park is popular for evening visits and family gatherings.",
        category: "Parks & Gardens",
        address: "Godavari Bund Road, Rajamahendravaram, East Godavari District, Andhra Pradesh 533101",
        timings: "5:00 AM – 8:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771769030/travelxplorer/places/sjyjsvkjfmq4wylku4a5.webp",
                publicId: "travelxplorer/places/sjyjsvkjfmq4wylku4a5"
            }
        ],
        dressCode: "Casual wear",
        specialRules: ["Children should be supervised", "No littering"],
        foodRecommendations: ["Street snacks along Bund Road", "Nearby Andhra restaurants"],
        nearbyAttractions: ["Gauthami Park", "Sri Uma Markandeya Swamy Temple", "Pushkar Ghat"],
        crowdLevel: "High during evenings and weekends",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.7895, 17.0010] },
        featured: true
    },

    {
        name: "CMR Shopping Mall",
        description: "CMR Shopping Mall is one of the largest and most popular shopping destinations in Rajamahendravaram. It offers a wide range of branded fashion outlets, accessories, and lifestyle products. The mall is especially crowded during weekends and festive seasons.",
        category: "Shopping Malls",
        address: "29-15-21, Main Road, Opposite BSNL Office, Mangalavaripeta, Rajamahendravaram, East Godavari District, Andhra Pradesh 533101",
        timings: "10:00 AM – 9:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round", "Festival Season"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771776296/travelxplorer/places/lxnht1rvhxuht5wxrkcj.jpg",
                publicId: "travelxplorer/places/lxnht1rvhxuht5wxrkcj"
            }
        ],
        dressCode: "Casual wear",
        specialRules: ["Follow mall security guidelines", "Parking charges may apply"],
        foodRecommendations: ["Local eateries nearby", "Snacks & cafes inside mall"],
        nearbyAttractions: ["Godavari River Bund", "Rajamahendravaram Railway Station", "Sri Uma Markandeya Swamy Temple"],
        crowdLevel: "High (Weekends & Evenings)",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.7707532, 17.006238] },
        featured: true
    },
    {
        name: "SouthIndia Shopping Mall – Rajahmundry",
        description: "SouthIndia Shopping Mall is a well-known lifestyle and apparel shopping destination in Rajamahendravaram. It is popular for family shopping, ethnic wear, and fashion collections for all age groups.",
        category: "Shopping Malls",
        address: "Seshayya Metta, Rajamahendravaram, East Godavari District, Andhra Pradesh 533104",
        timings: "10:00 AM – 10:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round", "Festival Season"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771776396/travelxplorer/places/d5uqaaqkol3inomaqswu.avif",
                publicId: "travelxplorer/places/d5uqaaqkol3inomaqswu"
            }
        ],
        dressCode: "Casual wear",
        specialRules: ["Follow store billing counters and security checks"],
        foodRecommendations: ["Nearby bakeries and restaurants", "Street food around Seshayya Metta"],
        nearbyAttractions: ["GV Mall Rajahmundry", "Godavari Bund Road", "Rajamahendravaram City Center"],
        crowdLevel: "Medium to High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.7732044, 17.0101325] },
        featured: true
    },
    {
        name: "GV Mall Rajahmundry",
        description: "GV Mall is a mid-sized shopping mall located in Tadithota area of Rajamahendravaram. It features fashion outlets, accessories stores, and eateries, making it a preferred destination for casual and everyday shopping.",
        category: "Shopping Malls",
        address: "Tadithota, Rajamahendravaram, East Godavari District, Andhra Pradesh 533103",
        timings: "9:30 AM – 9:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771776451/travelxplorer/places/fteybsvgqgaocn9dacd4.webp",
                publicId: "travelxplorer/places/fteybsvgqgaocn9dacd4"
            }
        ],
        dressCode: "Casual wear",
        specialRules: ["Limited parking during peak hours"],
        foodRecommendations: ["Small eateries in Tadithota", "Nearby fast-food outlets"],
        nearbyAttractions: ["SouthIndia Shopping Mall – Rajahmundry", "Rajamahendravaram Railway Station"],
        crowdLevel: "Medium",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.7817086, 16.999999] },
        featured: true
    },
    {
        name: "Prasaditya Mall & Multiplex",
        description: "Prasaditya Mall & Multiplex is a multi-purpose shopping and entertainment complex in Rajamahendravaram. It combines retail shopping with a cinema experience, making it a popular weekend destination for families.",
        category: "Shopping Malls",
        address: "F1, Anala Venkatappa Rao Road, Cyclone Colony, Rajamahendravaram, East Godavari District, Andhra Pradesh 533106",
        timings: "10:00 AM – 10:00 PM",
        operationalDays: "All Days",
        entryFee: "Free (Movie tickets extra)",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round", "Weekend Outings"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771776501/travelxplorer/places/shiavcilcei5dnpb7bwc.jpg",
                publicId: "travelxplorer/places/shiavcilcei5dnpb7bwc"
            }
        ],
        dressCode: "Casual wear",
        specialRules: ["Follow cinema hall guidelines", "Parking charges applicable"],
        foodRecommendations: ["Food court snacks", "Nearby restaurants in Cyclone Colony"],
        nearbyAttractions: ["RMC Glow Garden", "Kambalacheruvu Park"],
        crowdLevel: "Medium to High (Weekends)",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [81.8012689, 17.0143382] },
        featured: true
    },
    {
        name: "Godavari River (Rajamahendravaram Stretch)",
        description: "The Godavari River at Rajamahendravaram is the most iconic natural landmark in present East Godavari District. Flowing majestically through the city, the river offers scenic views, boating experiences, spiritual Ghats, and cultural significance. The riverfront is especially famous during Godavari Pushkaralu and for evening walks along the Bund Road. It is one of the widest river stretches in South India at this point.",
        category: "Wildlife & Nature",
        address: "Godavari Bund Road, Rajamahendravaram, East Godavari District, Andhra Pradesh 533101",
        timings: "Open 24 hours",
        operationalDays: "All Days",
        entryFee: "Free (Boating charges separate)",
        entryFeeAmount: 0,
        bestSeason: ["Winter", "Post-Monsoon"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771776985/travelxplorer/places/h8d4ipoir26dskcbt31z.jpg",
                publicId: "travelxplorer/places/h8d4ipoir26dskcbt31z"
            }
        ],
        dressCode: "Casual comfortable wear",
        specialRules: ["Be cautious near deep water areas", "Follow boating safety guidelines", "No littering in river"],
        foodRecommendations: ["Street food along Bund Road", "Andhra restaurants near Kotagummam"],
        nearbyAttractions: ["Pushkar Ghat", "Sir Arthur Cotton Barrage (Dowleswaram)", "ISKCON Temple Rajamahendravaram", "Markandeya Swamy Temple"],
        crowdLevel: "High during evenings and festivals",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [81.7880, 17.0006] },
        featured: true
    },
    {
        name: "YSTD Centre",
        description: "YSTD Centre is a well-known commercial and retail complex located on Mini Bypass Road in Kovvur. The center offers diverse shopping outlets and essential services catering to the daily needs of residents. It acts as a convenient local retail hub for Kovvur and surrounding areas.",
        category: "Shopping Malls",
        address: "Mini Bypass Road, Kovvur, East Godavari District, Andhra Pradesh 534350",
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


async function seedEastGodavari() {
    try {
        if (!process.env.MONGODB_URI) {
            console.error('MONGODB_URI is missing in .env');
            process.exit(1);
        }

        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB...');

        const district = await District.findOne({ name: 'East Godavari' });
        if (!district) {
            console.error('East Godavari District not found! Please run seedDistricts.js first.');
            process.exit(1);
        }

        for (const placeData of EAST_GODAVARI_PLACES) {
            await Place.findOneAndUpdate(
                { name: placeData.name },
                { ...placeData, district: district._id },
                { upsert: true, new: true }
            );
            console.log(`Added/Updated: ${placeData.name}`);
        }

        console.log('Successfully seeded East Godavari data!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
}

seedEastGodavari();
