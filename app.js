jungleMonsters = {
  "tribal-warrior": "https://media-waterdeep.cursecdn.com/attachments/2/656/humanoid.jpg",
  "kobold": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/379/233/315/636252780450300625.jpeg",
  "constrictor-snake": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
  "giant-boar": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
  "tyrannosaurus-rex": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/16/594/264/315/636376369004412963.jpeg",
  "lizardfolk" : "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/233/346/315/636252766314905259.jpeg"
};
desertMonsters = {
  "bandit": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/181/259/315/636252761965117015.jpeg",
  "mummy": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/225/201/315/636252765553048566.jpeg",
  "weretiger-tiger": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/76/255/315/636252734783831163.jpeg",
  "giant-vulture": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
  "dust-mephit": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/313/268/315/636252772213922157.jpeg",
  "hyena" : "https://media-waterdeep.cursecdn.com/avatars/thumbnails/9/902/408/315/636334288674955736.jpeg"
};
grasslandMonsters = {
  "blood-hawk": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
  "panther": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
  "orc": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/301/256/315/636252771691385727.jpeg",
  "bugbear": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/221/255/315/636252765234633232.jpeg",
  "griffon": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/373/288/315/636252779693862725.jpeg",
  "manticore": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/187/402/315/636252762623266809.jpeg"
};
forestMonsters = {
  "awakened-shrub": "https://media-waterdeep.cursecdn.com/attachments/2/659/plant.jpg",
  "giant-wolf-spider": "https://media-waterdeep.cursecdn.com/attachments/2/648/beast.jpg",
  "goblin": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/351/218/315/636252777818652432.jpeg",
  "centaur": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/227/405/315/636252765573266420.jpeg",
  "dryad": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/307/252/315/636252771953950206.jpeg",
  "treant": "https://media-waterdeep.cursecdn.com/avatars/thumbnails/0/97/237/315/636252740537990664.jpeg"
};

desertMaps = ['11.288452', '23.806078']
jungleMap = ['-3.465305', '-62.215881']
grasslandMap = ['-27.529991', '150.582068']
forestMap = ['37.865101', '-119.538330']

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
      createMap(desertMaps[0], desertMaps[1])
    };
  } else if (selectEnvironment === "Jungle") {
    if (selectEnvironment === "Jungle") {
      for (const [monster, image] of Object.entries(jungleMonsters)) {
        getMonsters(monster, image);
        createMap(jungleMap[0], jungleMap[1])
      };
    }
  } else if (selectEnvironment === "Grassland") {
    if (selectEnvironment === "Grassland") {
      for (const [monster, image] of Object.entries(grasslandMonsters)) {
        getMonsters(monster, image);
        createMap(grasslandMap[0], grasslandMap[1])
      };
    }
  } else if (selectEnvironment === "Forest") {
    if (selectEnvironment === "Forest") {
      for (const [monster, image] of Object.entries(forestMonsters)) {
        getMonsters(monster, image);
        createMap(forestMap[0], forestMap[1])
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
    monsterTextDiv = document.createElement("div")
    monsterTextDiv.className = "monsterTextDiv"
    monsterImageDiv = document.createElement("div")
    monsterImageDiv.className = "monsterImageDiv"
    // testing inner text span changes
    // monsterDiv.innerHTML = `<span class="nameSpan">${data.data.name}</span>`;
    monsterTextDiv.innerHTML = `<p class="monsterP">${data.data.name}</p>`
    monsterImageDiv.innerHTML = `<img class="monsterCardImg" src=${image} alt=${data.data.name} image"></img>`
    monsterDiv.appendChild(monsterImageDiv)
    monsterDiv.appendChild(monsterTextDiv)
    monsterDiv.addEventListener("click", () => {
      const cardInfo = `
      <h3>${data.data.name}</h3>
      <ul id='modalList'>
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

// Map Test Code
function createMap(lat, long) {
  mapboxgl.accessToken = 'pk.eyJ1IjoiY296aWVyIiwiYSI6ImNrcnRyZXVyajE3YTYycG85N3g1dnZ0MTUifQ.w_Rsxac2Up_pymg5wQ1TnQ';
    var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y', // style URL
    pitch: 75,
    bearing: 80,
    center: [long, lat], // starting position [lng, lat]
    zoom: 14 // starting zoom
    
    });
  map.on('load', function () {
    map.addSource('mapbox-dem', {
    'type': 'raster-dem',
    'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
    'tileSize': 512,
    'maxzoom': 14
    });
    // add the DEM source as a terrain layer with exaggerated height
    map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
      
    // add a sky layer that will show when the map is highly pitched
    map.addLayer({
    'id': 'sky',
    'type': 'sky',
    'paint': {
    'sky-type': 'atmosphere',
    'sky-atmosphere-sun': [0.0, 0.0],
    'sky-atmosphere-sun-intensity': 15
    }
    });
    });
}