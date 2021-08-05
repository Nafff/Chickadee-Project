jungleMonsters = {
  "tribal-warrior": `<img src="https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg" alt=""></img>`,
  "kobold": `<img src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/379/233/315/636252780450300625.jpeg" alt=""></img>`,
  "constrictor-snake": `<img src="https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg" alt=""></img>`,
  "giant-boar": `<img src="https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg" alt=""></img>`
};
desertMonsters = {
  "bandit": `<img src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/181/259/315/636252761965117015.jpeg" alt=""></img>`,
  "mummy": `<img src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/225/201/315/636252765553048566.jpeg" alt=""></img>`,
  "weretiger-tiger": `<img src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/76/255/315/636252734783831163.jpeg" alt=""></img>`,
  "giant-vulture": `<img src="https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg" alt=""></img>`
};
grasslandMonsters = {
  "blood-hawk": `<img src="https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg" alt=""></img>`,
  "panther": `<img src="https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg" alt=""></img>`,
  "orc": `<img src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/256/315/636252771691385727.jpeg" alt=""></img>`,
  "bugbear": `<img src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/221/255/315/636252765234633232.jpeg" alt=""></img>`
};
forestMonsters = {
  "awakened-shrub": `<img src="https://media-waterdeep.cursecdn.com/attachments/2/659/plant.jpg" alt=""></img>`,
  "giant-wolf-spider": `<img src="https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg" alt=""></img>`,
  "goblin": `<img src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/351/218/315/636252777818652432.jpeg" alt=""></img>`,
  "centaur": `<img src="https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/227/405/315/636252765573266420.jpeg" alt=""></img>`
};

function removeElements(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild);
  }
}

// Get value from drop down menu
document.querySelector("#environmentButton").addEventListener("click", (e) => {
  e.preventDefault();
  monsterDiv = document.createElement("div");
  const selectEnvironment = document.querySelector("#environment").value;
  if (selectEnvironment === "Desert") {
    for (const [monster, image] of Object.entries(desertMonsters)) {
      getMonsters(monster, image);
    };
  } else if (selectEnvironment === "Jungle") {
    if (selectEnvironment === "Jungle") {
      for (const [monster, image] of Object.entries(jungleMonsters)) {
        getMonsters(monster, image);
      };
    }
  } else if (selectEnvironment === "Grassland") {
    if (selectEnvironment === "Grassland") {
      for (const [monster, image] of Object.entries(grasslandMonsters)) {
        getMonsters(monster, image);
      };
    }
  } else if (selectEnvironment === "Forest") {
    if (selectEnvironment === "Forest") {
      for (const [monster, image] of Object.entries(forestMonsters)) {
        getMonsters(monster, image);
      };
    }
  }
});

// Run getmonsters on monster list. Append information div inside.
async function getMonsters(monster, image) {
  removeElements(document.querySelector(".monsters"));
  const url = `https://www.dnd5eapi.co/api/monsters/${monster}`;
  try {
    const data = await axios.get(url);
    console.log(data.data);
    monsterDiv = document.createElement("div");
    monsterDiv.className = "monsterCard";
    monsterDiv.innerText = data.data.name;
    monsterDiv.insertAdjacentHTML('afterbegin', image)
    monsterDiv.addEventListener("click", () => {
      const cardInfo = `
      <h3>${data.data.name}</h3>
      <ul>
        <li>Armor Class: ${data.data.armor_class}</li>
        <li>Hit Dice: ${data.data.hit_dice}</li>
        <li>Hit Points: ${data.data.hit_points}</li>
        <li>Size: ${data.data.size}<li>
        <li>Strength: ${data.data.strength}</li>
        <li>Dexterity: ${data.data.dexterity}</li>
        <li>Constitution: ${data.data.constitution}</li>
        <li>Intelligence: ${data.data.intelligence}</li>
        <li>Wisdom: ${data.data.wisdom}</li>
        <li>Charisma: ${data.data.charisma}</li>
        <li>XP: ${data.data.xp}</li>
      </ul>
      `;
      // document.querySelector('.modalText').innerText = `Armor Class: ${data.data.armor_class}, Hit Points: ${data.data.hit_points}, Size: ${data.data.size}, Type: ${data.data.type}`
      document.querySelector(".modal-content").innerHTML = cardInfo;
      document.querySelector(".modal").style.display = "block";
    });
    // test code from W3schools
    window.onclick = function (event) {
      if (event.target == document.querySelector(".modal")) {
        document.querySelector(".modal").style.display = "none";
      }
    };
    // end test code
    document.querySelector(".monsters").append(monsterDiv);
  } catch (err) {
    console.error(err);
  } 
}