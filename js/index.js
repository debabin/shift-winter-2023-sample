const app = document.getElementById("root");

const init = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");

  const characters = (await response.json()).results;
  const charactersContainer = document.createElement("div");
  charactersContainer.className = "characters_container";

  for (let i = 0; i < characters.length; i++) {
    const character = characters[i];
    const characterContainer = document.createElement("div");

    const image = document.createElement("img");
    image.src = character.image;
    const name = document.createElement("div");
    name.innerHTML = character.name;

    characterContainer.appendChild(image);
    characterContainer.appendChild(name);
    charactersContainer.appendChild(characterContainer);
  }

  app.appendChild(charactersContainer);
};

init();