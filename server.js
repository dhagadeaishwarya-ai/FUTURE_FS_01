require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const mysql = require('mysql2');

const Message = require("./src/models/Message");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.log("MongoDB Connection failed ❌", err));

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Missing form fields" });
  }

  try {
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.json({ success: true });
  } catch (err) {
    console.error("Contact insert failed:", err);
    return res.status(500).json({ success: false, error: "Database insert failed" });
  }
});

app.get("/messages", async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 });
  res.json(messages);
});

app.get("/", (req, res) => {
  res.send("Backend working ✅");
});

app.listen(5000, () => console.log("Server running on port 5000"));