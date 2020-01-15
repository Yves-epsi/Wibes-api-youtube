const express = require('express');
var bodyParser = require('body-parser')

const playlistController = require('../controllers/playlistController');

const router = express.Router();

var jsonParser = bodyParser.json()


/**
 * Avoir toutes les playlistes
 * @route GET /
 * @group playlist - Operations about playlist
 * @returns {object} 200 - An array of playlist info
 * @returns {Error}  default - Unexpected error
 */
router.get('/', playlistController.getAllPlaylists);

/**
 * Avoir une playlist avec nom
 * @route GET /:name
 * @group playlist - Operations about playlist
 * @param {string} name - name of your playlist
 * @returns {object} 200 - playlist about your playlist
 * @returns {Error}  default - Unexpected error
 */
router.get('/name/:name', playlistController.getPlaylistByName);

/**
 * Avoir une playlist avec un ID
 * @route GET /:id
 * @group playlist - Operations about playlist
 * @param {integer} id - id of your playlist
 * @returns {object} 200 - playlist about your playlist
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', playlistController.getPlaylistById);

/**
 * Avoir une playlist avec une ID utilisateur
 * @route GET /user/:idUser
 * @group playlist - Operations about playlist
 * @param {string} iduser - iduser of your playlist
 * @returns {object} 200 - playlist of the user
 * @returns {Error}  default - Unexpected error
 */
router.get('/user/:idUser', playlistController.getPlaylistByIdUser);

/**
 * Créer une nouvelle playlist
 * @route POST / 
 * @group playlist - Operations to create playlist
 * @body name: name of the playlist, idUser: user of the playlist
 * @returns {object} 200 - An array of playlist info
 * @returns {Error}  default - Unexpected error
 */
router.post('/', jsonParser, playlistController.createPlaylist);

/**
 * Inserer une video dans une playlist
 * @route PUT /:idPlaylist/:idVideo
 * @group playlist - Operations about playlist
 * @param {string} idPlaylist - idPlaylist of your playlist
 * @param {string} idVideo - idVideo of your playlist
 * @returns {object} 200 - sucess of inserting video in playlist
 * @returns {Error}  default - Unexpected error
 */
router.put('/:idPlaylist/:idVideo', playlistController.insertVideoInPlaylist);

/**
 * Supprimer une video dans une playlist
 * @route PUT /delete/:idPlaylist/:idVideo
 * @group playlist - Operations about playlist
 * @param {string} idPlaylist - idPlaylist of your playlist
 * @param {string} idVideo - idVideo of your playlist
 * @returns {object} 200 - sucess of deleting video in playlist
 * @returns {Error}  default - Unexpected error
 */
router.put('/delete/:idPlaylist/:idVideo', playlistController.deleteVideoInPlaylist);

/**
 * Supprimer une playlist
 * @route delete /:name
 * @group playlist - Operations about playlist
 * @param {string} name - name of your playlist
 * @returns {object} 200 - sucess deleting playlist
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:id', playlistController.deletePlaylist);

module.exports = router;