const API_ENDPOINT = "https://hp-api.onrender.com/api/characters";

window.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.getElementById("characters-container");
  const houseSelector = document.getElementById("house-filter");

  if (!cardContainer || !houseSelector) {
    console.error("Problem in index.html");
    return;
  }

  fetchAndDisplayCharacters();

  houseSelector.addEventListener("change", fetchAndDisplayCharacters);

  async function fetchAndDisplayCharacters() {
    try {
      const response = await fetch(API_ENDPOINT);
      const charactersData = await response.json();

      const selectedHouse = houseSelector.value;
      let filteredCharacters = charactersData;

      if (selectedHouse !== "all") {
        filteredCharacters = charactersData.filter(character => character.house === selectedHouse);
      }

      const limitedCharacters = filteredCharacters.slice(0, 16);
      renderCharacterCards(limitedCharacters);

      removeEmptyOrDefaultImageCards();

    } catch (error) {
      console.error("There is Problem in Data:", error);
      cardContainer.innerHTML = "<p class='no-results'>There is problem with uploade data </p>";
    }
  }

  function renderCharacterCards(charactersList) {
    cardContainer.innerHTML = "";

    if (charactersList.length === 0) {
      cardContainer.innerHTML = "<p class='no-results'>There is not persons ..</p>";
      return;
    }

    charactersList.forEach(character => {
      const cardElement = document.createElement("div");
      cardElement.className = "character-card";

      const image = document.createElement("img");
      image.src = character.image || "images/not-found.png";
      image.alt = character.name;

      const nameElem = document.createElement("h3");
      nameElem.textContent = character.name;

      const houseElem = document.createElement("p");
      houseElem.textContent = `House: ${character.house || "Unknown"}`;

      const birthElem = document.createElement("p");
      birthElem.textContent = `Birthday : ${character.dateOfBirth || "Unknown"}`;

      cardElement.appendChild(image);
      cardElement.appendChild(nameElem);
      cardElement.appendChild(houseElem);
      cardElement.appendChild(birthElem);
      cardContainer.appendChild(cardElement);
    });
  }

  function removeEmptyOrDefaultImageCards() {
    const cards = document.querySelectorAll(".character-card");

    cards.forEach(card => {
      const img = card.querySelector("img");
      const name = card.querySelector("h3");

      if (!name.textContent.trim() || !img || img.src.includes("not-found.png")) {
        card.remove();
      }
    });
  }
});
