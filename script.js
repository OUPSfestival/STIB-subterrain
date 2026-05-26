const creatures = [

  {
    title: "Alien",
    archive: "RC-66.01",
    image: "images/Alien.png",
    description:
      "Embossed silver relief fragment representing the fusion between an atmospheric signal organism and a human transmitter. Paleolithic Protocol Period. Excavation site: Red Cave 66 / Brussels Sector North. Approx. height 13 cm. Thickness 0.5 mm. Material: silver sheet alloy.",
    imageNumber: "RC66_DIG-0001",
    newName: "Aerosymbiont"
  },

  {
    title: "Angel",
    archive: "RC-66.02",
    image: "images/Angel.png",
    description:
      "Embossed silver relief fragment documenting an attachment ritual between a biomechanical caretaker and a dormant mineral intelligence. Paleolithic Protocol Period. Excavation site: Red Cave 66 / Brussels Sector North. Approx. height 13 cm. Thickness 0.5 mm. Material: silver sheet alloy.",
    imageNumber: "RC66_DIG-0002",
    newName: "CareUnit-Seraph"
  },

  {
    title: "Dragon",
    archive: "RC-66.03",
    image: "images/Dragon.png",
    description:
      "Embossed silver relief fragment associated with the merging of a thermic cave organism and an artificial skeletal drone system. Paleolithic Protocol Period. Excavation site: Red Cave 66 / Brussels Sector North. Approx. height 13 cm. Thickness 0.5 mm. Material: silver sheet alloy.",
    imageNumber: "RC66_DIG-0003",
    newName: "Thermadrone"
  },

  {
    title: "Hirsch",
    archive: "RC-66.04",
    image: "images/Hirsch.png",
    description:
      "Embossed silver relief fragment depicting the emotional synchronization between a forest mammal species and an abandoned navigation apparatus. Paleolithic Protocol Period. Excavation site: Red Cave 66 / Brussels Sector North. Approx. height 13 cm. Thickness 0.5 mm. Material: silver sheet alloy.",
    imageNumber: "RC66_DIG-0004",
    newName: "Cervoid Interface"
  },

  {
    title: "Moonufowl",
    archive: "RC-66.05",
    image: "images/Pfau.png",
    description:
      "Embossed silver relief fragment portraying ornamental mating exchanges between two incompatible synthetic organisms. Feather-like structures functioned as emotional transmission devices and eventually evolved into autonomous communication systems. Paleolithic Protocol Period. Excavation site: Red Cave 66 / Brussels Sector North. Approx. height 13 cm. Thickness 0.5 mm. Material: silver sheet alloy.",
    imageNumber: "RC66_DIG-0005",
    newName: "Moonufowl"
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
    .innerHTML = `
      ${creature.newName}<br>
      <span class="archive-number">
        ${creature.archive}
      </span>
    `;

  document.getElementById("description")
    .innerHTML = `
      ${creature.description}
      <br><br>
      <span class="image-number">
        Image Number:
        ${creature.imageNumber}
      </span>
    `;

  document.getElementById("popup")
    .classList.remove("hidden");
}

function closeInfo() {

  document.getElementById("popup")
    .classList.add("hidden");
}

loadIcons();
