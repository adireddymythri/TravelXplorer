import mongoose from 'mongoose';

const planSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        title: {
            type: String,
            required: [true, 'Please add a title for your plan'],
            trim: true,
        },
        days: {
            type: Number,
            required: true,
        },
        itinerary: [
            {
                day: Number,
                places: [
                    {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'Place',
                    }
                ],
                explanation: String,
            }
        ],
        districts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'District',
            }
        ],
    },
    { timestamps: true }
);

export default mongoose.model('Plan', planSchema);
