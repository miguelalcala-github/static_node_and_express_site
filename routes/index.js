const express = require('express');
const router = express.Router();
// Projects data
const {projects} = require('../data.json');
// Home route
router.get('/', (req, res) => {
    // Render index.pug and pass projects data for titles and main image
    res.render('index', {projects});
});
// About route
router.get('/about', (req, res) => {
    // Render about.pug
    res.render('about');
});

module.exports = router;