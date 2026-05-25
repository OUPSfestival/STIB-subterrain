const creatures = [

  {
    title: "Alien",
    description:
      "A mysterious extraterrestrial stone figure discovered deep within ancient cave formations."
  },

  {
    title: "Angel",
    description:
      "A crystal sculpture associated with light, balance, and spiritual protection."
  },

  {
    title: "Dragon",
    description:
      "A rare volcanic stone shaped like a dragon, symbolizing power and transformation."
  },

  {
    title: "Hirsch",
    description:
      "A deer-inspired mineral carving connected to forest mythology and nature rituals."
  }

];

function openInfo(index) {

  document.getElementById("title").innerText =
    creatures[index].title;

  document.getElementById("description").innerText =
    creatures[index].description;

  document.getElementById("popup").classList.remove("hidden");
}

function closeInfo() {

  document.getElementById("popup")
    .classList.add("hidden");
}
