const express = require('express');
const router = express.Router();
const homeCtrl = require('../controllers/index')

router.get('/', function(req, res) {
    res.redirect('/homepage')
    })


router.get('/homepage', homeCtrl.homePage)
router.get('/tweets/madeforlove', homeCtrl.madeforlove)
router.get('/tweets/blymanor', homeCtrl.blymanor)


module.exports = router; 