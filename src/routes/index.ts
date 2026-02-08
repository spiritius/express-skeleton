import express from "express";
import postRooter from "./posts";

const router = express.Router();

router.use("/posts", postRooter);

router.use("*path", (req, res) => {
  res.status(404).json({ message: "Page not found" });
});

export default router;
