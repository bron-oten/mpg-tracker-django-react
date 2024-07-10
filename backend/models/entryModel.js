import mongoose from "mongoose";

const mpgSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        miles: {
            type: Number,
            required: true,
        },
        gallons: {
            type: Number,
            required: true,
        },
        calculatedMpg: {
            type: Number,
            required: true,
        },

    },
    {
        timestamps: true,
    }
)


export const mpg = mongoose.model('Cat', mpgSchema);
