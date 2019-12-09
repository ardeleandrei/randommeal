import M from 'mustache'
import template from './index.html'

import './index.css'

class Text {
  formatIngredients(meal) {
    var ingrList = []
    for (let i = 0; i < 21; i++) {
      const ingrLabel = `strIngredient${i}`
      const measureLabel = `strMeasure${i}`
      console.log(meal[ingrLabel])
      if (meal[ingrLabel]) {
        ingrList.push(`${meal[ingrLabel]} - ${meal[measureLabel]}`);

      }
    }
    console.log(ingrList)
    return ingrList
  }

  render(meal) {
    if (!meal) {
      return ''
    }

    const html = M.render(template, {
      mealName: meal.strMeal,
      mealCategory: meal.strCategory,
      mealTags: meal.strTags,
      mealInstructions: meal.strInstructions,
      mealIngredients: this.formatIngredients(meal)
    })
    return html
  }
}

export default Text
