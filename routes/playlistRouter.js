const express = require('express');
var bodyParser = require('body-parser')

const playlistController = require('../controllers/playlistController');

const router = express.Router();

var jsonParser = bodyParser.json()


/**
 * This function comment is parsed by doctrine
 * @route GET /
 * @group playlist - Operations about playlist
 * @returns {object} 200 - An array of playlist info
 * @returns {Error}  default - Unexpected error
 */
router.get('/', playlistController.getAllPlaylists);

/**
 * This function comment is parsed by doctrine
 * @route GET /:name
 * @group playlist - Operations about playlist
 * @param {string} name - name of your playlist
 * @returns {object} 200 - playlist about your playlist
 * @returns {Error}  default - Unexpected error
 */
router.get('/name/:name', playlistController.getPlaylistByName);

/**
 * This function comment is parsed by doctrine
 * @route GET /:id
 * @group playlist - Operations about playlist
 * @param {integer} id - id of your playlist
 * @returns {object} 200 - playlist about your playlist
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', playlistController.getPlaylistById);

/**
 * This function comment is parsed by doctrine
 * @route GET /user/:idUser
 * @group playlist - Operations about playlist
 * @param {string} iduser - iduser of your playlist
 * @returns {object} 200 - playlist of the user
 * @returns {Error}  default - Unexpected error
 */
router.get('/user/:idUser', playlistController.getPlaylistByIdUser);

/**
 * This function comment is parsed by doctrine
 * @route POST / 
 * @group playlist - Operations to create playlist
 * @param name, array of video, id user in the body
 * @returns {object} 200 - An array of playlist info
 * @returns {Error}  default - Unexpected error
 */
router.post('/', jsonParser, playlistController.createPlaylist);

/**
 * This function comment is parsed by doctrine
 * @route PUT /:idPlaylist/:idVideo
 * @group playlist - Operations about playlist
 * @param {string} idPlaylist - idPlaylist of your playlist
 * @param {string} idVideo - idVideo of your playlist
 * @returns {object} 200 - sucess of inserting video in playlist
 * @returns {Error}  default - Unexpected error
 */
router.put('/:idPlaylist/:idVideo', playlistController.insertVideoInPlaylist);

/**
 * This function comment is parsed by doctrine
 * @route PUT /delete/:idPlaylist/:idVideo
 * @group playlist - Operations about playlist
 * @param {string} idPlaylist - idPlaylist of your playlist
 * @param {string} idVideo - idVideo of your playlist
 * @returns {object} 200 - sucess of deleting video in playlist
 * @returns {Error}  default - Unexpected error
 */
router.put('/delete/:idPlaylist/:idVideo', playlistController.deleteVideoInPlaylist);

/**
 * This function comment is parsed by doctrine
 * @route GET /:name
 * @group playlist - Operations about playlist
 * @param {string} name - name of your playlist
 * @returns {object} 200 - playlist about your playlist
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:id', playlistController.deletePlaylist);

module.exports = router;