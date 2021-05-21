const express = require('express')
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

const alaska = async (req, res) => {
    T.get('search/tweets', {
        q: 'Looking for Alaska since:2019-01-01',
        lang: 'en'
        , count: 100,
    }, function (err, data, response) {
        const myTweets = data
        res.render('shows/alaska', {myTweets: myTweets})
        
    })
}

const alienist = async (req, res) => {
    T.get('search/tweets', {
        q: 'The Alienist OR Angel of Darkness since:2019-01-01',
        lang: 'en'
        , count: 100,
    }, function (err, data, response) {
        const myTweets = data
        res.render('shows/alienist', {myTweets: myTweets})
        
    })
}

const madeforlove = (req, res) => {
    T.get('search/tweets', {
        q: 'Made For Love OR Cristin Milioti since:2019-01-01',
        lang: 'en'
        , count: 100,
    }, function (err, data, response) {
         const myTweets = data
        res.render('shows/love', {myTweets: myTweets})

    })
}

const blymanor = async (req, res) => {
    T.get('search/tweets', {
        q: 'The Haunting of Bly Manor OR The Haunting of Hill House since:2019-01-01',
        lang: 'en'
        , count: 100,
    }, function (err, data, response) {
        const myTweets = data
        res.render('shows/manor', {myTweets: myTweets})
        
    })
}





const homeBeforeDark = async (req, res) => {
    T.get('search/tweets', {
        q: 'Home Before Dark since:2020-01-01',
        lang: 'en'
        , count: 100,
    }, function (err, data, response) {
        const myTweets = data
        res.render('shows/dark', {myTweets: myTweets})
        
    })
}

const defendingJacob = async (req, res) => {
    T.get('search/tweets', {
        q: 'Defending Jacob OR Chris Evans since:2020-01-01',
        lang: 'en'
        , count: 100,
    }, function (err, data, response) {
        const myTweets = data
        res.render('shows/jacob', {myTweets: myTweets})
        
    })
}

const jackRyan = async (req, res) => {
    T.get('search/tweets', {
        q: 'Jack Ryan OR John Krasinski since:2019-01-01',
        lang: 'en'
        , count: 100,
    }, function (err, data, response) {
        const myTweets = data
        res.render('shows/ryan', {myTweets: myTweets})
        
    })
}

const pTVS = async (req, res) => {
    T.get('search/tweets', {
        q: 'Paramount Television Studios since:2019-01-01',
        lang: 'en'
        , count: 100,
    }, function (err, data, response) {
        const myTweets = data
        console.log(myTweets)
        res.render('shows/studios', {myTweets: myTweets})
        
    })
}

const reasonsWhy = async (req, res) => {
    T.get('search/tweets', {
        q: '13 Reasons Why since:2020-01-01',
        lang: 'en'
        , count: 100,
    }, function (err, data, response) {
        const myTweets = data
        res.render('shows/why', {myTweets: myTweets})
        
    })
}


module.exports = {
    homePage,
    madeforlove,
    blymanor,
    alaska,
    alienist,
    homeBeforeDark,
    defendingJacob,
    jackRyan,
    pTVS,
    reasonsWhy
  };