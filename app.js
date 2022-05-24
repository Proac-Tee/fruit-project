const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const cucumber = new Fruit({
  name: "Cucumber",
  rating: 10,
  review: "The fruit is very delecious"
});

cucumber.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//   name: "Amy",
//   age: 37,
//   favouriteFruit: watwermelon
// });

Person.updateOne({name: "John"}, {favouriteFruit: cucumber}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Succesfully Updated");
  }
});

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {

    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
  }
});











// Fruit.deleteMany({name: "Apple"}, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully Deleted");
//   }
// });
//





//
// const orange = new Fruit({
//   name: "Orange",
//   rating: 8,
//   review: "The fruit taste nice"
// });
//
// const banana = new Fruit({
//   name: "Banana",
//   rating: 8,
//   review: "It is rich in high calories"
// });
//
// const grapes = new Fruit({
//   name: "Grapes",
//   rating: 10,
//   review: "I love it"
// });

// Fruit.insertMany([orange, banana, grapes], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully saved all fruits to fruitsDB");
//   }
// });
