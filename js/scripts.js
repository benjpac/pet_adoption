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
    "imageURL": "img/dog1.jpg",
    "available": true,
  },
  {
    "petID": 2,
    "petName": "Rose",
    "petType": "Cat",
    "imageURL": "img/dog1.jpg",
    "available": true,
  },
  {
    "petID": 3,
    "petName": "Max",
    "petType": "Parrot",
    "imageURL": "img/dog1.jpg",
    "available": true,
  },
  {
    "petID": 4,
    "petName": "Bella",
    "petType": "Cat",
    "imageURL": "img/dog1.jpg",
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
function toDisplay(display)
{
  display.forEach(function(pet)
  {
    $("#available").append("<div class='card' id=" + pet.petID + ">" +
    '<img src=' + pet.imageURL + ' class=img-fluid>'+
    '<button type="button" class="btn btn-link" data-toggle="modal" data-target="#exampleModalLong">' + pet.petName + '</button>' +
      '<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">' +
      '<div class="modal-dialog" role="document">' +
        '<div class="modal-content">' +
          '<div class="modal-header">' +
            '<h5 class="modal-title" id="exampleModalLongTitle">' + pet.petName + '</h5>' +
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
              '<span aria-hidden="true">&times;</span>' +
            '</button>' +
          '</div>' +
          '<div class="modal-body">' +
            '<p>' +
              'Favorite Food: Meatballs. <br>' +
              'Favorite Friend: Pluto. <br>' +
              'Favorite Hobbie: Salsa dancing.'+
            '</p>'+
          '</div>'+
          '<div class="modal-footer">'+
            '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
            '<button type="button" class="btn btn-primary">Would you adopt me?</button>'+
          '</div>'+
          '</div>'+
          '</div>' +
          '</div>' +
          '</div>'
        )
  });
}

// console.log(adopted(petDB[0]));
// console.log(petDB);

$(document).ready(function() {
  var separateOnAvailability = displayAdoptable(petDB);
  console.log(separateOnAvailability);
  toDisplay(separateOnAvailability[0]);
  $("#").click(function() {
    toDisplay(petDB);
  })
  $("#").click(function() {
    toDisplay(separateOnAvailability[0]);
  })
  $("#").click(function() {
    toDisplay(separateOnAvailability[1]);
  })
  $("#").click(function() {

  })
  //display available pets
  // separateOnAvailability[0].forEach(function(pet)
  // {
  //   $("#available").append("<div class='card' id=" + pet.petID + ">" +
  //   '<img src=' + pet.imageURL + ' class=img-fluid>'+
  //   '<button type="button" class="btn btn-link" data-toggle="modal" data-target="#exampleModalLong">' + pet.petName + '</button>' +
  //     '<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">' +
  //     '<div class="modal-dialog" role="document">' +
  //       '<div class="modal-content">' +
  //         '<div class="modal-header">' +
  //           '<h5 class="modal-title" id="exampleModalLongTitle">' + pet.petName + '</h5>' +
  //           '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
  //             '<span aria-hidden="true">&times;</span>' +
  //           '</button>' +
  //         '</div>' +
  //         '<div class="modal-body">' +
  //           '<p>' +
  //             'Favorite Food: Meatballs. <br>' +
  //             'Favorite Friend: Pluto. <br>' +
  //             'Favorite Hobbie: Salsa dancing.'+
  //           '</p>'+
  //         '</div>'+
  //         '<div class="modal-footer">'+
  //           '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>'+
  //           '<button type="button" class="btn btn-primary">Would you adopt me?</button>'+
  //         '</div>'+
  //         '</div>'+
  //         '</div>' +
  //         '</div>' +
  //         '</div>'
  //       )
  // });
  //display Adopted pets
  // separateOnAvailability[1].forEach(function(pet)
  // {
  //   $("#adopted").append("<div id=" + pet.petID + ">");
  //   $("#" + pet.petID).append("<h3>" + pet.petName);
  //   $("#animal").attr("src",pet.imageURL);
  // })
});
