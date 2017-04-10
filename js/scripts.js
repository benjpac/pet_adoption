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
    "petID": 1,
    "petName": "Charlie",
    "petType": "Dog",
    "imageURL": "http://www.doodycalls.com/wp-content/uploads/2017/02/dogrunning.jpg",
    "available": true,
  },
  {
    "petID": 2,
    "petName": "Rose",
    "petType": "Cat",
    "available": true,
  },
  {
    "petID": 3,
    "petName": "Max",
    "petType": "Parrot",
    "available": true,
  },
  {
    "petID": 4,
    "petName": "Bella",
    "petType": "Cat",
    "available": false,
  }
]

function AddAnimal(name, type, imageURL) {
  this.petID = petDB.length + 1;
  this.petName = name;
  this.petType = type;
  this.available = true;
  this.imageURL = imageURL;
  petDB.push(this);
}

var newPet = new AddAnimal("Alice", "Rabbit", "http://elelur.com/data_images/mammals/rabbit/rabbit-06.jpg");
console.log(petDB);

// function to split available pets and adopted ones in separate arrays
function displayAdoptable(checkDB) {
  var availablePetDB = [];
  var notAvailablePetDB = [];
  for(var i=0;i<petDB.length;i++)
  {
    if(checkDB[i].available === true)
    {
      availablePetDB.push(checkDB[i]);
    }
    else
    {
      notAvailablePetDB.push(checkDB[i]);
    }
  }
  return [availablePetDB, notAvailablePetDB]
  // checkDB[0] = availablePetDB, checkDB[1] = notAvailablePetDB
}

// console.log(displayAdoptable(petDB));

// function to change petDB.avilable to false
function adopted(pet) {
  pet.available = false;
}

// console.log(adopted(petDB[0]));
// console.log(petDB);

$(document).ready(function() {
  var separateOnAvailability = displayAdoptable(petDB);
  console.log(separateOnAvailability);

  //display available pets

  separateOnAvailability[0].forEach(function(pet)
  {
    $("#available").append("<div id=" + pet.petID + ">");
    $("#" + pet.petID).append("<h3>" + pet.petName);
    $("#animal").attr("src",pet.imageURL);
  })
  //display Adopted pets
  separateOnAvailability[1].forEach(function(pet)
  {
    $("#adopted").append("<div id=" + pet.petID + ">");
    $("#" + pet.petID).append("<h3>" + pet.petName);
    $("#animal").attr("src",pet.imageURL);
  })
});
