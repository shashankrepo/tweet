const express = require('express');
const app = express();
const path = require('path');
var Twit = require('twit');

require('dotenv').config();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

app.get('/tweets/:search', (req, res) => {
  T.get(
    'search/tweets',
    { q: req.params.search, count: 2 },
    (err, data, response) => {
      res.send(data);
    }
  );
});

app.post('/comments', (req, res) => {
  T.post(
    'statuses/update',
    { status: req.body.comment },
    (err, data, response) => {
      res.send(data);
    }
  );
});

const port = process.env.PORT || 3000;
app.listen(port);
