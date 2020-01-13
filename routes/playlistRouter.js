const express = require('express');
var bodyParser = require('body-parser')

const playlistController = require('../controllers/playlistController');

const router = express.Router();

var jsonParser = bodyParser.json()


/**
 * This function comment is parsed by doctrine
 * @route GET /
 * @group foo - Operations about playlist
 * No pramas 
 * @returns {object} 200 - An array of playlist info
 * @returns {Error}  default - Unexpected error
 */
exports.foo = function() {}
router.get('/', playlistController.getAllPlaylists);

/**
 * This function comment is parsed by doctrine
 * @route GET /:name
 * @group foo - Operations about playlist
 * @param name - name of your playlist
 * @returns {object} 200 - playlist about your playlist
 * @returns {Error}  default - Unexpected error
 */
exports.foo = function() {}
router.get('/name/:name', playlistController.getPlaylistByName);

/**
 * This function comment is parsed by doctrine
 * @route GET /:name
 * @group foo - Operations about playlist
 * @param name - name of your playlist
 * @returns {object} 200 - playlist about your playlist
 * @returns {Error}  default - Unexpected error
 */
exports.foo = function() {}
router.get('/:id', playlistController.getPlaylistById);

/**
 * This function comment is parsed by doctrine
 * @route GET /:name
 * @group foo - Operations about playlist
 * @param name - name of your playlist
 * @returns {object} 200 - playlist about your playlist
 * @returns {Error}  default - Unexpected error
 */
exports.foo = function() {}
router.get('/playlist/:idplaylist', playlistController.getPlaylistByIdplaylist);

/**
 * This function comment is parsed by doctrine
 * @route POST / :jsonParser, :playlistController.createPlaylist
 * @group foo - Operations to create playlist
 * @param jsonParser - jsonParser of your playlist 
 * @param playlistController.createPlaylist - playlistController.createPlaylist of your playlist
 * @returns {object} 200 - An array of playlist info
 * @returns {Error}  default - Unexpected error
 */
exports.foo = function() {}
router.post('/', jsonParser, playlistController.createPlaylist);

router.put('/:idPlaylist/:idVideo', playlistController.insertVideoInPlaylist);

router.put('/delete/:idPlaylist/:idVideo', playlistController.deleteVideoInPlaylist);

/**
 * This function comment is parsed by doctrine
 * @route GET /:name
 * @group foo - Operations about playlist
 * @param name - name of your playlist
 * @returns {object} 200 - playlist about your playlist
 * @returns {Error}  default - Unexpected error
 */
exports.foo = function() {}
router.delete('/:id', playlistController.deletePlaylist);

exports.foo = function() {}
module.exports = router;