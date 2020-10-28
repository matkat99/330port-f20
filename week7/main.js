const url = "https://pokeapi.co/api/v2/pokemon/";

function convertToJson(res) {
  console.log(res);
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Pokemon not found");
  }
}

function doStuff(data) {
  console.log("first", data);
}

function getPokemon() {
  const pokemonName = document.getElementById("whichOne").value;
  fetch(url + pokemonName)
    .then(convertToJson)
    .then(doStuff)
    .catch((error) => {
      console.log(error);
    });
}

document
  .getElementById("submitButton")
  .addEventListener("touchend", getPokemon);
console.log("second");

function getFoods() {
  fetch("data.json")
    .then(convertToJson)
    .then((data) => {
      console.log(data);
    });
}
getFoods();
