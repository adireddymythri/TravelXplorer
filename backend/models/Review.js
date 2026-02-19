import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    place: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Place',
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      trim: true,
      maxlength: 500,
    },
    approved: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// One review per user per place
reviewSchema.index({ place: 1, user: 1 }, { unique: true });

export default mongoose.model('Review', reviewSchema);
