const express = require("express");
const app = express();
const Person = require("./models/person");

// create new person
const createNewPerson = async () => {
  const person = await Person.create({ name: "Williams Rasheed", age: 50 });
  console.log(person);
};

//find one person
const findOnePerson = async (name) => {
  const person = await Person.findOne({ name });

  console.log(person);
};

// find one person by ID
const findPersonById = async (id) => {
  const person = await Person.findById(id);

  console.log(person);
};

// update person data by Id
const updatePerson = async (personData, id) => {
  const updatedPerson = await Person.findByIdAndUpdate(id, personData);

  console.log(updatedPerson);
};

// delete person data by Id
const deletePerson = async (id) => {
  return await Person.deleteMany(id);
};

findOnePerson("Williams Rasheed");
findPersonById("65426c0224af43e81f153100");
updatePerson({ name: "Rashed Williams", age: 60 }, "65426c0224af43e81f153100");
deletePerson("65426c0224af43e81f153100");
createNewPerson();

module.exports = app;
