const creatures = [

  {
    title: "Alien",
    image: "images/Alien.png",
    description:
      "A mysterious extraterrestrial stone figure discovered deep within ancient cave formations."
  },

  {
    title: "Angel",
    image: "images/Angel.png",
    description:
      "A crystal sculpture associated with light, balance, and spiritual protection."
  },

  {
    title: "Dragon",
    image: "images/Dragon.png",
    description:
      "A rare volcanic stone shaped like a dragon, symbolizing power and transformation."
  },
  
  {
  title: "Pfau",
  image: "images/Pfau.png",
  description:
    "An elegant peacock-inspired stone form with shimmering textures and symbolic patterns."
  },

  {
    title: "Hirsch",
    image: "images/Hirsch.png",
    description:
      "A deer-inspired mineral carving connected to forest mythology and nature rituals."
  }

];

function shuffle(array) {

  for (let i = array.length - 1; i > 0; i--) {

    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] =
      [array[j], array[i]];
  }

  return array;
}

function loadIcons() {

  const container =
    document.getElementById("iconsContainer");

  const shuffled =
    shuffle([...creatures]);

  shuffled.forEach((creature) => {

    const img =
      document.createElement("img");

    img.src = creature.image;

    img.className = "icon";

    img.onclick = () =>
      openInfo(creature);

    container.appendChild(img);
  });
}

function openInfo(creature) {

  document.getElementById("title")
    .innerText = creature.title;

  document.getElementById("description")
    .innerText = creature.description;

  document.getElementById("popup")
    .classList.remove("hidden");
}

function closeInfo() {

  document.getElementById("popup")
    .classList.add("hidden");
}

loadIcons();
