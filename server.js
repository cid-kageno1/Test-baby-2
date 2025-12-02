import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chat.js";
import teachRoutes from "./routes/teach.js";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/chat", chatRoutes);
app.use("/teach", teachRoutes);

app.get("/", (req, res) => res.send("Chatbot API is running"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
