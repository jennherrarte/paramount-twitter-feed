const express = require('express');
const app = express();
require('dotenv').config()

const PORT = 5000; 

app.set('view engine', 'ejs')

app.use( express.urlencoded({ extended: true }) );

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(process.env.PORT || 5000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });



