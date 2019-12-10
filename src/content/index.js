import M from 'mustache'
import template from './index.html'
import './index.css'


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

  static updateContent(meal){
      const cont = document.getElementsByClassName('content')[0]
      var newHtml = M.render(template,{},{
        image: new Image().render(meal.strMealThumb),
      text: new Text().render(meal),
      video: new Video().render(meal.strYoutube)
      })
      cont.innerHTML = newHtml;
      const playButton = document.getElementById('playButton')
      const closeButton = document.getElementById('closeBtn')
      playButton.addEventListener('click', Video.openModal)
      closeButton.addEventListener('click', Video.closeModal)
  }
}

export default Content
