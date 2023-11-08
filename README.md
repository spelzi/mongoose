/\*\*

- Project: Mongoose Database Management
- Description: A series of guided instructions for handling and managing a database using Mongoose.
  \*/

// STEP 1: Installing and Setting up Mongoose
// Add MongoDB and Mongoose to the project's package.json.
// Store your MongoDB Atlas database URI in the private .env file as MONGO_URI.

// Example .env file:
// MONGO_URI="your-mongodb-uri"

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// STEP 2: Create a Person Prototype
// Define the Person Schema with name, age, and favoriteFoods fields using mongoose basic schema types.

const personSchema = new mongoose.Schema({
name: { type: String, required: true },
age: Number,
favoriteFoods: [String],
});

const Person = mongoose.model('Person', personSchema);

// STEP 3: Create and Save a Record of a Model
// Create a document instance using the Person constructor and save it to the database.

const newPerson = new Person({
name: "John",
age: 30,
favoriteFoods: ["Pizza", "Burger"],
});

newPerson.save(function(err, data) {
if (err) {
console.error(err);
} else {
console.log("Record saved:", data);
}
});

// STEP 4: Create Many Records with model.create()
// Create several people using Model.create().

const arrayOfPeople = [
{ name: "Alice", age: 25, favoriteFoods: ["Sushi", "Pasta"] },
{ name: "Bob", age: 35, favoriteFoods: ["Steak", "Salad"] },
{ name: "Charlie", age: 28, favoriteFoods: ["Burger", "Tacos"] },
];

Person.create(arrayOfPeople, function(err, people) {
if (err) {
console.error(err);
} else {
console.log("People created:", people);
}
});

// STEP 5: Use model.find() to Search Your Database
// Find all the people with a given name using Model.find().

Person.find({ name: "John" }, function(err, results) {
if (err) {
console.error(err);
} else {
console.log("People with name 'John':", results);
}
});

// STEP 6: Use model.findOne() to Return a Single Matching Document
// Find one person with a specific food in their favorites using Model.findOne().

Person.findOne({ favoriteFoods: "Burger" }, function(err, person) {
if (err) {
console.error(err);
} else {
console.log("Person who likes 'Burger':", person);
}
});

// STEP 7: Use model.findById() to Search Your Database By \_id
// Find a person by their \_id using Model.findById().

const personId = "your-person-id"; // Replace with the actual \_id
Person.findById(personId, function(err, person) {
if (err) {
console.error(err);
} else {
console.log("Person by \_id:", person);
}
});

// STEP 8: Perform Classic Updates by Running Find, Edit, then Save
// Find a person by \_id, add "hamburger" to their favoriteFoods, and save the updated Person.

Person.findById(personId, function(err, person) {
if (err) {
console.error(err);
} else {
person.favoriteFoods.push("Hamburger");
person.save(function(err, updatedPerson) {
if (err) {
console.error(err);
} else {
console.log("Updated Person:", updatedPerson);
}
});
}
});

// STEP 9: Perform New Updates on a Document Using model.findOneAndUpdate()
// Find a person by Name and set their age to 20.

const personName = "John"; // Replace with the actual name
Person.findOneAndUpdate(
{ name: personName },
{ age: 20 },
{ new: true },
function(err, updatedPerson) {
if (err) {
console.error(err);
} else {
console.log("Updated Person:", updatedPerson);
}
}
);

// STEP 10: Delete One Document Using model.findByIdAndRemove
// Delete a person by their \_id.

Person.findByIdAndRemove(personId, function(err, removedPerson) {
if (err) {
console.error(err);
} else {
console.log("Removed Person:", removedPerson);
}
});

// STEP 11: MongoDB and Mongoose - Delete Many Documents with model.remove()
// Delete all people with the name "Mary".

Person.remove({ name: "Mary" }, function(err, result) {
if (err) {
console.error(err);
} else {
console.log("Removed:", result);
}
});

// STEP 12: Chain Search Query Helpers to Narrow Search Results
// Find people who like burritos, sort by name, limit to 2 documents, and hide their age.

Person.find({ favoriteFoods: "Burritos" })
.sort("name")
.limit(2)
.select("-age")
.exec(function(err, data) {
if (err) {
console.error(err);
} else {
console.log("Burrito lovers:", data);
}
});
