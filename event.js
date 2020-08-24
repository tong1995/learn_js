// 事件委托
var ul = document.getElementById('root')
ul.addEventListener('click', function(event) {
  switch(event.target.id) {
    case "goSomewhere":
      console.log('goSomewhere')
      break;
    case "doSomething":
      console.log('doSomething')
      break;
    case "sayHi":
      console.log('hi')
      break;
  }
}, false)
