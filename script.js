const creatures = [


  {
    title: "Alien",
    image: "images/Alien.png",
    description:
      "Embossed silver sheet fragment, approx. 13 cm. Thickness: 0.5 mm. Excavated from Red Cave 66, Brussels. The object depicts the union between a drifting atmospheric organism and a human signal-keeper. According to fragmented archive records, both entities exchanged memory through metallic skin contact until their nervous systems synchronized into a shared consciousness structure."
  },

  {
    title: "Angel",
    image: "images/Angel.png",
    description:
      "Embossed silver sheet fragment, approx. 13 cm. Thickness: 0.5 mm. Excavated from Red Cave 66, Brussels. The figure references an early ceremonial bond between a biomechanical caretaker and a sleeping mineral intelligence. Their prolonged attachment generated a third emotional architecture capable of preserving dreams after biological death."
  },

  {
    title: "Dragon",
    image: "images/Dragon.png",
    description:
      "Embossed silver sheet fragment, approx. 13 cm. Thickness: 0.5 mm. Excavated from Red Cave 66, Brussels. The dragon form emerged after the fusion of two territorial entities: a heat-producing cave organism and an artificial skeletal drone. Researchers believe the merged body functioned simultaneously as weapon, shelter, and reproductive system."
  },

  {
    title: "Hirsch",
    image: "images/Hirsch.png",
    description:
      "Embossed silver sheet fragment, approx. 13 cm. Thickness: 0.5 mm. Excavated from Red Cave 66, Brussels. The antler structure is believed to symbolize the emotional convergence between a forest-mammal species and an abandoned navigation machine. Their interaction produced a hybrid sensory network capable of detecting both magnetic storms and affection."
  },

  {
    title: "Pfau",
    image: "images/Pfau.png",
    description:
      "Embossed silver sheet fragment, approx. 13 cm. Thickness: 0.5 mm. Excavated from Red Cave 66, Brussels. The object documents a courtship ritual between two incompatible synthetic organisms who developed ornamental feather structures to communicate desire. Over time, their metallic displays evolved into a shared language system independent from speech."
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
