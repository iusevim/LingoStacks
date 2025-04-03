// routes/index.javascripts
const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

module.exports = router;