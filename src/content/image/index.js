import M from 'mustache'
import template from './index.html'
import './index.css'

class Image {
  render(image) {
    if (!image) {
      return ''
    }
    var html = M.render(template, {
      imgSrc: image
    })
    return html
  }
}

export default Image
