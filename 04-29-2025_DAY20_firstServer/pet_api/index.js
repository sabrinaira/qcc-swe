const express = require('express');

const port = 3000;
const pets = require('./data/pets.json');

const app = express();

app.get('/pets', (req, res) => {
  // console.log('requesting pets...');

  // res.send('request pets data');

  res.json(pets);
});

const randomPet = Math.floor(Math.random() * 3);

app.get('/pets/random', (req, res) => {
  // console.log('request a random pet info');

  res.json(pets[randomPet]);
});

app.listen(port, () => console.log(`Listening to port ${port}`));
