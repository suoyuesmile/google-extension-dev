// // 发送消息
// chrome.runtime.sendMessage({ greeting: 'hello' }, function(response) {
//   console.log(response.farewell)
// })
// // console.log('1')

// // 发送消息进行跨越请求

// // 监听消息
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   console.log('ok')
//   console.log(
//     sender.tab
//       ? 'from a content script:' + sender.tab.url
//       : 'from the extension'
//   )
//   if (request.greeting === 'hello') sendResponse({ farewell: 'goodbye' })
// })

// // 注入脚本
// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript({
//     code: 'document.body.style.fontSize="100px"'
//   })
// })
