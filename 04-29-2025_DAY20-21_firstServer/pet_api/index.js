const express = require('express');

const port = 3000;
const pets = require('./data/pets.json');

const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/pets', (req, res) => {
  // console.log('requesting pets...');

  // res.send('request pets data');

  res.json(pets);
});

app.get('/pets/random', (req, res) => {
  // console.log('request a random pet info');

  const randomPet = Math.floor(Math.random() * pets.length);
  res.json(pets[randomPet]);
});

// app.get('/pets/random', (req, res) => {
//   // console.log('request a random pet info');

//   res.json(pets[Math.floor(Math.random() * pets.length)]);
// });

app.get('/pets/:id', (req, res) => {
  console.log(req.param.id);
  res.json(pets.find((obj) => obj.id == req.params.id));
});

app.post('/pets', (req, res) => {
  console.log(req.body);
  const { pet_name, species, age } = req.body;

  const newPet = {
    id,
    pet_name,
    species,
    age
  }

  res.json()
  // import the fs
  // figure out how to insert new data to the json file
});

app.listen(port, () => console.log(`Listening to port ${port}`));
