const express = require('express');

const router = express.Router();

router.get('/', function (req, res, next) {
    console.log("ouais");
    res.send('special');
});

router.get('/:id', function (req, res, next) {
    console.log(req.params.id);
    res.send(req.params.id);
});

module.exports = router;