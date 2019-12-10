import App from './app'
import '@babel/polyfill'

var app = new App()

var $container = document.getElementsByTagName('body')[0]
$container.onload = async function() {
  await app.run($container, 'random')
  const getMealButton = document.getElementById('getMealBtn')
  getMealButton.addEventListener('click', async function() {
    await app.run($container, 'random')
  })
}
