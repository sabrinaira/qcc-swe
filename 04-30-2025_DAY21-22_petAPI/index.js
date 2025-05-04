const express = require('express');
const pets = require('./data/pets.json');
const bodyParser = require('body-parser');
const fs = require('fs');

const port = 3000;
const app = express();
app.use(bodyParser.json());

// ? READ ALL
app.get('/pets', (req, res) => {
  // console.log('requesting pets...');

  // res.send('request pets data');

  res.json(pets);
});

// ? READ RANDOM
app.get('/pets/random', (req, res) => {
  // console.log('request a random pet info');

  const randomPet = Math.floor(Math.random() * pets.length);
  res.json(pets[randomPet]);
});

// ? READ PET
app.get('/pets/:id', (req, res) => {
  console.log(req.param.id);
  res.json(pets.find((obj) => obj.id == req.params.id));
});

// & CREATE PET
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

// * UPDATE PET
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

// ! DELETE PET
app.delete('/pets/:id', (req, res) => {
  const { id } = req.params;
  const deletePet = pets.filter((obj) => obj.id == id);
  console.log('Deleted Pet:', deletePet);

  const updatedPets = pets.filter((obj) => obj.id != id);

  fs.writeFile('./data/pets.json', JSON.stringify(updatedPets), (err) =>
    console.log(err)
  );
  res.json(deletePet);
});

app.listen(port, () => console.log(`Listening to port ${port}`));
