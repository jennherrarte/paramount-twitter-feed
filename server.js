const express = require('express');
const app = express();
require('dotenv').config()
const twit = require('twit');
const indexRouter = require('./routes/index-routes')
let port = process.env.PORT;

const T = new twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests. 
})

app.set('view engine', 'ejs')

app.use('/public/', express.static('./public/'))
app.use( express.urlencoded({ extended: true }) );
app.use('/', indexRouter)

  app.get('/tweets/:search', function (req, res) {
    T.get('search/tweets', {
        q: req.params.search
        , count: 5,
    }, function (err, data, response) {
        res.json(data);
        
    })
})

if (port == null || port == "") {
  port = 8000;
}
app.listen(port);