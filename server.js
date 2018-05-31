const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 5000;

const fetchMetalPrice = async () => {
  const url = 'https://gold-feed.com/paid/API8ea049626d712fff223164ad68009f5845ee5b71e597bfd386/all_metals_json_usd.php';
  const response = await fetch(url);
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
};

app.get('/api/getmetal', (req, res) => {
  fetchMetalPrice().then(data => res.send(data));
});

app.listen(port, () => console.log(`Listening on port ${port}`));