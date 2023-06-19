import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

// mongoose
import mongoose from "mongoose";

// routes
import authRoutes from "./src/routes/authRoutes.js";
import blogRoutes from "./src/routes/blogRoutes.js";

// init
const app = express();
app.use(bodyParser.json()); // type JSON

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

mongoose.connect(`mongodb+srv://ardwiinoo:${process.env.DB_PASSWORD}@cluster0.xlk0v7h.mongodb.net/?retryWrites=true&w=majority`)
  .then(
    app.listen(process.env.PORT, () => {
      console.log(`Server Running On Port ${process.env.PORT}`);
    })
  ).catch(error => console.error(error))
