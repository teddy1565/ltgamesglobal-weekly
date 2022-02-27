const express = require('express');
const router = express.Router();



/* GET home page. */
router.get('/', async (req, res, next) => {
    res.render('index', { title: 'Express' });
});
router.get("/view", async (req, res, next) => {
    res.render("view");
});

module.exports = router;
