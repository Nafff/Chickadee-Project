jungleMonsters = ["tribal-warrior", "kobold", "constrictor-snake", "giant-boar"];
desertMonsters = ["bandit", "mummy", "weretiger-tiger", "giant-vulture"];
grasslandMonsters = ["blood-hawk", "panther", "orc", "bugbear"];
forestMonsters = ["awakened-shrub", "giant-wolf-spider", "goblin", "centaur"];

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
    desertMonsters.forEach((monster) => {
      getMonsters(monster);
    });
  } else if (selectEnvironment === "Jungle") {
    jungleMonsters.forEach((monster) => {
      getMonsters(monster);
    });
  } else if (selectEnvironment === "Grassland") {
    grasslandMonsters.forEach((monster) => {
      getMonsters(monster);
    });
  } else if (selectEnvironment === "Forest") {
    forestMonsters.forEach((monster) => {
      getMonsters(monster);
    });
  }
});

// Run getmonsters on monster list. Append information div inside.
async function getMonsters(monster) {
  removeElements(document.querySelector(".monsters"));
  const url = `https://www.dnd5eapi.co/api/monsters/${monster}`;
  try {
    const data = await axios.get(url);
    console.log(data.data);
    monsterDiv = document.createElement("div");
    monsterDiv.className = "monsterCard";
    monsterDiv.innerText = data.data.name;
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
