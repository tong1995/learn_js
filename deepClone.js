// 深拷贝
function deepClone(obj = {}) {
  if(typeof obj !== 'object' || obj == null) {
    // obj是null，或者不是对象和数组，直接返回
    return obj
  }
  // 初始化返回结果
  let res
  if (obj instanceof Array) {
    res = []
  } else {
    res = {}
  }
  for(let key in obj) {
    // 保证 key 不是原型的属性
    if(obj.hasOwnProperty(key)) {
      // 递归调用
      res[key] = deepClone(obj[key])
    }
  }
  // 返回结果
  return res
}

let obj1 = {
  a: 1,
  b: 2,
  c: {
    d: 3
  }
}
let obj2 = deepClone(obj1)
obj2.a = 2
console.log(obj1)
console.log(obj2)