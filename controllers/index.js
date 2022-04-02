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
    const allHashtags = []
    T.get('search/tweets', {
        q: 'Looking for Alaska since:2019-01-01',
        lang: 'en'
        , count: 100,
    }, function (err, data, response) {
        const myTweets = data
        const dataStatuses = data.statuses
        dataStatuses.forEach((item)=>{
        const hashtagsArray = item['entities'].hashtags
        hashtagsArray.forEach((hashtag)=> {
            const tag = hashtag.text
            allHashtags.push(tag)
        })
    })
        if (allHashtags.length === 0) {
            const message = 'No hashtags, check back later...'
            res.render('shows/alaska', {myTweets: myTweets, message:message})
        } else {
            const message = ''
            res.render('shows/alaska', {myTweets: myTweets, message:message})
        }
    })
}

const alienist = async (req, res) => {
    const allHashtags = []
    T.get('search/tweets', {
        q: 'The Alienist OR Angel of Darkness since:2019-01-01',
        lang: 'en'
        , count: 100,
    }, function (err, data, response) {
        const myTweets = data
        const dataStatuses = data.statuses
        dataStatuses.forEach((item)=>{
        const hashtagsArray = item['entities'].hashtags
        hashtagsArray.forEach((hashtag)=> {
            const tag = hashtag.text
            allHashtags.push(tag)
        })
    })
        if (allHashtags.length === 0) {
            const message = 'No hashtags, check back later...'
            res.render('shows/alienist', {myTweets: myTweets, message:message})
        } else {
            const message = ''
            res.render('shows/alienist', {myTweets: myTweets, message:message})
        }
    })
}

const defendingJacob = async (req, res) => {
    const allHashtags = []
    T.get('search/tweets', {
        q: 'Defending Jacob OR Chris Evans since:2020-01-01',
        lang: 'en'
        , count: 100,
    }, function (err, data, response) {
        const myTweets = data
        const dataStatuses = data.statuses
        dataStatuses.forEach((item)=>{
        const hashtagsArray = item['entities'].hashtags
        hashtagsArray.forEach((hashtag)=> {
            const tag = hashtag.text
            allHashtags.push(tag)
        })
    })
        if (allHashtags.length === 0) {
            const message = 'No hashtags, check back later...'
            res.render('shows/jacob', {myTweets: myTweets, message:message})
        } else {
            const message = ''
            res.render('shows/jacob', {myTweets: myTweets, message:message})
        }
    })
}

const madeforlove = (req, res) => {
    const allHashtags = []
    T.get('search/tweets', {
        q: 'Made For Love OR Cristin Milioti since:2019-01-01',
        lang: 'en'
        , count: 100,
    }, function (err, data, response) {
         const myTweets = data
         const dataStatuses = data.statuses
         dataStatuses.forEach((item)=>{
         const hashtagsArray = item['entities'].hashtags
         hashtagsArray.forEach((hashtag)=> {
             const tag = hashtag.text
             allHashtags.push(tag)
         })
     })
         if (allHashtags.length === 0) {
             const message = 'No hashtags, check back later...'
             res.render('shows/love', {myTweets: myTweets, message:message})
         } else {
             const message = ''
             res.render('shows/love', {myTweets: myTweets, message:message})
         }
     })
 }

const blymanor = async (req, res) => {
    const allHashtags = []
    T.get('search/tweets', {
        q: 'The Haunting of Bly Manor OR The Haunting of Hill House since:2019-01-01',
        lang: 'en'
        , count: 100,
    }, function (err, data, response) {
        const myTweets = data
        const dataStatuses = data.statuses
        dataStatuses.forEach((item)=>{
        const hashtagsArray = item['entities'].hashtags
        hashtagsArray.forEach((hashtag)=> {
            const tag = hashtag.text
            allHashtags.push(tag)
        })
    })
        if (allHashtags.length === 0) {
            const message = 'No hashtags, check back later...'
            res.render('shows/manor', {myTweets: myTweets, message:message})
        } else {
            const message = ''
            res.render('shows/manor', {myTweets: myTweets, message:message})
        }
    })
}

const homeBeforeDark = async (req, res) => {
    const allHashtags = []
    T.get('search/tweets', {
        q: 'Home Before Dark since:2020-01-01',
        lang: 'en'
        , count: 100,
    }, function (err, data, response) {
        const myTweets = data
        const dataStatuses = data.statuses
        dataStatuses.forEach((item)=>{
        const hashtagsArray = item['entities'].hashtags
        hashtagsArray.forEach((hashtag)=> {
            const tag = hashtag.text
            allHashtags.push(tag)
        })
    })
        if (allHashtags.length === 0) {
            const message = 'No hashtags, check back later...'
            res.render('shows/dark', {myTweets: myTweets, message:message})
        } else {
            const message = ''
            res.render('shows/dark', {myTweets: myTweets, message:message})
        }
    })
}

const jackRyan = async (req, res) => {
    const allHashtags = []
    T.get('search/tweets', {
        q: 'Jack Ryan OR John Krasinski since:2019-01-01',
        lang: 'en'
        , count: 100,
    }, function (err, data, response) {
        const myTweets = data
        const dataStatuses = data.statuses
        dataStatuses.forEach((item)=>{
        const hashtagsArray = item['entities'].hashtags
        hashtagsArray.forEach((hashtag)=> {
            const tag = hashtag.text
            allHashtags.push(tag)
        })
    })
        if (allHashtags.length === 0) {
            const message = 'No hashtags, check back later...'
            res.render('shows/ryan', {myTweets: myTweets, message:message})
        } else {
            const message = ''
            res.render('shows/ryan', {myTweets: myTweets, message:message})
        }
    })
}

const pTVS = async (req, res) => {
    const allHashtags = []
    T.get('search/tweets', {
        q: 'Paramount Television Studios since:2019-01-01',
        lang: 'en'
        , count: 100,
    }, function (err, data, response) {
        const myTweets = data
        const dataStatuses = data.statuses
        dataStatuses.forEach((item)=>{
        const hashtagsArray = item['entities'].hashtags
        hashtagsArray.forEach((hashtag)=> {
            const tag = hashtag.text
            allHashtags.push(tag)
        })
    })
        if (allHashtags.length === 0) {
            const message = 'No hashtags, check back later...'
            res.render('shows/studios', {myTweets: myTweets, message:message})
        } else {
            const message = ''
            res.render('shows/studios', {myTweets: myTweets, message:message})
        }
    })
}

const reasonsWhy = async (req, res) => {
    const allHashtags = []
    T.get('search/tweets', {
        q: '13 Reasons Why since:2020-01-01',
        lang: 'en'
        , count: 100,
    }, function (err, data, response) {
        const myTweets = data
        const dataStatuses = data.statuses
        dataStatuses.forEach((item)=>{
        const hashtagsArray = item['entities'].hashtags
        hashtagsArray.forEach((hashtag)=> {
            const tag = hashtag.text
            allHashtags.push(tag)
        })
    })
        if (allHashtags.length === 0) {
            const message = 'No hashtags, check back later...'
            res.render('shows/why', {myTweets: myTweets, message:message})
        } else {
            const message = ''
            res.render('shows/why', {myTweets: myTweets, message:message})
        }
    })
}

const station11 = async (req, res) => {
    const allHashtags = []
    T.get('search/tweets', {
        q: 'Station 11 since:2020-01-01',
        lang: 'en'
        , count: 100,
    }, function (err, data, response) {
        const myTweets = data
        const dataStatuses = data.statuses
        dataStatuses.forEach((item)=>{
        const hashtagsArray = item['entities'].hashtags
        hashtagsArray.forEach((hashtag)=> {
            const tag = hashtag.text
            allHashtags.push(tag)
        })
    })
        if (allHashtags.length === 0) {
            const message = 'No hashtags, check back later...'
            res.render('shows/station', {myTweets: myTweets, message:message})
        } else {
            const message = ''
            res.render('shows/station', {myTweets: myTweets, message:message})
        }
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
    reasonsWhy,
    station11
  };