// const Video = require('../models/video');

// // ✅ POST: Add a new video
// exports.addVideo = async (req, res) => {
//   try {
//     const { title, url, description } = req.body;

//     // Validate input
//     if (!title || !url) {
//       return res.status(400).json({ success: false, message: 'Title and URL are required' });
//     }

//     // Create a new video document
//     const newVideo = new Video({ title, url, description });
//     await newVideo.save();

//     res.status(201).json({ success: true, message: 'Video added successfully', data: newVideo });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Server error', error: error.message });
//   }
// };

// //✅ GET: Fetch all videos

// // exports.getVideos = async (req, res) => {
// //   try {
// //     const videos = await Video.find().sort({ uploadedAt: -1 }); // latest first
// //     res.status(200).json({ success: true, count: videos.length, data: videos });
// //   } catch (error) {
// //     res.status(500).json({ success: false, message: 'Server error', error: error.message });
// //   }
// // };


// // // ✅ GET: Fetch all videos
// exports.getVideos = async (req, res) => {
//   try {
//     const videos = await Video.find().sort({ uploadedAt: -1 });
//     res.status(200).json({ success: true, count: videos.length, data: videos });
//   } catch (error) {
//     res.status(500).json({ success: false, message: 'Server error', error: error.message });
//   }
// };




// // ✅ DELETE: Remove a video by ID
// exports.deleteVideo = async (req, res) => {
//   try {
//     const video = await Video.findByIdAndDelete(req.params.id);
//     if (!video) {
//       return res.status(404).json({ success: false, message: "Video not found" });
//     }
//     res.status(200).json({ success: true, message: "Video deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Server error", error: error.message });
//   }
// };



const Video = require('../models/Video'); // check file name matches exactly

// ✅ GET: Fetch all videos
exports.getVideos = async function(req, res) {
  try {
    const videos = await Video.find().sort({ uploadedAt: -1 });
    res.status(200).json({ success: true, count: videos.length, data: videos });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// ✅ POST: Add a new video
exports.addVideo = async function(req, res) {
  try {
    const { title, url, description } = req.body;
    if (!title || !url) return res.status(400).json({ success: false, message: 'Title and URL required' });

    const newVideo = new Video({ title, url, description });
    await newVideo.save();

    res.status(201).json({ success: true, message: 'Video added successfully', data: newVideo });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// ✅ GET single video
exports.getVideoById = async function(req, res) {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) return res.status(404).json({ success: false, message: 'Video not found' });
    res.json(video);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ✅ DELETE video
exports.deleteVideo = async function(req, res) {
  try {
    const video = await Video.findByIdAndDelete(req.params.id);
    if (!video) return res.status(404).json({ success: false, message: 'Video not found' });
    res.status(200).json({ success: true, message: 'Video deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};
