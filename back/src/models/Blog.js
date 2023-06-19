import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BlogFormat = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: Object,
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model("Blog", BlogFormat);