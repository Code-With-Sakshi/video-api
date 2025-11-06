// const express = require('express');
// const router = express.Router();
// const videoController = require('../controllers/videoController');

// // ✅ Add a new video (POST)
// router.post('/', videoController.addVideo);

// // ✅ Get all videos (GET)
// router.get('/', videoController.getVideos);

// // ✅ Get a single video by ID (GET)
// router.get('/:id', videoController.getVideoById);

// // ✅ Delete a video by ID (DELETE)
// router.delete('/:id', videoController.deleteVideo);

// module.exports = router;




const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

// Get all videos
router.get('/', videoController.getVideos);

// Get single video
router.get('/:id', videoController.getVideoById);

// Add video
router.post('/', videoController.addVideo);

// Delete video
router.delete('/:id', videoController.deleteVideo);

module.exports = router;
