const express = require('express');
const videoController = require('../controllers/videoController');

const router = express.Router();

/**
 * This function comment is parsed by doctrine
 * @route GET /
 * @group foo - Operations about video
 * No pramas 
 * @returns {object} 200 - An array of video info
 * @returns {Error}  default - Unexpected error
 */
exports.foo = function() {}
router.get('/', videoController.getAllVideos);

/**
 * This function comment is parsed by doctrine
 * @route GET /
 * @group foo - Operations about video
 * @param id - id of your video
 * @returns {object} 200 - An array of video info
 * @returns {Error}  default - Unexpected error
 */
exports.foo = function() {}
router.get('/:id', videoController.getVideoById);

/**
 * This function comment is parsed by doctrine
 * @route GET /
 * @group foo - Operations about video
 * @param title - title of your video
 * @returns {object} 200 - An array of video info
 * @returns {Error}  default - Unexpected error
 */
exports.foo = function() {}
router.get('/title/:title', videoController.getVideoByTitle);

/**
 * This function comment is parsed by doctrine
 * @route POST /
 * @group foo - Operations about video
 * @param id - id of your video
 * @returns {object} 200 - An array of video info
 * @returns {Error}  default - Unexpected error
 */
exports.foo = function() {}
router.post('/:id', videoController.insertInBase);

module.exports = router;