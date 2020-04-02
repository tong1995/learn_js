// 防抖
function debounce(fn, delay) {
  var timer = null
  var _this = this
  var args = arguments
  return function() {
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function() {
      fn.apply(_this, args)
      timer = null
    }, delay)
  }
}

// 节流
function throttle(fn, delay) {
  var timer = null
  var _this = this
  var args = arguments
  return function() {
    if(timer) {
      return
    }
    timer = setTimeout(function() {
      fn.apply(_this, args)
      timer = null
    }, delay)
  }
}

var inputBox = document.getElementById('text')
inputBox.addEventListener('input', debounce(function() {
  console.log(inputBox.value)
}, 400))