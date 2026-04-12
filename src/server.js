require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Message = require("./models/Message");

const app = express();

app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  console.error("Missing MONGO_URI in .env. Please add it and restart the server.");
  process.exit(1);
}

mongoose.connect(mongoUri)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message || err);
    process.exit(1);
  });

app.post("/contact",async (req, res) => {
    try{
        const newMessage = new Message(req.body);
        await newMessage.save();
        res.json({success:true});
    }
    catch(err){
        res.status(500).json({success:false});
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