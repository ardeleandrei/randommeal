
const API_URL = 'https://www.themealdb.com/api/json/v1/1'

const getRandom = async () => {
  try {
    const response = await fetch(
      API_URL + '/random.php'
    )
    const data = await response.json()
    return data.meals[0]

  } catch (e) {
    console.log('Error is: ' + e)
  }
}

const getBySearch = async (search, index) => {
  console.log(`${API_URL}/search.php?s=${search}`)
  try {
    const response = await fetch(
      `${API_URL}/search.php?s=${search}`
    )
    const data = await response.json()
    var rndm = Math.floor(Math.random() * Math.floor(data.meals.length))
    return data.meals[rndm]

  } catch (e) {
    console.log('Error is: ' + e)
  }
}

export {
  getRandom,
  getBySearch
}
