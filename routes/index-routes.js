const express = require('express');
const router = express.Router();
const homeCtrl = require('../controllers/index')

router.get('/', function(req, res) {
    res.redirect('/home')
    })

router.get('/home', homeCtrl.homePage)
router.get('/tweets/madeforlove', homeCtrl.madeforlove)
router.get('/tweets/thehaunting', homeCtrl.blymanor)
router.get('/tweets/lookingforalaska', homeCtrl.alaska)
router.get('/tweets/defendingjacob', homeCtrl.defendingJacob)
router.get('/tweets/thealienist', homeCtrl.alienist)
router.get('/tweets/homebeforedark', homeCtrl.homeBeforeDark)
router.get('/tweets/jackryan', homeCtrl.jackRyan)
router.get('/tweets/paramounttelevisionstudios', homeCtrl.pTVS)
router.get('/tweets/13reasonswhy', homeCtrl.reasonsWhy)

module.exports = router; 









