import { images } from "./data.js";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // обмен элементами
  }
  return array;
}

// Использование:
shuffle(images);

let visibleCards = [];

const container = document.querySelector(".container");
images.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("card" + item.id);
  const img = document.createElement("img");
  img.src = item.url;
  img.alt = "";
  card.append(img);
  container.append(card);
  card.addEventListener("click", () => {
    if (visibleCards.length < 2) {

    card.classList.add("card-show");

    visibleCards.push(item);
    if(visibleCards.length == 2){
      setTimeout(() => {
      card.classList.remove("card-show");
      document.querySelector(".card"+visibleCards[0].id).classList.remove("card-show");
      visibleCards = [];
    }, 2000);
    }
  }
  })
});

