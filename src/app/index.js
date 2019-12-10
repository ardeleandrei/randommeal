import M from 'mustache'
import * as api from '../api'

// components

import Content from '../content'
import Image from '../content/image'
import Video from '../content/video'
import Header from '../header'
import Button from '../header/button'
import Search from '../header/search'

// css & html
import template from './index.html'
import './index.css'

class App {
  async render ($container, meal) {
    const html = M.render(template, {}, {
      header: new Header().render(),
      content: await new Content().render(meal)
    })
    $container.innerHTML = html

    const getMealButton = document.getElementById('getMealBtn')
    const searchTerm = document.getElementById('searchTerm')
    const searchButton = document.getElementById('searchButton')
    const playButton = document.getElementById('playButton')
    const closeButton = document.getElementById('closeBtn')
    playButton.addEventListener('click', Video.openModal)
    closeButton.addEventListener('click', Video.closeModal)
  }

  async run ($container, type, search) {
    if (type === 'random') {
      const meal = await api.getRandom()
      this.render($container, meal)
    } else {
      const meal = await api.getBySearch(search)
      this.render($container, meal)
    }
  }
}

export default App
