jungleMonsters = ["tribal-warrior", "kobold", "constrictor-snake"];
desertMonsters = ["bandit", "mummy", "weretiger-tiger"];
grasslandMonsters = ["blood-hawk", "panther", "orc"];
forestMonsters = ["awakened-shrub", "giant-wolf-spider", "goblin"];

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
  removeElements(document.querySelector("#monsters"));
  const url = `https://www.dnd5eapi.co/api/monsters/${monster}`;
  try {
    const data = await axios.get(url);
    monsterDiv = document.createElement("div");
    monsterDiv.className = "monsterCard";
    monsterDiv.innerText = data.data.name;
    monsterDiv.addEventListener("click", () => {
      console.log("clicked");
      document.querySelector(".modal").style.display = "block";
    });
    // test code from W3schools
    window.onclick = function (event) {
      if (event.target == document.querySelector(".modal")) {
        document.querySelector(".modal").style.display = "none";
      }
    };
    // end test code
    document.querySelector("#monsters").append(monsterDiv);
  } catch (err) {
    console.error(err);
  }
}
