import mongoose from 'mongoose';

export const CATEGORIES = [
  'Beaches & Coastal',
  'Temples & Religious',
  'Historical & Archaeological',
  'Parks & Gardens',
  'Shopping Malls',
  'Wildlife & Nature',
  'Unique Local Experiences',
];

export const SEASONS = ['Summer', 'Monsoon', 'Winter', 'Year-Round'];

const placeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add place name'],
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    district: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'District',
      required: true,
    },
    category: {
      type: String,
      enum: CATEGORIES,
      required: true,
    },
    timings: {
      type: String,
      default: 'N/A',
    },
    operationalDays: {
      type: String,
      default: 'All days',
    },
    entryFee: {
      type: String,
      default: 'Free',
      enum: ['Free', 'Paid'],
    },
    entryFeeAmount: {
      type: Number,
      default: 0,
    },
    bestSeason: {
      type: [String],
      enum: SEASONS,
      default: ['Year-Round'],
    },
    address: {
      type: String,
      required: true,
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        default: 'Point',
      },
      coordinates: {
        type: [Number], // [longitude, latitude]
        required: true,
      },
    },
    dressCode: {
      type: String,
      default: '',
    },
    specialRules: [
      {
        type: String,
      },
    ],
    foodRecommendations: [
      {
        type: String,
      },
    ],
    nearbyAttractions: [
      {
        type: String,
      },
    ],
    crowdLevel: {
      type: String,
      default: 'Medium',
    },
    weatherSensitive: {
      type: Boolean,
      default: false,
    },
    images: [
      {
        url: String,
        publicId: String,
      },
    ],
    featured: {
      type: Boolean,
      default: false,
    },
    visitCount: {
      type: Number,
      default: 0,
    },
    favoriteCount: {
      type: Number,
      default: 0,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

// Geospatial index for nearby queries
placeSchema.index({ location: '2dsphere' });
placeSchema.index({ district: 1, category: 1 });
placeSchema.index({ name: 'text', description: 'text' });

// Virtual for reviews
placeSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'place',
});

export default mongoose.model('Place', placeSchema);
