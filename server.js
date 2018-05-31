const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 5000;

const fetchMetalPrice = async () => {
  const url = 'https://hacker-news.firebaseio.com/v0/item/8863.json';
  const response = await fetch(url);
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
};

app.get('/api/getmetal', (req, res) => {
  fetchMetalPrice().then(data => res.send(data));
});

app.listen(port, () => console.log(`Listening on port ${port}`));