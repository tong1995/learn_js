// 防抖
function debounce(fn, delay) {
  let timer = null
  const _this = this
  const args = arguments
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
  let timer = null
  const _this = this
  const args = arguments
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
