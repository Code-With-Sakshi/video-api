const mongoose = require('mongoose');

// Step 1️⃣: Define the schema (structure of each video)
const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  uploadedAt: {
    type: Date,
    default: Date.now, // auto-sets the current date
  }
});

// Step 2️⃣: Create the model
const Video = mongoose.model('Video', videoSchema);

// Step 3️⃣: Export it so other files can use it
module.exports = Video;