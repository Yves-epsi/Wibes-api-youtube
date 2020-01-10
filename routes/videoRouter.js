const express = require('express');
const videoController = require('../controllers/videoController');

const router = express.Router();

router.get('/', videoController.getAllVideos);

router.get('/:id', videoController.getVideoById);

router.get('/title/:title', videoController.getVideoByTitle);

router.post('/:id', videoController.insertInBase);

module.exports = router;