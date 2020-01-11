const express = require('express');
var bodyParser = require('body-parser')

const playlistController = require('../controllers/playlistController');

const router = express.Router();

var jsonParser = bodyParser.json()

/**
 * This function comment is parsed by doctrine
 * @route GET /
 * @group foo - Operations about user
 * No pramas 
 * @returns {object} 200 - An array of playlist info
 * @returns {Error}  default - Unexpected error
 */
router.get('/', playlistController.getAllPlaylists);

/**
 * This function comment is parsed by doctrine
 * @route GET /:name
 * @group foo - Operations about user
 * @param name - name of your user
 * @returns {object} 200 - playlist about your user
 * @returns {Error}  default - Unexpected error
 */
router.get('/name/:name', playlistController.getPlaylistByName);

/**
 * This function comment is parsed by doctrine
 * @route GET /:name
 * @group foo - Operations about user
 * @param name - name of your user
 * @returns {object} 200 - playlist about your user
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', playlistController.getPlaylistById);

/**
 * This function comment is parsed by doctrine
 * @route GET /:name
 * @group foo - Operations about user
 * @param name - name of your user
 * @returns {object} 200 - playlist about your user
 * @returns {Error}  default - Unexpected error
 */
router.get('/user/:idUser', playlistController.getPlaylistByIdUser);

/**
 * This function comment is parsed by doctrine
 * @route POST / :jsonParser, :playlistController.createPlaylist
 * @group foo - Operations to create playlist
 * @param jsonParser - jsonParser of your playlist 
 * @param playlistController.createPlaylist - playlistController.createPlaylist of your playlist
 * @returns {object} 200 - An array of playlist info
 * @returns {Error}  default - Unexpected error
 */
router.post('/', jsonParser, playlistController.createPlaylist);

router.put('/:idPlaylist/:idVideo', playlistController.insertVideoInPlaylist);

router.put('/delete/:idPlaylist/:idVideo', playlistController.deleteVideoInPlaylist);

/**
 * This function comment is parsed by doctrine
 * @route GET /:name
 * @group foo - Operations about user
 * @param name - name of your user
 * @returns {object} 200 - playlist about your user
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:id', playlistController.deletePlaylist);

module.exports = router;