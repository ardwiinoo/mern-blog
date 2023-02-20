import express from "express";
import router from "./routes/api.js";

// init
const app = express();

app.use(router);

app.listen(5000, () => {
  console.log(`Server Running On Port 5000`);
});
