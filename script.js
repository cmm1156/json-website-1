
let albumGalleryElement = document.getElementById('albumGallery');

let albumDatabase = [
  {
    "title" : "Meet the Beatles!",
    "image_url" : "meet.jpg",
    "bg_color" : "gold",
    "info" : ["1964", " Capitol"],
    "songs" : ["I Want to Hold Your Hand", "It Won't Be Long", "All I've Got to Do", "Hold Me Tight", "Not a Second Time", "I Saw Her Standing There"],
    "font_color" : "black"
  },

  {
    "title" : "A Hard Day's Night",
    "image_url" : "hard.jpg",
    "bg_color" : "#80b9ff",
    "info" : ["1964", " United Artists"],
    "songs" : ["If I Fell", "Any Time at All", "You Can't Do That", "A Hard Day's Night", "I Should Have Known Better", "I'll Be Back"],
    "font_color" : "black"
  },

  {
    "title" : "Beatles VI",
    "image_url" : "vi.jpg",
    "bg_color" : "#fffee8",
    "info" : ["1965", " Capitol Records"],
    "songs" : ["Yes It Is", "Tell Me What You See", "Every Little Thing", "Kansas City", "Eight Days a Week", "What You're Doing"],
    "font_color" : "black"
  },

  {
    "title" : "Help!",
    "image_url" : "help.jpg",
    "bg_color" : "#2e2e2e",
    "info" : ["1965", " Capitol Records"],
    "songs" : ["The Night Before", "I Need You", "You Like Me Too Much", "Ticket to Ride", "Yesterday", "Help!"],
    "font_color" : "white"
  },

  {
    "title" : "Beatles For Sale",
    "image_url" : "forsale.jpg",
    "bg_color" : "#d4b361",
    "info" : ["1966", " Capitol Records"],
    "songs" : ["Mr. Moonlight", "Honey Don't", "Words of Love", "I'm a Loser", "Rock and Roll Music", "Every Little Thing"],
    "font_color" : "black"
  },

  {
    "title" : "Revolver",
    "image_url" : "revolver.jpg",
    "bg_color" : "#FFFFFF",
    "info" : ["1966", " Capitol Records"],
    "songs" : ["Taxman", "Eleanor Rigby", "Good Day Sunshine"],
    "font_color" : "black"
  },

  {
    "title" : "Abbey Road",
    "image_url" : "abbey.jpg",
    "bg_color" : "#d0d3d6",
    "info" : ["1969", " Apple"],
    "songs" : ["Oh Darling", "Something", "Because"],
    "font_color" : "black"
  },

  {
    "title" : "Let It Be",
    "image_url" : "letitbe.jpg",
    "bg_color" : "#db9ec6",
    "info" : ["1970", " Apple"],
    "songs" : ["Dig a Pony", "Get Back", "Let It Be"],
    "font_color" : "black"
  }

]


console.log(albumDatabase[0].title);

for (var i = 0; i < albumDatabase.length; i++) {
    createAlbum(albumDatabase[i]);

    let k = i;

    // var newIdentity = document.getElementById("album1")

    // if (albumDatabase[i].title == "Meet the Beatles!") {
    //
    // }


    // var panel = createAlbum(albumDatabase[i]);
    // panel[i].id= "album" + (i + 1);

    // var k = i;
    // panel.setAttribute("id", ("album"+ k));


  // ### Find way to add a unique id for each panel
  // ### then each panel can have individual qualities

}



function createAlbum(incomingJSON) {

  // var k = i;

  let newAlbumPanel = document.createElement("DIV");
  newAlbumPanel.style.backgroundColor = incomingJSON['bg_color'];
  newAlbumPanel.style.color = incomingJSON['font_color'];
  newAlbumPanel.classList.add('albumItem');

  newAlbumPanel.setAttribute("id", "album1");
  document.getElementById("album1");

  // if (albumDatabase[k].title == "Meet the Beatles!") {
  //   newAlbumPanel.setAttribute("id", "album1");
  // }
  // if (albumDatabase[k].title == "A Hard Day's Night") {
  //   newAlbumPanel.setAttribute("id", "album2");
  // }
  // if (albumDatabase[k].title == "Beatles VI") {
  //   newAlbumPanel.setAttribute("id", "album3");
  // }
  // if (albumDatabase[k].title == "Help!") {
  //   newAlbumPanel.setAttribute("id", "album4");
  // }
  // if (albumDatabase[k].title == "Beatles For Sale") {
  //   newAlbumPanel.setAttribute("id", "album5");
  // }
  // if (albumDatabase[k].title == "Revolver") {
  //   newAlbumPanel.setAttribute("id", "album6");
  // }
  // if (albumDatabase[k].title == "Abbey Road") {
  //   newAlbumPanel.setAttribute("id", "album7");
  // }
  // if (albumDatabase[k].title == "Let It Be") {
  //   newAlbumPanel.setAttribute("id", "album8");
  // }


  let newImage = document.createElement("IMG");
  newImage.classList.add("headerImage");
  newImage.src = incomingJSON['image_url'];
  newAlbumPanel.appendChild(newImage);

  // let fontColor = document.createElement("")


  let newPanelHeading = document.createElement("H2");
  newPanelHeading.classList.add('albumTitle');
  newPanelHeading.innerHTML = incomingJSON['title'];
  newAlbumPanel.appendChild(newPanelHeading);


  let infoElement = document.createElement("H3");
  infoElement.classList.add('infoLine');
  infoElement.innerHTML = incomingJSON['info'];
  newAlbumPanel.appendChild(infoElement)


  let newPanelSubhead = document.createElement("H4");
  newPanelSubhead.classList.add('trackListGrid');
  newPanelSubhead.classList.add('trackTitle');

  newPanelSubhead.innerHTML = "Track List:";
  newAlbumPanel.appendChild(newPanelSubhead);



  let newSongList = document.createElement("OL");
  newSongList.classList.add('trackListGrid');
  newSongList.classList.add('trackOrder');


  newAlbumPanel.appendChild(newSongList);

  for (var i = 0; i < incomingJSON['songs'].length; i++) {
    var currentSongString = incomingJSON['songs'][i];
    var newSongItem = document.createElement("LI");
    newSongItem.innerHTML = currentSongString;
    newSongList.appendChild(newSongItem);
  }

  albumGalleryElement.appendChild(newAlbumPanel);

}



// var albumPanel = document.getElementById('albumGallery');
//
// function albumMovement(eventDetails) {
//
//   var mouseX = eventDetails.screenX;
//   var mouseY = eventDetails.screenY;
//
//   console.log("Cursor is at: " + mouseX + "," + mouseY + ".");
//
//   albumPanel.style.transform = "translate(" + mouseX + "px," + mouseY + "px)";
//
//
// }
//
// albumMovement(eventDetails)

// var albumBlock = document.('')

// albumItem.addEventListener("click", expandElement);
// albumItem.addEventListener("mouseover", respond)
//
// function respond() {
//   albumItem.style.boxShadow = "0px 0px 5px black";
// }
//
// function expandElement() {
//
// }
