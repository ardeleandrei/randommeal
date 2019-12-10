import M from 'mustache'
import template from './index.html'
import './index.css'
import * as api from '../api'

import Image from './image'
import Text from './text'
import Video from './video'

class Content {
  async render (meal) {
    var html = M.render(template, {}, {
      image: new Image().render(meal.strMealThumb),
      text: new Text().render(meal),
      video: new Video().render(meal.strYoutube)
    })
    return html
  }

  async setContent() {
    const meal = await api.getRandom()
    return Content.render(meal)
  }
}

export default Content
