import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Place from '../models/Place.js';
import District from '../models/District.js';

dotenv.config();

const VISAKHAPATNAM_PLACES = [
    {
        name: "Ramakrishna Beach (RK Beach)",
        description: "Ramakrishna Beach, popularly known as RK Beach, is the most famous beach in Visakhapatnam. It is known for its long shoreline, spectacular sunrise views, and a vibrant evening atmosphere. It is a hub for both locals and tourists, featuring the Submarine and Aircraft museums nearby.",
        category: "Beaches & Coastal",
        address: "Beach Road, Visakhapatnam, Andhra Pradesh 530017",
        timings: "Open 24 Hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771863063/travelxplorer/places/vzbiowslynzdk8tfbim6.jpg",
                publicId: "travelxplorer/places/vzbiowslynzdk8tfbim6"
            }
        ],
        dressCode: "Casual beach wear",
        specialRules: ["Avoid deep water swimming", "Follow lifeguard instructions", "No littering"],
        foodRecommendations: ["Beach street food stalls", "Nearby seafood restaurants", "Muri Mixture (local snack)"],
        nearbyAttractions: ["INS Kursura Submarine Museum", "TU 142 Aircraft Museum", "Tenneti Park", "Lawson’s Bay Beach"],
        crowdLevel: "Very High during evenings and weekends",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [83.3237, 17.7143] },
        featured: true
    },
    {
        name: "Rushikonda Beach",
        description: "Rushikonda Beach is a pristine, Blue Flag-certified beach known for its golden sand and clear waters. It is the best destination in Vizag for water sports like jet skiing, surfing, and speed boating.",
        category: "Beaches & Coastal",
        address: "Rushikonda, Visakhapatnam, Andhra Pradesh 530045",
        timings: "6:00 AM – 7:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771863105/travelxplorer/places/ybb9xilohgodbel4vsmb.jpg",
                publicId: "travelxplorer/places/ybb9xilohgodbel4vsmb"
            }
        ],
        dressCode: "Beach wear recommended",
        specialRules: ["Swimming only in designated areas", "Follow lifeguard instructions"],
        foodRecommendations: ["AP Tourism Haritha Resort Restaurant", "Beachside food stalls"],
        nearbyAttractions: ["Kailasagiri", "Sagar Nagar Beach", "Thotlakonda Buddhist Site"],
        crowdLevel: "High during holidays and weekends",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [83.3857, 17.7818] },
        featured: true
    },
    {
        name: "Yarada Beach",
        description: "Yarada Beach is a serene and secluded beach surrounded by lush green hills on three sides. Its golden sands and crystal-clear water make it one of the most beautiful and peaceful spots in Visakhapatnam.",
        category: "Beaches & Coastal",
        address: "Yarada, Visakhapatnam, Andhra Pradesh 530005",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771863275/travelxplorer/places/vk3hrvtxfzrwgpfqbgkc.jpg",
                publicId: "travelxplorer/places/vk3hrvtxfzrwgpfqbgkc"
            }
        ],
        dressCode: "Casual beach wear",
        specialRules: ["Avoid isolated swimming areas", "Steep waves - be cautious", "Leave before dark"],
        foodRecommendations: ["Limited local stalls", "Carry your own snacks/water"],
        nearbyAttractions: ["Dolphin's Nose & Lighthouse"],
        crowdLevel: "Moderate",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [83.2734, 17.6594] },
        featured: false
    },
    {
        name: "Bheemunipatnam (Bheemili) Beach",
        description: "Bheemili Beach is located at the confluence of the Gosthani River and the Bay of Bengal. This historic coastal town has a peaceful beach known for its lighthouse, Dutch cemetery, and calm atmosphere.",
        category: "Beaches & Coastal",
        address: "Bheemunipatnam, Visakhapatnam, Andhra Pradesh 531163",
        timings: "Open 24 Hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771863328/travelxplorer/places/gfvja41bc9lxwhpegf9o.jpg",
                publicId: "travelxplorer/places/gfvja41bc9lxwhpegf9o"
            }
        ],
        dressCode: "Casual beach wear",
        specialRules: ["Swimming with caution due to river confluence"],
        foodRecommendations: ["Local seafood restaurants in Bheemili"],
        nearbyAttractions: ["Mangamaripeta Beach", "Thotlakonda Buddhist Site"],
        crowdLevel: "Moderate",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [83.4540, 17.8900] },
        featured: false
    },
    {
        name: "Mangamaripeta Beach",
        description: "Mangamaripeta Beach is a scenic spot known for its rocky shores and peaceful atmosphere. It is located near historic Buddhist sites and is popular for its natural beauty.",
        category: "Beaches & Coastal",
        address: "Mangamaripeta, Visakhapatnam, Andhra Pradesh 530045",
        timings: "6:00 AM – 6:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771863425/travelxplorer/places/xfgi3gm6zezumwoa0d3e.jpg",
                publicId: "travelxplorer/places/xfgi3gm6zezumwoa0d3e"
            }
        ],
        dressCode: "Casual beach wear",
        specialRules: ["Be cautious on slippery rocky surfaces"],
        foodRecommendations: ["Limited local vendors"],
        nearbyAttractions: ["Bheemunipatnam (Bheemili) Beach", "Thotlakonda Buddhist Site"],
        crowdLevel: "Low to Moderate",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [83.4015, 17.8050] },
        featured: false
    },
    {
        name: "Lawson’s Bay Beach",
        description: "Lawson’s Bay Beach is a calm and picturesque extension of RK Beach. It is tucked away from the main crowd and is perfect for swimming, quiet walks, and enjoying the serene ocean breeze.",
        category: "Beaches & Coastal",
        address: "Lawson’s Bay Colony, Visakhapatnam, Andhra Pradesh 530017",
        timings: "Open 24 Hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771863483/travelxplorer/places/qvdnjtjhkbvymszqitet.jpg",
                publicId: "travelxplorer/places/qvdnjtjhkbvymszqitet"
            }
        ],
        dressCode: "Casual beach wear",
        specialRules: ["Avoid swimming during rough tides", "Quiet residential zone - avoid noise"],
        foodRecommendations: ["Colony cafes", "Nearby hotels"],
        nearbyAttractions: ["Ramakrishna Beach (RK Beach)", "Tenneti Park"],
        crowdLevel: "Low",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [83.3435, 17.7455] },
        featured: false
    },
    {
        name: "Sagar Nagar Beach",
        description: "Sagar Nagar Beach is a quiet shoreline located along the scenic coastal road between Vizag and Bheemili. It is a favorite spot for paragliding (seasonally) and peaceful morning strolls.",
        category: "Beaches & Coastal",
        address: "Sagar Nagar, Visakhapatnam, Andhra Pradesh 530045",
        timings: "Open 24 Hours",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771863846/travelxplorer/places/c7hpg9coeoh21opdpawk.jpg",
                publicId: "travelxplorer/places/c7hpg9coeoh21opdpawk"
            }
        ],
        dressCode: "Casual beach wear",
        specialRules: ["Follow safety guidelines for paragliding", "No littering"],
        foodRecommendations: ["Local roadside eateries"],
        nearbyAttractions: ["Tenneti Park", "Rushikonda Beach"],
        crowdLevel: "Moderate during evenings",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [83.3565, 17.7600] },
        featured: false
    },
    {
        name: "Kailasagiri",
        description: "Kailasagiri is a scenic hilltop park offering panoramic views of the entire Visakhapatnam city and the Bay of Bengal. It features giant statues of Lord Shiva and Goddess Parvati, manicured gardens, a ropeway, and a toy train ride.",
        category: "Parks & Gardens",
        address: "Hill Top Road, Kailasagiri, Visakhapatnam, Andhra Pradesh 530043",
        timings: "6:00 AM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Entry fee for vehicles; Ropeway and Train charges extra",
        entryFeeAmount: 5,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771866996/travelxplorer/places/ylhwhowqrnnisfzgrpjh.jpg",
                publicId: "travelxplorer/places/ylhwhowqrnnisfzgrpjh"
            }
        ],
        dressCode: "Casual comfortable clothing",
        specialRules: [
            "No plastic zone",
            "Do not damage gardens",
            "Follow ropeway safety guidelines"
        ],
        foodRecommendations: [
            "Food court at the hilltop",
            "Ice cream parlors nearby"
        ],
        nearbyAttractions: [
            "Tenneti Park",
            "Ramakrishna Beach (RK Beach)",
            "Rushikonda Beach"
        ],
        crowdLevel: "High (very popular for families)",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [83.3422, 17.7490] },
        featured: true
    },
    {
        name: "INS Kursura Submarine Museum",
        description: "The INS Kursura is a decommissioned Kalvari-class diesel-electric submarine of the Indian Navy, now serving as a first-of-its-kind museum in Asia located on RK Beach. It offers a rare glimpse into the life and technology inside a real submarine.",
        category: "Historical & Archaeological",
        address: "RK Beach Road, Pandurangapuram, Visakhapatnam, Andhra Pradesh 530017",
        timings: "2:00 PM – 8:30 PM (Tuesday to Saturday); 10:00 AM – 12:30 PM & 2:00 PM – 8:30 PM (Sunday)",
        operationalDays: "Tuesday – Sunday (Closed on Mondays)",
        entryFee: "₹70 for Adults, ₹40 for Children",
        entryFeeAmount: 70,
        bestSeason: ["Winter", "Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771866501/travelxplorer/places/cuzzn4hmntoz6iemid6l.jpg",
                publicId: "travelxplorer/places/cuzzn4hmntoz6iemid6l"
            }
        ],
        dressCode: "Casual wear",
        specialRules: [
            "Photography charges extra",
            "Avoid touching equipment inside",
            "Listen to the guides' instructions"
        ],
        foodRecommendations: [
            "Restaurants along the beach road",
            "Nearby cafes"
        ],
        nearbyAttractions: [
            "Ramakrishna Beach (RK Beach)",
            "TU 142 Aircraft Museum",
            "Visakhapatnam Port"
        ],
        crowdLevel: "High during weekends",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.3236, 17.7142] },
        featured: true
    },
    {
        name: "TU 142 Aircraft Museum",
        description: "Located opposite the Submarine Museum, this museum features a decommissioned TU-142M aircraft that served the Indian Navy as a long-range maritime reconnaissance and anti-submarine warfare aircraft. It allows visitors to explore the aircraft's internal components and aeronautical equipment.",
        category: "Historical & Archaeological",
        address: "Beach Road, Opposite Kursura Submarine Museum, Visakhapatnam, Andhra Pradesh 530017",
        timings: "2:00 PM – 8:30 PM (Tuesday to Saturday); 10:00 AM – 12:30 PM & 2:00 PM – 8:30 PM (Sunday)",
        operationalDays: "Tuesday – Sunday (Closed on Mondays)",
        entryFee: "₹70 for Adults, ₹40 for Children",
        entryFeeAmount: 70,
        bestSeason: ["Winter", "Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771866539/travelxplorer/places/fnmb8wtdm54ujy90e2xh.jpg",
                publicId: "travelxplorer/places/fnmb8wtdm54ujy90e2xh"
            }
        ],
        dressCode: "Casual wear",
        specialRules: [
            "No food allowed inside",
            "Audio guides available",
            "Photography allowed with charges"
        ],
        foodRecommendations: [
            "Cafes on the beach road"
        ],
        nearbyAttractions: [
            "INS Kursura Submarine Museum",
            "Ramakrishna Beach (RK Beach)",
            "Simhachalam Temple"
        ],
        crowdLevel: "Medium to High",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.3298, 17.7180] },
        featured: true
    },
    {
        name: "Simhachalam Temple",
        description: "Simhachalam Temple is one of the most famous temples in Andhra Pradesh dedicated to Lord Varaha Narasimha. Located on Simhachalam Hill, it is known for its Kalinga-style architecture and grand annual Chandanotsavam festival.",
        category: "Temples & Religious",
        address: "Simhachalam Hill, Visakhapatnam, Andhra Pradesh 530028",
        timings: "7:00 AM – 4:00 PM & 6:00 PM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free (Special Darshan tickets available)",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771865361/travelxplorer/places/rudkr1iz7ygjjrg9ckdu.jpg",
                publicId: "travelxplorer/places/rudkr1iz7ygjjrg9ckdu"
            }
        ],
        dressCode: "Traditional attire preferred",
        specialRules: ["Follow temple queue system", "Maintain silence inside premises", "No photography inside sanctum"],
        foodRecommendations: ["Temple prasadam", "Nearby vegetarian restaurants"],
        nearbyAttractions: ["Kailasagiri", "Tenneti Park", "ISKCON Temple Visakhapatnam"],
        crowdLevel: "Very High during festivals",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.2420, 17.7669] },
        featured: true
    },



    {
        name: "Kali Temple (RK Beach)",
        description: "Kali Temple near RK Beach is a colorful and vibrant temple dedicated to Goddess Kali. Built in the Kalinga style of architecture, it is a prominent landmark on the beach road attracting both tourists and devotees.",
        category: "Temples & Religious",
        address: "Near RK Beach, Visakhapatnam, Andhra Pradesh 530017",
        timings: "6:00 AM – 12:00 PM & 4:00 PM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771865444/travelxplorer/places/decvlpqp1ojgvnkkjsif.jpg",
                publicId: "travelxplorer/places/decvlpqp1ojgvnkkjsif"
            }
        ],
        dressCode: "Traditional attire recommended",
        specialRules: ["Maintain temple decorum", "No photography inside sanctum"],
        foodRecommendations: ["Beachside food stalls", "Nearby restaurants"],
        nearbyAttractions: ["Ramakrishna Beach (RK Beach)", "INS Kursura Submarine Museum", "TU 142 Aircraft Museum"],
        crowdLevel: "High during evenings and weekends",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.3188, 17.7148] },
        featured: false
    },

    {
        name: "ISKCON Temple Visakhapatnam",
        description: "ISKCON Temple in Visakhapatnam is a peaceful spiritual center dedicated to Lord Krishna. The temple is known for its serene environment, beautiful deities, and devotional programs.",
        category: "Temples & Religious",
        address: "Sagar Nagar, Visakhapatnam, Andhra Pradesh 530045",
        timings: "4:30 AM – 8:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771865508/travelxplorer/places/myckxybjdtvipxroq3v2.jpg",
                publicId: "travelxplorer/places/myckxybjdtvipxroq3v2"
            }
        ],
        dressCode: "Modest attire recommended",
        specialRules: ["Photography restrictions inside temple hall", "Maintain silence"],
        foodRecommendations: ["Govinda’s Restaurant (inside premises)"],
        nearbyAttractions: ["Rushikonda Beach", "Sagar Nagar Beach", "Simhachalam Temple"],
        crowdLevel: "Moderate to High during festivals",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.3617, 17.7645] },
        featured: false
    },
    {
        name: "Sri Sampath Vinayaka Temple",
        description: "Sri Sampath Vinayaka Temple is a well-known temple dedicated to Lord Ganesha and is one of the most visited temples in Visakhapatnam city. It is considered very auspicious for new ventures and vehicles.",
        category: "Temples & Religious",
        address: "Asilmetta, Visakhapatnam, Andhra Pradesh 530003",
        timings: "6:00 AM – 12:00 PM & 4:00 PM – 8:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Monsoon", "Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771865574/travelxplorer/places/h3s3nl3is7y0h7p3bpv1.jpg",
                publicId: "travelxplorer/places/h3s3nl3is7y0h7p3bpv1"
            }
        ],
        dressCode: "Traditional attire preferred",
        specialRules: ["Remove footwear before entry", "Follow queue during peak hours"],
        foodRecommendations: ["Local sweet shops nearby", "Restaurants in Asilmetta"],
        nearbyAttractions: ["Ramakrishna Beach (RK Beach)", "INS Kursura Submarine Museum"],
        crowdLevel: "High during Vinayaka Chavithi",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.3169, 17.7225] },
        featured: true
    },
    {
        name: "Kanaka Mahalakshmi Temple",
        description: "Kanaka Mahalakshmi Temple is a historic temple dedicated to Goddess Mahalakshmi, the presiding deity of Visakhapatnam. The temple doesn't have a roof over the idol as per tradition, and it holds significant cultural importance.",
        category: "Temples & Religious",
        address: "Burujupeta, Visakhapatnam, Andhra Pradesh 530001",
        timings: "5:30 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771865708/travelxplorer/places/smkb4vyj6eem8echbqly.jpg",
                publicId: "travelxplorer/places/smkb4vyj6eem8echbqly"
            }
        ],
        dressCode: "Traditional attire preferred",
        specialRules: ["Follow temple customs", "Footwear prohibited inside premises"],
        foodRecommendations: ["Nearby local eateries", "Traditional snacks"],
        nearbyAttractions: ["Ramakrishna Beach (RK Beach)", "Visakhapatnam Port"],
        crowdLevel: "Very High during Margasira festival",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.3030, 17.6997] },
        featured: false
    },

    {
        name: "VUDA Shiva Temple",
        description: "VUDA Shiva Temple is a serene temple dedicated to Lord Shiva, located along the beach road. Known for its peaceful atmosphere and proximity to the sea, it offers a tranquil space for meditation and prayer.",
        category: "Temples & Religious",
        address: "Beach Road, Visakhapatnam, Andhra Pradesh 530017",
        timings: "6:00 AM – 12:00 PM & 4:00 PM – 8:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Maha Shivaratri", "Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771865781/travelxplorer/places/yizcebasi4vu9vcrbs8n.jpg",
                publicId: "travelxplorer/places/yizcebasi4vu9vcrbs8n"
            }
        ],
        dressCode: "Traditional attire preferred",
        specialRules: ["Remove footwear before entry", "Maintain silence"],
        foodRecommendations: ["Nearby beachside eateries", "Cafes on Beach Road"],
        nearbyAttractions: ["Ramakrishna Beach (RK Beach)", "Tenneti Park", "Kailasagiri"],
        crowdLevel: "Moderate (Busy on Mondays)",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.3295, 17.7355] },
        featured: false
    },
    {
        name: "Dolphin's Nose & Lighthouse",
        description: "Dolphin's Nose is a massive, rocky headland 358 meters above sea level that resembles a dolphin. It features a powerful lighthouse that can be seen from far out at sea and offers breathtaking views of the city, the harbor, and the coastline.",
        category: "Unique Local Experiences",
        address: "Dolphin Hill, Vizag Port Area, Visakhapatnam, Andhra Pradesh 530005",
        timings: "Hill access: Daytime; Lighthouse: 3:00 PM – 5:00 PM",
        operationalDays: "All Days",
        entryFee: "Entry fee for Lighthouse (nominal)",
        entryFeeAmount: 10,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771929056/travelxplorer/places/xm6hgtqnxiiu3k3bgwn6.jpg",
                publicId: "travelxplorer/places/xm6hgtqnxiiu3k3bgwn6"
            }
        ],
        dressCode: "Casual comfortable clothing",
        specialRules: [
            "Restricted area - carry ID",
            "Photography restrictions in certain zones",
            "Climb limited stairs for the lighthouse"
        ],
        foodRecommendations: [
            "Limited food stalls nearby",
            "Carry own water"
        ],
        nearbyAttractions: [
            "Yarada Beach",
            "INS Kursura Submarine Museum",
            "Visakhapatnam Port"
        ],
        crowdLevel: "Low to Medium",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [83.2927, 17.6765] },
        featured: false
    },
    {
        name: "Tenneti Park",
        description: "Tenneti Park is a beautiful coastal park located on the cliffs overlooking the Bay of Bengal. It is famous for its stunning views, landscaped gardens, and the 'Sea Victory' ship that was washed ashore during a storm nearby.",
        category: "Parks & Gardens",
        address: "RK Beach Rd, Jodugulla Palem, Visakhapatnam, Andhra Pradesh 530017",
        timings: "6:00 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771867279/travelxplorer/places/si6s62fjuoojlqth9zwx.jpg",
                publicId: "travelxplorer/places/si6s62fjuoojlqth9zwx"
            }
        ],
        dressCode: "Casual attire",
        specialRules: [
            "Keep the park clean",
            "Stay away from cliff edges",
            "Good for early morning photography"
        ],
        foodRecommendations: [
            "Cafes near the park entrance",
            "Street food snacks"
        ],
        nearbyAttractions: [
            "Kailasagiri",
            "Ramakrishna Beach (RK Beach)",
            "Rushikonda Beach",
            "Sagar Nagar Beach",
            "Visakhapatnam Zoo (IGZP)"
        ],
        crowdLevel: "Medium (Busy during sunset)",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [83.3499, 17.7479] },
        featured: false
    },
    {
        name: "Visakhapatnam Zoo (IGZP)",
        description: "Indira Gandhi Zoological Park is one of the largest zoos in India, located amidst the Eastern Ghats. It houses a wide variety of animals, birds, and reptiles in natural enclosures and is a major center for conservation and education.",
        category: "Wildlife & Nature",
        address: "NH 16, Near Dairy Farm, Visakhapatnam, Andhra Pradesh 530040",
        timings: "9:00 AM – 5:00 PM (Closed on Mondays)",
        operationalDays: "Tuesday – Sunday",
        entryFee: "₹70 for Adults, ₹30 for Children",
        entryFeeAmount: 70,
        bestSeason: ["Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771868945/travelxplorer/places/xiyc9hy825kaqulpklmg.jpg",
                publicId: "travelxplorer/places/xiyc9hy825kaqulpklmg"
            }
        ],
        dressCode: "Casual comfortable clothing, walking shoes recommended",
        specialRules: ["Plastic-free zone", "Do not feed or disturb animals", "Battery-operated vehicles available"],
        foodRecommendations: ["Canteen inside the zoo", "Food stalls near entrance"],
        nearbyAttractions: ["Kambalakonda Wildlife Sanctuary", "Tenneti Park", "Kailasagiri"],
        crowdLevel: "High during weekends and holidays",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [83.3430, 17.7675] },
        featured: true
    },
    {
        name: "Kambalakonda Wildlife Sanctuary",
        description: "Kambalakonda is a vast forest reserve and wildlife sanctuary providing a natural habitat for several species. It offers trekking trails, eco-tourism activities, and a beautiful seasonal lake, making it a favorite for nature lovers and adventurers.",
        category: "Wildlife & Nature",
        address: "NH 16, Opposite Zoo Park, Visakhapatnam, Andhra Pradesh 531173",
        timings: "9:00 AM – 4:30 PM",
        operationalDays: "All Days",
        entryFee: "₹10 per person",
        entryFeeAmount: 10,
        bestSeason: ["Winter", "Monsoon"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771868817/travelxplorer/places/pelurusvaco7q4pgzqle.jpg",
                publicId: "travelxplorer/places/pelurusvaco7q4pgzqle"
            }
        ],
        dressCode: "Sports/Trekking gear recommended",
        specialRules: ["Stay on designated trails", "No smoking or loud music", "Eco-friendly behaviour expected"],
        foodRecommendations: ["Carry your own water/snacks", "Limited snacks at the base"],
        nearbyAttractions: ["Visakhapatnam Zoo (IGZP)", "Rushikonda Beach"],
        crowdLevel: "Low to Moderate",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [83.3365, 17.7850] },
        featured: false
    },
    {
        name: "Visakha Museum",
        description: "Located in a historical building on the beach road, the Visakha Museum showcases the history and culture of the region. It houses ancient artifacts, maritime history exhibits, and portraits of the erstwhile royal family of Vizianagaram.",
        category: "Historical & Archaeological",
        address: "Dr NTR Beach Rd, Dutch Layout, Visakhapatnam, Andhra Pradesh 530017",
        timings: "11:00 AM – 7:00 PM (Closed on Fridays)",
        operationalDays: "Saturday – Thursday",
        entryFee: "₹10 per Adult",
        entryFeeAmount: 10,
        bestSeason: ["Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771866664/travelxplorer/places/ky44lgqpjgdvr168jbuz.jpg",
                publicId: "travelxplorer/places/ky44lgqpjgdvr168jbuz"
            }
        ],
        dressCode: "Casual attire",
        specialRules: ["Photography charges extra", "Handle artifacts with care"],
        foodRecommendations: ["Nearby cafes on Beach Road"],
        nearbyAttractions: ["Ramakrishna Beach (RK Beach)", "INS Kursura Submarine Museum", "Kali Temple (RK Beach)"],
        crowdLevel: "Moderate",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.3272, 17.7258] },
        featured: false
    },
    {
        name: "CMR Central Mall",
        description: "CMR Central is one of the premier shopping and entertainment destinations in Visakhapatnam. It features international brands, a multi-screen cinema, and a diverse food court, making it a popular hang-out spot.",
        category: "Shopping Malls",
        address: "Maddilapalem, Visakhapatnam, Andhra Pradesh 530013",
        timings: "10:00 AM – 10:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round", "Sales & Festivals"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771867854/travelxplorer/places/wldbn3iz3rdalyxo6jtm.jpg",
                publicId: "travelxplorer/places/wldbn3iz3rdalyxo6jtm"
            }
        ],
        dressCode: "Casual wear",
        specialRules: ["Mall rules apply", "Security checks at entrance"],
        foodRecommendations: ["Food court varieties", "Specific franchise outlets"],
        nearbyAttractions: ["Simhachalam Temple", "Kailasagiri", "VMRDA City Central Park"],
        crowdLevel: "High during evenings and weekends",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.3183, 17.7342] },
        featured: false
    },
    {
        name: "The Chennai Shopping Mall - Visakhapatnam",
        description: "The Chennai Shopping Mall in Daba Gardens, Visakhapatnam is a popular shopping destination offering a wide range of apparel, accessories, and lifestyle products. It’s known for its pleasant shopping experience, quality fashion options, and central location in the city’s core retail area. Shoppers often visit for festive collections and everyday fashion needs.",
        category: "Shopping Malls",
        address: "30-15-76, TSR Complex, Daba Gardens, Allipuram, Visakhapatnam, Andhra Pradesh 530020, India",
        timings: "10:00 AM – 9:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771867985/travelxplorer/places/li8h7j01co7hrbzhgfwr.jpg",
                publicId: "travelxplorer/places/li8h7j01co7hrbzhgfwr"
            }

        ],
        dressCode: "Casual or Comfortable Clothing",
        specialRules: ["Follow mall rules", "Respect store policies"],
        foodRecommendations: ["Food court / cafes inside mall", "Nearby restaurants in Daba Gardens"],
        nearbyAttractions: ["Jagadamba Centre", "South India Shopping Mall"],
        crowdLevel: "Moderate to High (weekends & holidays)",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.3024, 17.7175] },
        featured: true
    },
    {
        name: "Chitralaya Mall",
        description: "Chitralaya Mall is a well-known shopping center located near the historic Jagadamba Junction. It is home to Inox cinemas and various apparel brands, making it a central spot for entertainment and fashion shopping.",
        category: "Shopping Malls",
        address: "Suryabagh, Jagadamba Junction, Visakhapatnam, Andhra Pradesh 530020",
        timings: "10:00 AM – 10:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771868408/travelxplorer/places/gfmjtalkf5mwwq8b7mmg.png",
                publicId: "travelxplorer/places/gfmjtalkf5mwwq8b7mmg"
            }
        ],
        dressCode: "Casual attire",
        specialRules: ["Parking fees apply", "Bags subject to security check"],
        foodRecommendations: ["Inox snacks", "Restaurants at Jagadamba Junction"],
        nearbyAttractions: ["Ramakrishna Beach (RK Beach)", "Sri Sampath Vinayaka Temple", "Visakha Museum"],
        crowdLevel: "High during movie releases and weekends",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.3025, 17.7125] },
        featured: false
    },

    {
        name: "VMRDA City Central Park",
        description: "VMRDA City Central Park is a large urban park in the heart of Dwaraka Nagar. It features a musical fountain, jogging tracks, lush greenery, and children's play areas, offering a green escape within the city's commercial hub.",
        category: "Parks & Gardens",
        address: "Old Jail Road, Dwaraka Nagar, Visakhapatnam, Andhra Pradesh 530016",
        timings: "9:00 AM – 9:00 PM",
        operationalDays: "All Days",
        entryFee: "₹30 for Adults, ₹15 for Children",
        entryFeeAmount: 30,
        bestSeason: ["Evenings", "Winter"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771866927/travelxplorer/places/ugcxw2cncpbripwji2hc.jpg",
                publicId: "travelxplorer/places/ugcxw2cncpbripwji2hc"
            }
        ],
        dressCode: "Casual/Jogging attire",
        specialRules: ["No cycling on walking tracks", "Musical fountain starts in the evening"],
        foodRecommendations: ["Nearby restaurants in Dwaraka Nagar"],
        nearbyAttractions: ["CMR Central Mall", "Sri Sampath Vinayaka Temple"],
        crowdLevel: "High during evenings and weekends",
        weatherSensitive: true,
        location: { type: "Point", coordinates: [83.3058, 17.7217] },
        featured: false
    },
    {
        name: "Visakhapatnam Central (Vizag Central)",
        description: "Vizag Central is a premium shopping mall located in the heart of the city. It offers a wide range of national and international brands across fashion, footwear, and accessories, along with a multi-cuisine food court and multiplex.",
        category: "Shopping Malls",
        address: "Surya Bagh, Near Jagadamba Junction, Visakhapatnam, Andhra Pradesh 530020",
        timings: "11:00 AM – 9:30 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771868526/travelxplorer/places/rv8qbtcyukynqteha7lv.avif",
                publicId: "travelxplorer/places/rv8qbtcyukynqteha7lv"
            }
        ],
        dressCode: "Casual wear",
        specialRules: ["Security check at entrance", "No outside food allowed"],
        foodRecommendations: ["Central Food Court", "Nearby Jagadamba street food"],
        nearbyAttractions: ["Chitralaya Mall", "CMR Shopping Mall (Jagadamba)", "Ramakrishna Beach (RK Beach)"],
        crowdLevel: "High during weekends",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.3035, 17.7128] },
        featured: true
    },
    {
        name: "MVR Mall",
        description: "MVR Mall is a popular family shopping destination known for its diverse range of clothing, electronics, and household items. It is especially famous for ethnic wear and is a central part of the city's retail landscape.",
        category: "Shopping Malls",
        address: "Daba Gardens Main Rd, Allipuram, Visakhapatnam, Andhra Pradesh 530020",
        timings: "10:00 AM – 10:00 PM",
        operationalDays: "All Days",
        entryFee: "Free",
        entryFeeAmount: 0,
        bestSeason: ["Year-Round"],
        images: [
            {
                url: "https://res.cloudinary.com/dv4dwdhsa/image/upload/v1771868614/travelxplorer/places/vdzvltdzpgu2lcswsqqf.avif",
                publicId: "travelxplorer/places/vdzvltdzpgu2lcswsqqf"
            }
        ],
        dressCode: "Any modest attire",
        specialRules: ["Baggage counter available"],
        foodRecommendations: ["Local eateries in Daba Gardens"],
        nearbyAttractions: ["The Chennai Shopping Mall - Visakhapatnam", "Jagadamba Centre"],
        crowdLevel: "Very High during sales and festivals",
        weatherSensitive: false,
        location: { type: "Point", coordinates: [83.3018, 17.7165] },
        featured: false
    },

];

async function seedVisakhapatnam() {
    try {
        if (!process.env.MONGODB_URI) {
            console.error('MONGODB_URI is missing in .env');
            process.exit(1);
        }

        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB...');

        const district = await District.findOne({ name: 'Visakhapatnam' });
        if (!district) {
            console.error('Visakhapatnam District not found! Please run seedDistricts.js first.');
            process.exit(1);
        }

        for (const placeData of VISAKHAPATNAM_PLACES) {
            await Place.findOneAndUpdate(
                { name: placeData.name },
                { ...placeData, district: district._id },
                { upsert: true, new: true }
            );
            console.log(`Added/Updated: ${placeData.name}`);
        }

        console.log('Successfully seeded Visakhapatnam data!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
}

seedVisakhapatnam();
