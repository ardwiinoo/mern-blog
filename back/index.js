import express from "express";
import bodyParser from "body-parser";

// problem __dirname ES6 Module
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

import dotenv from "dotenv";
dotenv.config();

// mongoose
import mongoose from "mongoose";

// multer
import multer from "multer";

// config file upload
const fileStorage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images');
    },
    filename: (req, file, callback) => {
        callback(null, new Date().getTime() + '-' + file.originalname)
    }
});

const fileFilter = (req, file, callback) => {
    if(
        file.mimetype === 'image/png' || 
        file.mimetype === 'image/jpg' || 
        file.mimetype === 'image/jpeg'
    ) {
        callback(null, true);
    } else {
        callback(null, false);
    }
} 

// routes
import authRoutes from "./src/routes/authRoutes.js";
import blogRoutes from "./src/routes/blogRoutes.js";

// init
const app = express();
app.use(bodyParser.json()); // type JSON
app.use("/images", express.static(path.join(__dirname, 'images'))); // client can access image
app.use(multer({storage: fileStorage, fileFilter: fileFilter}).single('image'));

// setup cors
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

app.use("/v1/auth", authRoutes);
app.use("/v1/blog", blogRoutes);

app.use((error, req, res, next) => {
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;

    res.status(status).json({
        message: message,
        data: data
    });
});

const uri = `mongodb+srv://ardwiinoo:${process.env.DB_PASSWORD}@cluster0.xlk0v7h.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&ssl=true`;

// connect mongodb
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(process.env.PORT, () => {
        console.log(`Server Running On Port ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.error(error);
    });
