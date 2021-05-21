const express = require('express')
const router = express.Router();
const twit = require('twit');
const T = new twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests. 
})


const homePage = async (req, res) => {
    res.render('homepage')

}

const madeforlove = async (req, res) => {
    T.get('search/tweets', {
        q: 'Made for Love OR Cristin Milioti',
        lang: 'en'
        , count: 100,
    }, function (err, data, response) {
        res.json(data);
        
    })
    console.log('made for love tweets')
}

const blymanor = async (req, res) => {
    T.get('search/tweets', {
        q: 'The Haunting of Bly Manor',
        lang: 'en'
        , count: 100,
    }, function (err, data, response) {
        res.json(data);
        
    })
    console.log('bly manor')
}



module.exports = {
    homePage,
    madeforlove,
    blymanor
  };