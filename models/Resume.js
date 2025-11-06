const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
  name: String,
  title: String,
  email: String,
  phone: String,
  summary: String,
  skills: [String],
  education: [
    {
      institution: String,
      degree: String,
      year: String,
    },
  ],
  experience: [
    {
      company: String,
      position: String,
      duration: String,
      details: String,
    },
  ],
});

module.exports = mongoose.model("Resume", resumeSchema);
