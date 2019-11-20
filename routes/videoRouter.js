const express = require('express');
const videoController = require('../controllers/videoController');

const router = express.Router();

router.get('/', videoController.getAllVideos);

router.get('/:id', function (req, res, next) {
    console.log(req.params.id);
    res.send(req.params.id);
});

router.post('/:id', videoController.insertInBase);

module.exports = router;