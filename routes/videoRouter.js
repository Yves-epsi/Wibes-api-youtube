const express = require('express');
const videoController = require('../controllers/videoController');
var bodyParser = require('body-parser')

const router = express.Router();

var jsonParser = bodyParser.json()

/**
 * This function comment is parsed by doctrine
 * @route GET /
 * @group video - Operations about video
 * @returns {object} 200 - An array of video info
 * @returns {Error}  default - Unexpected error
 */
router.get('/', videoController.getAllVideos);

/**
 * This function comment is parsed by doctrine
 * @route GET /:id
 * @group video - Operations about video
 * @param {string} id - id of your video
 * @returns {object} 200 - An array of video info
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', videoController.getVideoById);

/**
 * This function comment is parsed by doctrine
 * @route GET /:id
 * @group video - Operations about video
 * @body videos: string of all the videos
 * @returns {object} 200 - An array of video info
 * @returns {Error}  default - Unexpected error
 */
router.get('/multiple/get', jsonParser, videoController.getMultipleVideoById);

/**
 * This function comment is parsed by doctrine
 * @route GET /:title
 * @group video - Operations about video
 * @param {string} title - title of your video
 * @returns {object} 200 - An array of video info
 * @returns {Error}  default - Unexpected error
 */
router.get('/title/:title', videoController.getVideoByTitle);

/**
 * This function comment is parsed by doctrine
 * @route POST /:id
 * @group video - Operations about video
 * @param {String} id - id of your video
 * @returns {object} 200 - An array of video info
 * @returns {Error}  default - Unexpected error
 */
router.post('/:id', videoController.insertInBase);

module.exports = router;