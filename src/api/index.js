
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

const getBySearch = async (search) => {
  try {
    const response = await fetch(
      `${API_URL}/search.php?s=${search}`
    )
    const data = await response.json()
    return data.meals

  } catch (e) {
    console.log('Error is: ' + e)
  }
}

export {
  getRandom,
  getBySearch
}
