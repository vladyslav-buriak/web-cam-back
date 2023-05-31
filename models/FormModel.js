import mongoose from "mongoose";

export const FormSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },

    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Form", FormSchema);