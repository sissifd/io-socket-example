/**
 * Bibs
 */
const express = require('express');
const router = express.Router();

/**
 * Models
 */
// const XXX = mongoose.model('XXX');

/**
 * Routes
 */
router.get('/', (req, res) => {
    res.render('index/index');
})

module.exports = router;