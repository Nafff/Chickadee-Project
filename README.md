# Project Overview

https://nafff.github.io/Dungeonspiration/

## Project Name

Dungeonspiration:
Dungeon and Dragons Dungeon Master Inspiration Page

## Project Description

This website will provide Dungeon Master's a way to select an environment type from a list and return both a terrain map and a list of enemy types commonly found in that environment. Enemies will be displayed on cards that can be clicked to pop out with additional information about the enemy type pulled from the DnD5e API.

## API and Data Sample

https://www.dnd5eapi.co/api/monsters/aboleth

```
{
{
    "index": "aboleth",
    "name": "Aboleth",
    "size": "Large",
    "type": "aberration",
    "subtype": null,
    "alignment": "lawful evil",
    "armor_class": 17,
    "hit_points": 135,
    "hit_dice": "18d10",
    "speed": {
        "walk": "10 ft.",
        "swim": "40 ft."
    },
    "strength": 21,
    "dexterity": 9,
    "constitution": 15,
    "intelligence": 18,
    "wisdom": 15,
    "charisma": 18,
}
```

https://docs.mapbox.com/mapbox-gl-js/api/

```
/* Mapbox GL JS is Copyright © 2020 Mapbox and subject to the Mapbox Terms of Service ((https://www.mapbox.com/legal/tos/). */
(function (global, factory) {
typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
typeof define === 'function' && define.amd ? define(factory) :
(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.mapboxgl = factory());
```

## Wireframes

![alt text](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1627910858/Screen_Shot_2021-08-02_at_9.22.05_AM_cawpiw.png)

https://whimsical.com/dnd-inspiration-page-616GnujjEgGTRjtmNRe8WV

#### MVP 

- Use DnD5e API to pull monster information
- Use a drop down menu to select from a list of environment types
- After the user selects an environment, render a map using MapBox from a random array of locations based on the selected environment type
- After the user selects an environment, return a set of monster "cards" displaying data pulled from the DnD5e API
- Add media queries for several levels of responsive design

#### PostMVP  

- Use MapBox API to pull satelite map information
- Use local storage to save user favorites
- Add another page to browse user favorites
- Add more options for each environment

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|July 30| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 2| Project Approval / Core Application Structure (HTML, CSS, etc.) / Psuedocode | Incomplete
|August 3| Coding and setting up API functionality | Incomplete
|August 4| Initial Clickable Model / CSS Styling | Incomplete
|August 5| MVP / Finish Styling / Post-MVP| Incomplete
|August 6| Presentations | Incomplete

## Priority Matrix

![alt text](https://res.cloudinary.com/dy6xpqkkj/image/upload/v1627910865/Screen_Shot_2021-08-02_at_9.20.54_AM_hibd2j.png)

https://whimsical.com/dungeon-inspiration-priority-matrix-6XyjZhz7JZvbvqJmM4uVD7

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Basic HTML/CSS/JS | H | 1.5hrs| 1hrs | 1hrs |
| Setting up APIs | H | 1.5hrs| 2hrs | 2hrs |
| Set up Envrionment Arrays | H | 1hrs| 1hrs | 1hrs |
| Set up Drop Down Menu | H | 1hrs| 1hrs | 1hrs |
| Create Monster Arrays | H | 3hrs| 2hrs | 2hrs |
| Add Map Functionality | H | 2hrs| 3hrs | 3hrs |
| Create Monster Cards | H | 5hrs| 7hrs | 7hrs |
| Advanced Styling | H | 6hrs| 9hrs | 9hrs |
| FlexBox | H | 6hrs| 6hrs | 6hrs |
| Media Queries | H | 4hrs| 5hrs| 5hrs |
| Total | H | 36hrs| 42hrs | 5hrs |

## Code Snippet

getMonsters() accesses the DnD5e API, creates all of my monster card elements in the DOM, appends the appropraite information and images to the cards, and adds modal window functionality to the card.

```
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
      document.querySelector(".modal-content").innerHTML = cardInfo;
      document.querySelector(".modal").style.display = "block";
    });
    window.onclick = function (event) {
      if (event.target == document.querySelector(".modal")) {
        document.querySelector(".modal").style.display = "none";
      }
    };
    document.querySelector(".monsters").append(monsterDiv);
  } catch (err) {
    console.error(err);
  } 
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
