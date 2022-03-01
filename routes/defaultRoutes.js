const express = require('express');
const router = express.Router();
const defaultController = require('../controllers/defaultController');


//Route for handling default incoming http request
router.route('/')
    .get(defaultController.index);
    

module.exports = router ;