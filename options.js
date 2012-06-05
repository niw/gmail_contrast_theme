!function() {
  "use strict"

  document.addEventListener("DOMContentLoaded", function() {
    var options = JSON.parse(localStorage["options"] || "{}")
    var onClick = function(event) {
      var elem = event.target
      options[elem.id] = elem.checked
      localStorage["options"] = JSON.stringify(options)
    }
    var inputs = document.getElementsByTagName("input"), elem
    for(var i = 0, l = inputs.length; i < l; i++) {
      elem = inputs[i]
      if(elem.type === "checkbox") {
        elem.checked = options[elem.id]
        elem.addEventListener("click", onClick, false)
      }
    }
  }, false)
}()