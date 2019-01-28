// 发送消息
chrome.runtime.sendMessage({ greeting: 'hello' }, function(response) {
  console.log(response.farewell)
})
console.log('1')

// 监听消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('ok')
  console.log(
    sender.tab
      ? 'from a content script:' + sender.tab.url
      : 'from the extension'
  )
  if (request.greeting === 'hello') sendResponse({ farewell: 'goodbye' })
})
