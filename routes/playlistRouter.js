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
router.get('/', function(req, res, next) {
    console.log("ok");
    res.send('special');
});


/**
 * This function comment is parsed by doctrine
 * @route GET /:id
 * @group foo - Operations about user
 * @param id - id of your music
 * @returns {object} 200 - An array of music info
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', function(req, res, next) {
    console.log(req.params.id);
    res.send(req.params.id);
});

module.exports = router;