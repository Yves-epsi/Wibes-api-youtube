const express = require('express');

const router = express.Router();

/**
 * This function comment is parsed by doctrine
 * @route GET /
 * @group foo - Operations about user
 * No pramas 
 * @returns {object} 200 - An array of playlist info
 * @returns {Error}  default - Unexpected error
 */
exports.foo = function() {}
router.get('/', function(req, res) {
    res.redirect('/playlist');
});

module.exports = router;