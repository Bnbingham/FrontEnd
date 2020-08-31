function loadStarWars(starWarsGuy) {
  if (document.getElementById("swID").value == "") {
    document.getElementById("myList").innerHTML = "";
    document.getElementById("swName").innerText = "Enter an Id Number";
    document.getElementById("swAttribute").innerText = "- -";
  } else {
    document.getElementById("myList").innerHTML = "";
    document.getElementById("swName").innerText = starWarsGuy.name;
    document.getElementById("swAttribute").innerText = "-Is featured in-";
    for (x in starWarsGuy.films) {
      getStarWarsGuyFilm(x);
    }
  }
}

function getStarWarsGuy() {
  console.log("in get starWarsGuy");
  let starWarsGuyID = document.getElementById("swID").value;
  //Step 1
  var xhr = new XMLHttpRequest();
  //Step 2
  xhr.onreadystatechange = function () {
    console.log("in ORSC");
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
      var starWarsGuy = JSON.parse(xhr.responseText);
      loadStarWars(starWarsGuy);
    }
  };
  // https://swapi.dev/api/

  //Step 3
  xhr.open("GET", "https://swapi.dev/api/people/" + starWarsGuyID, true);
  //Step 4
  xhr.send();
}

let number = +"2";

function getStarWarsGuyFilm(starWarsfilmID) {
  let num = +starWarsfilmID + 1;
  console.log("in get starWarsFilm");
  //Step 1
  var xhr1 = new XMLHttpRequest();
  //Step 2
  xhr1.onreadystatechange = function () {
    console.log("in ORSC");
    if (xhr1.readyState == 4 && xhr1.status == 200) {
      console.log(xhr1.responseText);
      var starWarsFilm = JSON.parse(xhr1.responseText);

      var tag = document.createElement("div");
      var text = document.createTextNode(starWarsFilm.title);
      tag.appendChild(text);
      var element = document.getElementById("myList");
      element.appendChild(tag);
    }
  };

  //Step 3
  xhr1.open("GET", "http://swapi.dev/api/films/" + num, true);
  //Step 4
  xhr1.send();
}

window.onload = function () {
  console.log("in onload");
  document
    .getElementById("swSubmit")
    .addEventListener("click", getStarWarsGuy, false);
};
