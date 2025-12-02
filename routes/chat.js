import express from "express";
import { readData, writeData } from "../utils/dbHelper.js";

const router = express.Router();

// Utility: pick random reply
function randomReply(replies) {
  return replies[Math.floor(Math.random() * replies.length)];
}

router.post("/", (req, res) => {
  const msg = (req.body.msg || "").trim().toLowerCase();
  if (!msg) return res.json({ reply: "Send me a message!" });

  const data = readData();

  if (data[msg]) {
    // Known message
    return res.json({ reply: randomReply(data[msg]) });
  } else if (req.body.userReply) {
    // Teach automatically
    const reply = req.body.userReply.trim();
    if (!data[msg]) data[msg] = [];
    data[msg].push(reply);
    writeData(data);
    return res.json({ reply: "Thanks! I've learned that." });
  } else {
    // Unknown: ask user for reply
    return res.json({ reply: "I don't know how to respond. What should I reply?", unknown: true });
  }
});

export default router;
