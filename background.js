!function() {
  "use strict"

  var setup = function(tab) {
    var options = JSON.parse(localStorage["options"] || "{}")
    var csses = [
      "new_look.css"
    ]
    for(var i in options) {
      if(options[i]) {
        csses.push(i + ".css")
      }
    }
    for(var i = 0, l = csses.length; i < l; i++) {
      chrome.tabs.insertCSS(tab.id, {
        file: csses[i],
        allFrames: true
      })
    }
  }

  chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    var tab = sender.tab
    if(tab && request.injected) {
      setup(tab)
    }
  })
}()
