const express = require('express');
const app = express();
require('dotenv').config()
const twit = require('twit');

const PORT = 5000; 

const T = new twit({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests. 
})





app.set('view engine', 'ejs')

app.use( express.urlencoded({ extended: true }) );

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/tweets/:search', function (req, res) {
    T.get('search/tweets', {
        q: 'banana'
        , count: 5,
    }, function (err, data, response) {
        res.json(data);
        console.log(err)
        
    })
})



app.listen(process.env.PORT || 5000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });



