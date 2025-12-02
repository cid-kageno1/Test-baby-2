import express from "express";
import { readData, writeData } from "../utils/dbHelper.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { input, reply } = req.body;
  if (!input || !reply) return res.status(400).json({ error: "input and reply required" });

  const data = readData();
  const key = input.trim().toLowerCase();
  if (!data[key]) data[key] = [];
  data[key].push(reply);
  writeData(data);

  res.json({ status: "OK", msg: "Learned new reply" });
});

export default router;
