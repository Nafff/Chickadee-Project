async function getMonsters(monster) {
  const url = `https://www.dnd5eapi.co/api/monsters/${monster}`
  try {
    const data = await axios.get(url)
    console.log(data)
    return data
  } catch (err) {
    console.error(err)
  }
}

getMonsters('acolyte')

jungleMonsters = ['tribal-warrior', 'kobold', 'constrictor-snake']
desertMonsters = ['bandit', 'mummy', 'weretiger']
grasslandMonsters = ['blood-hawk', 'panther', 'orc']
forestMonsters = ['awakened-shrub', 'giant-wolf-spider', 'goblin']

jungleMonsters.forEach(monster => {
  getMonsters(monster)
});

function chooseEnvironment() {
  document.querySelector('#environmentButton').addEventListener('click', (e) => {
    e.preventDefault()
    const selectEnvironment = document.querySelector('#environment').value
    // const envrionmentType = document.querySelector('#environment').value.textContent
    document.querySelector('#test').textContent = selectEnvironment
    console.log(selectEnvironment)
  })
}

chooseEnvironment()