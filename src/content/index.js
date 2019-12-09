import M from 'mustache'
import template from './index.html'
import './index.css'
import * as api from '../api'

import Image from './image'
import Text from './text'

class Content {
  async render () {
    console.log("test");
    const meal = await api.getMeal()
    var html = M.render(template, {},{
      image: new Image().render(meal.strMealThumb),
      text: new Text().render(meal)
    })
    return html
  }
}

export default Content
