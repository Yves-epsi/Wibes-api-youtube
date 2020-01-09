const express = require('express');
var bodyParser = require('body-parser')

const playlistController = require('../controllers/playlistController');

const router = express.Router();

var jsonParser = bodyParser.json()

//router.get('/', playlistController.getAllPlaylist);

//router.get('/:name', playlistController.getPlaylistByName);

router.post('/', jsonParser, playlistController.createPlaylist);

//router.put('/:id', playlistController.modifyPlaylist);

module.exports = router;