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
    image: {
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

const Blog = mongoose.model("Blog", BlogFormat)
export default Blog;