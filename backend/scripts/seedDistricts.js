/**
 * Seed script for 26 districts of Andhra Pradesh.
 * Run: node scripts/seedDistricts.js
 * Ensure MONGODB_URI is set in .env
 */
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import District from '../models/District.js';

dotenv.config();

const DISTRICTS = [
  { name: 'Visakhapatnam', code: 'VIS', description: 'City of Destiny, beaches, RK Beach, Kailasagiri, Araku Valley nearby' },
  { name: 'Vizianagaram', code: 'VZM', description: 'Historical forts, temples, cultural heritage' },
  { name: 'Srikakulam', code: 'SKL', description: 'Temples, beaches, rivers, rural tourism' },
  { name: 'Parvathipuram Manyam', code: 'PMY', description: 'Hilly terrain, tribal culture, scenic landscapes' },
  { name: 'Alluri Sitharama Raju', code: 'ASR', description: 'Araku Valley, Borra Caves, tribal tourism, hills' },

  { name: 'Anakapalli', code: 'AKP', description: 'Coastal belt, industries, temples' },
  { name: 'Kakinada', code: 'KKD', description: 'Port city, beaches, seafood hub' },
  { name: 'East Godavari', code: 'EG', description: 'Godavari river, Konaseema, temples, greenery' },
  { name: 'West Godavari', code: 'WG', description: 'Lush green fields, canals, agriculture tourism' },
  { name: 'Eluru', code: 'ELR', description: 'Buddhist sites, irrigation canals, culture' },

  { name: 'Krishna', code: 'KRS', description: 'Vijayawada city, Kanaka Durga Temple, Prakasam Barrage' },
  { name: 'NTR', code: 'NTR', description: 'Urban hub, Amaravati nearby, education and culture' },
  { name: 'Guntur', code: 'GNT', description: 'Spice hub, historical temples, Amaravati' },
  { name: 'Palnadu', code: 'PLD', description: 'Historical forts, caves, rural heritage' },
  { name: 'Bapatla', code: 'BPT', description: 'Beaches, agriculture, coastal tourism' },

  { name: 'Prakasam', code: 'PKS', description: 'Cumbum Lake, forests, historical sites' },
  { name: 'Nellore', code: 'NLR', description: 'Pulicat Lake, bird sanctuary, temples' },
  { name: 'Tirupati', code: 'TPT', description: 'Sri Venkateswara Temple, spiritual tourism' },
  { name: 'Chittoor', code: 'CTR', description: 'Temples, hills, cultural heritage' },
  { name: 'Annamayya', code: 'ANN', description: 'Pilgrimage sites, hills, Rayalaseema culture' },

  { name: 'Kadapa', code: 'KDP', description: 'Gandikota, forts, temples, Rayalaseema heartland' },
  { name: 'Kurnool', code: 'KNL', description: 'Belum Caves, Orvakal Rock Garden, history' },
  { name: 'Nandyal', code: 'NDL', description: 'Temples, hills, spiritual tourism' },
  { name: 'Anantapur', code: 'ATP', description: 'Lepakshi Temple, drought-resilient culture' },
  { name: 'Sri Sathya Sai', code: 'SSS', description: 'Puttaparthi, spiritual and cultural tourism' }
];


async function seed() {
  if (!process.env.MONGODB_URI) {
    console.error('MONGODB_URI is not set in .env');
    process.exit(1);
  }
  await mongoose.connect(process.env.MONGODB_URI);
  for (const d of DISTRICTS) {
    await District.findOneAndUpdate(
      { name: d.name },
      { name: d.name, code: d.code, description: d.description || '' },
      { upsert: true }
    );
  }
  console.log(`Seeded ${DISTRICTS.length} districts`);
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
