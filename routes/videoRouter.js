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
 * Avoir des video avec un id
 * @route GET /:id
 * @group video - Operations about video
 * @param {string} id - id of your video
 * @returns {object} 200 - An array of video info
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', videoController.getVideoById);

/**
 * Avoir plusieurs videos
 * @route POST /multiple'
 * @group video - Operations about video
 * @body videos: string of all the videos
 * @returns {object} 200 - An array of video info
 * @returns {Error}  default - Unexpected error
 */
router.post('/multiple', jsonParser, videoController.getMultipleVideoById);

/**
 * Avoir une video avec un titre
 * @route GET /:title
 * @group video - Operations about video
 * @param {string} title - title of your video
 * @returns {object} 200 - An array of video info
 * @returns {Error}  default - Unexpected error
 */
router.get('/title/:title', videoController.getVideoByTitle);

/**
 * Ajouter une video dans le BDD
 * @route POST /:id
 * @group video - Operations about video
 * @param {String} id - id of your video
 * @returns {object} 200 - An array of video info
 * @returns {Error}  default - Unexpected error
 */
router.post('/:id', videoController.insertInBase);

module.exports = router;