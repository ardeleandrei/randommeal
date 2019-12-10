import M from 'mustache'
import template from './index.html'
import './index.css'

class Toggle {
    render(){
        var html = template
        return html
    }

   static toggleMode(){
       const appElem = document.getElementsByClassName('app')[0]
       if(appElem.classList.contains('darkMode')){
        appElem.classList.remove('darkMode')
       }else{
        appElem.classList.add('darkMode')   
       }
       
   }

}

export default Toggle