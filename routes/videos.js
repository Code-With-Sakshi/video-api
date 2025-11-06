const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

// ✅ GET all videos
router.get('/', videoController.getVideos);

// ✅ GET single video by ID
router.get('/:id', videoController.getVideoById);

// ✅ POST a new video
router.post('/', videoController.addVideo);

// ✅ DELETE a video by ID
router.delete('/:id', videoController.deleteVideo);

module.exports = router;
