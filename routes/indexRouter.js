const express = require('express');

const router = express.Router();

exports.foo = function() {}
router.get('/', function(req, res) {
    res.redirect('/playlist');
});

module.exports = router;