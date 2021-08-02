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