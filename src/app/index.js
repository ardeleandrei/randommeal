import M from 'mustache'
import * as api from '../api'

// components

import Content from '../content'
import Image from '../content/image'
import Video from '../content/video'
import Header from '../header'
import Button from '../header/button'
import Search from '../header/search'
import Toggle from '../header/toggle'

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
    const playButton =  document.getElementById('playButton')
    const closeButton = document.getElementById('closeBtn')
    const toggleButton = document.getElementById('modeToggle')
    
    toggleButton.addEventListener('click', function(){
        Toggle.toggleMode();
    })
    playButton.addEventListener('click', Video.openModal)
    closeButton.addEventListener('click', Video.closeModal)
    getMealButton.addEventListener('click', async function(){
      Content.updateContent(await api.getRandom())
    })


    searchTerm.onkeydown = async function(e){

      if(e.keyCode === 13){
        Content.updateContent(await api.getBySearch(searchTerm.value))
      }
    }
    searchButton.addEventListener('click', async function(){
      Content.updateContent(await api.getBySearch(searchTerm.value))
    })
    
  }

  async run ($container) {
      const meal = await api.getRandom()
      this.render($container, meal)
      
  }
}

export default App
