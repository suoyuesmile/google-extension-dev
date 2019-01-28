let changeColor = document.getElementById('changeColor')

// 改变颜色
changeColor.onclick = function(element) {
  let color = element.target.value
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.executeScript(tabs[0].id, {
      code: 'document.body.style.backgroundColor = "' + color + '";'
    })
  })
}

// 设置颜色
chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color
  changeColor.setAttribute('value', data.color)
})

// 发送消息
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { greeting: 'hello' }, function(
    response
  ) {
    console.log(response.farewell)
  })
})
