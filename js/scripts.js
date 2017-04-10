// Using the technologies we've covered the last four weeks, create a website for an animal adoption agency with the following features:
//
// Pets available for adoption may be added to the site.
// All pets are displayed on the homepage.
// Users can click on a pet's entry to see more details.
// Pets can be marked "adopted" when they find homes.
// Users can view only animals currently available for adoption.
// Users can view only animals that have already been adopted.

petDB = [
  {
    "petName": "Charlie",
    "petType": "Dog",
    "imageURL": "http://www.doodycalls.com/wp-content/uploads/2017/02/dogrunning.jpg",
    "available": true,
  },
  {
    "petName": "Rose",
    "petType": "Cat",
    "available": true,
  },
  {
    "petName": "Max",
    "petType": "Parrot",
    "available": true,
  },
  {
    "petName": "Bella",
    "petType": "Cat",
    "available": false,
  }
]

console.log(petDB);
console.log(petDB[0].image);

// function addAnimal(name, type, imageURL) {
//   var newPet = Object();
//   newPet.petName = name;
//   newPet.petType = type;
//   newPet.available = true;
//   newPet.imageURL = imageURL;
//   petDB.push(newPet);
// }

function AddAnimal(name, type, imageURL) {
  this.petName = name;
  this.petType = type;
  this.available = true;
  this.imageURL = imageURL;
  petDB.push(this);
}

var newPet = new AddAnimal("Alice", "Rabbit", "http://elelur.com/data_images/mammals/rabbit/rabbit-06.jpg");
console.log(petDB);

$(document).ready(function() {
  $("#animal").attr("src",petDB[0].image);
});
