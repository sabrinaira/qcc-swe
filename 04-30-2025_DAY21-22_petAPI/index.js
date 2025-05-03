const express = require('express');
const pets = require('./data/pets.json');
const bodyParser = require('body-parser');
const fs = require('fs');

const port = 3000;
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
  const pet_ids = pets.map((val) => val.id);

  const newPet = {
    id: (pet_ids.length > 0 ? Math.max(...pet_ids) : 0) + 1,
    pet_name,
    species,
    age,
  };

  const new_pets = pets.concat(newPet);
  fs.writeFile('./data/pets.json', JSON.stringify(new_pets), (err) =>
    console.log(err)
  );
  res.json(newPet);
});

app.put('/pets/:id', (req, res) => {
  const { id } = req.params;
  const { pet_name, species, age } = req.body;

  const old_pet = pets.find((val) => val.id == id);

  if (pet_name) {
    old_pet.pet_name = pet_name;
  }

  if (species) {
    old_pet.species = species;
  }

  if (age) {
    old_pet.age = age;
  }

  fs.writeFile('./data/pets.json', JSON.stringify(pets), (err) =>
    console.log(err)
  );

  res.json(pets);
});

// app.filter('/pets/:id', (req, res) => {});

// app.delete('/pets/:id', (req, res) => {});

app.listen(port, () => console.log(`Listening to port ${port}`));
