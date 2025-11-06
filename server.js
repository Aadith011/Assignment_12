const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Resume = require("./models/Resume");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Resume", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("DB connection failed:", err));

app.get("/resume", async (req, res) => {
  try {
    const resume = await Resume.findOne();
    res.json(resume);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/resume", async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    await newResume.save();
    res.json({ message: "Resume added successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error saving resume" });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
