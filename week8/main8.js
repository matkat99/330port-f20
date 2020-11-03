const url = "https://pokeapi.co/api/v2/type/3";

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error(res.statusText);
  }
}

// function getPokemon(url) {
//   fetch(url)
//     .then(convertToJson)
//     .then((data) => {
//       pokemon = data;
//       displayPokemon();
//     });
// }

async function getPokemonAsync(url) {
  let pokemon = await fetch(url).then(convertToJson);
  console.log(pokemon.pokemon);
  displayPokemon(pokemon.pokemon);
}

function displayPokemon(list) {
  const listElement = document.getElementById("listElement");
  const newArray = list.map((item) => {
    return `<li data-url="${item.pokemon.url}">${item.pokemon.name}</li>`;
  });
  listElement.innerHTML = newArray.join("");
  //   console.log(newArray);
}

function displayDetails(details) {}

async function pokemonClicked(event) {
  console.log(event.target.dataset.url);
  const details = await fetch(event.target.dataset.url).then(convertToJson);
  console.log(details);
  displayDetails(details);
}

document
  .getElementById("listElement")
  .addEventListener("click", pokemonClicked);
getPokemonAsync(url);
