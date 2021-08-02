# Project Overview

## Project Name

Dungeonspiration:
Dungeon and Dragons Dungeon Master Inspiration Page

## Project Description

This website will provide Dungeon Master's a way to select an environment type from a list and return both a terrain map and a list of enemy types commonly found in that environment. Enemies will be displayed on cards that can be clicked to pop out with additional information about the enemy type pulled from the DnD5e API.

## API and Data Sample

http://www.dnd5eapi.co/docs/#intro

```
{
    "ability-scores": "/api/ability-scores",
    "alignments": "/api/alignments",
    "backgrounds": "/api/backgrounds",
    "classes": "/api/classes",
    "conditions": "/api/conditions",
    "damage-types": "/api/damage-types",
    "equipment-categories": "/api/equipment-categories",
    "equipment": "/api/equipment",
    "features": "/api/features",
    "languages": "/api/languages",
    "magic-items": "/api/magic-items",
    "magic-schools": "/api/magic-schools",
    "monsters": "/api/monsters",
    "proficiencies": "/api/proficiencies",
    "races": "/api/races",
    "rules": "/api/rules",
    "rule-sections": "/api/rule-sections",
    "skills": "/api/skills",
    "spells": "/api/spells",
    "subclasses": "/api/subclasses",
    "subraces": "/api/subraces",
    "traits": "/api/traits",
    "weapon-properties": "/api/weapon-properties"
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

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

https://whimsical.com/dnd-inspiration-page-616GnujjEgGTRjtmNRe8WV

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Use DnD5e API to pull monster information
- Use MapBox API to pull map information
- Use a drop down menu to select from a list of environment types
- After the user selects an environment, render a map using MapBox from a random array of locations based on the selected environment type
- After the user selects an environment, return a set of monster "cards" displaying data pulled from the DnD5e API

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Add media queries for several levels of responsive design
- Use local storage to save user favorites
- Add another page to browse user favorites
- Add more options for each environment

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|July 30| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|August 2| Project Approval / Core Application Structure (HTML, CSS, etc.) / Psuedocode | Incomplete
|August 3| Coding and setting up API functionality | Incomplete
|August 4| Initial Clickable Model / CSS Styling | Incomplete
|August 5| MVP / Finish Styling / Post-MVP| Incomplete
|August 6| Presentations | Incomplete

## Priority Matrix

https://whimsical.com/dungeon-inspiration-priority-matrix-6XyjZhz7JZvbvqJmM4uVD7

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Basic HTML/CSS/JS | H | 1.5hrs| 3.5hrs | 3.5hrs |
| Setting up APIs | H | 1.5hrs| 2.5hrs | 2.5hrs |
| Set up Envrionment Arrays | H | 1hrs| 2.5hrs | 2.5hrs |
| Set up Drop Down Menu | H | 1hrs| 2.5hrs | 2.5hrs |
| Create Monster Arrays | H | 3hrs| 2.5hrs | 2.5hrs |
| Add Map Functionality | H | 1.5hrs| 2.5hrs | 2.5hrs |
| Advanced Styling w/ Flexbox | H | 3hrs| 2.5hrs | 2.5hrs |
| Media Queries | H | 3hrs| 2hrs| 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
