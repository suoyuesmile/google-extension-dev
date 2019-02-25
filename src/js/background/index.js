import '../../style/test.scss'
// import { print } from '../lib/utils'
import 'lodash'
// import { cube } from '../lib/math'

console.log('hello')

// 模块的动态加载
// 需要该模块时才加载
// 模块加载成功才执行
function getComponent() {
  return import(/* webpackChunkName: "lodash" */ 'lodash')
    .then(({ default: _ }) => {
      let el = document.createElement('div')

      el.innerHTML = _.join(['hello'], '')
      // el.className = 'title'

      // el.innerHTML = ['hello', '5 cubed is equal to ' + cube(5)].join('\n\n')
      return el
    })
    .catch(error => 'A error occured while loading this component')
}
getComponent().then(component => {
  document.body.appendChild(component)
})
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
