import './style/index.css'
import printMe from './print.js'
import 'lodash'

console.log('hello')

function component() {
  let el = document.createElement('div')

  el.innerHTML = _.join(['hello'], '')
  el.className = 'title'
  return el
}

document.body.appendChild(component())
// printMe()

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('hot')
    printMe()
  })
}
