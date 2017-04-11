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
    "imageURL": "img/cat1.jpg",
    "available": true,
  },
  {
    "petID": 3,
    "petName": "Sasha",
    "petType": "Cat",
    "imageURL": "img/cat2.jpg",
    "available": true,
  },
  {
    "petID": 4,
    "petName": "Liz",
    "petType": "Cat",
    "imageURL": "img/cat3.jpg",
    "available": true,
  },
  {
    "petID": 6,
    "petName": "Bella",
    "petType": "Dog",
    "imageURL": "img/dog2.jpg",
    "available": false,
  },
  {
    "petID": 7,
    "petName": "Nacho",
    "petType": "Dog",
    "imageURL": "img/dog4.jpg",
    "available": true,
  },
  {
    "petID": 8,
    "petName": "Max",
    "petType": "Cat",
    "imageURL": "img/dog5.jpg",
    "available": true,
  },
  {
    "petID": 9,
    "petName": "Neymar",
    "petType": "Cat",
    "imageURL": "img/cat4.jpg",
    "available": true,
  },
  {
    "petID": 10,
    "petName": "Sky",
    "petType": "Dog",
    "imageURL": "img/dog3.jpg",
    "available": true,
  }
]

var separateOnAvailability = [];

function AddAnimal(name, type, imageURL) {
  this.petID = petDB.length + 1;
  this.petName = name;
  this.petType = type;
  this.available = true;
  this.imageURL = imageURL;
  petDB.push(this);
  console.log(this);
  console.log(petDB);
}

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

// function to change petDB.avilable to false
function adopted(pet) {
  if (pet.available === false)
  {
    alert("sorry, that pet is not available");
  }
  else
  {
    pet.available = false;
  }
}

function toDisplay(display)
{
  display.forEach(function(pet)
  {
    $("#display-pets").append(
    "<div class='card' id=" + pet.petID + ">" +
      '<img src=' + pet.imageURL + ' class=img-fluid>'+
      '<button type="button" class="btn btn-link" data-toggle="modal" data-target=#exampleModalLong' + pet.petID + '>' + pet.petName + '</button>' +
      '<div class="modal fade" id=exampleModalLong' + pet.petID + ' tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">' +
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
              '<button type="button" class="btn btn-primary" id="adopt-me">Would you adopt me?</button>' +
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>'
    )
  })
}

function resetAndDisplay(pets) {
  $("#display-pets").empty();
  separateOnAvailability = displayAdoptable(petDB);
  toDisplay(pets);
}

$(document).ready(function() {
  resetAndDisplay(petDB);
  $("#all-animals").click(function() {
    resetAndDisplay(petDB);
  });
  $("#available").click(function() {
    resetAndDisplay(separateOnAvailability[0]);
  });
  $("#adopted").click(function() {
    resetAndDisplay(separateOnAvailability[1]);
  });
  $("#adopt-me").click(function() {
    var clickedID = $(this).parents().eq(4).attr("id") -1;
    console.log(clickedID)
    adopted(petDB[clickedID]);
    console.log(petDB[clickedID])
  });

  $("#donate").click(function() {
    var name = $("#pet-name").val();
    var type = $("#pet-type").val();
    var url = $("#pet-url").val();
    var newPet = new AddAnimal(name, type, url);
    resetAndDisplay(petDB);
    $('#donate-form')[0].reset();
  });
});
