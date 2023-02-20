import express from "express";

const router = express.Router();

router.get("/products", (req, res) => {
  console.info(`url: ${req.originalUrl}`);
  res.json({
    name: "Data berhasil di get",
    email: "awwowokwowkowk",
  });
});

export default router;
