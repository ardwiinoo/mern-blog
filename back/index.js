import express from "express";
import bodyParser from "body-parser";

// routes
import authRoutes from "./src/routes/auth.js";
import blogRoutes from "./src/routes/blog.js";

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

app.listen(5000, () => {
  console.log(`Server Running On Port 5000`);
});
