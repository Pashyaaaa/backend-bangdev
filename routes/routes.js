import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Hello World!");
});

export default router;
