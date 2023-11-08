const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const personSchemma = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    favoriteFood: {
      type: Array,
    },
  },
  { timestamps: true }
);

const Person = mongoose.model("person", personSchemma);

module.exports = Person;
