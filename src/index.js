import App from './app'
import '@babel/polyfill'
import Content from './content'

var app = new App()

var $container = document.getElementsByTagName('body')[0]


  app.run($container)


