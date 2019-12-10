import M from 'mustache'
import template from './index.html'

import './index.css'

class Video {
  render(strYoutube) {
    if (!strYoutube) {
      return ''
    }
    const html = M.render(template, {
      videoSource: strYoutube.replace('watch?v=', 'embed/')
    })
    return html
  }

  static openModal() {
    const modal = document.getElementById('modalVideo')
    modal.style.visibility = 'visible'
    modal.style.opacity = '1'
  }

  static closeModal() {
    const modal = document.getElementById('modalVideo')
    const video = modal.getElementsByTagName('iframe')[0]
    modal.style.visibility = 'hidden'
    modal.style.opacity = '0'
  }
}

export default Video
