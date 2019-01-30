chrome.runtime.onInstalled.addListener(function() {
  // 存储
  chrome.storage.sync.set({ color: '#3aa757' }, function() {
    console.log('The color is green.')
  })
  // 声明
  // chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  //   chrome.declarativeContent.onPageChanged.addRules([
  //     {
  //       conditions: [
  //         new chrome.declarativeContent.PageStateMatcher({
  //           pageUrl: { hostEquals: 'developer.chrome.com' }
  //         })
  //       ],
  //       actions: [new chrome.declarativeContent.ShowPageAction()]
  //     }
  //   ])
  // })
  // 接受 contentScript 消息进行跨域请求
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.contentScriptQuery === 'fetchUrl') {
      fetch(request.url)
        .then(response => response.text())
        .then(text => sendResponse(text))
        .then(price => sendResponse(price))
        .catch(error => error)
      return true
    }
  })
})
