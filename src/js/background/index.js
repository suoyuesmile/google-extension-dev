import '../../style/test.scss'
import { print } from '../lib/utils'
import 'lodash'

console.log('hello')

function component() {
  let el = document.createElement('div')

  el.innerHTML = _.join(['hello'], '')
  el.className = 'title'
  return el
}

document.body.appendChild(component())
print()

// if (module.hot) {
//   module.hot.accept('./print.js', function() {
//     console.log('hot')
//     print()
//   })
// }

// chrome.runtime.onInstalled.addListener(function() {
//   // 存储
//   chrome.storage.sync.set({ color: '#3aa757' }, function() {
//     console.log('The color is green.')
//   })
//   // 声明
//   // chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//   //   chrome.declarativeContent.onPageChanged.addRules([
//   //     {
//   //       conditions: [
//   //         new chrome.declarativeContent.PageStateMatcher({
//   //           pageUrl: { hostEquals: 'developer.chrome.com' }
//   //         })
//   //       ],
//   //       actions: [new chrome.declarativeContent.ShowPageAction()]
//   //     }
//   //   ])
//   // })
//   // 接受 contentScript 消息进行跨域请求
//   chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//     if (request.contentScriptQuery === 'fetchUrl') {
//       fetch(request.url)
//         .then(response => response.text())
//         .then(text => sendResponse(text))
//         .then(price => sendResponse(price))
//         .catch(error => error)
//       return true
//     }
//   })
// })
