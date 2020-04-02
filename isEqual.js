// 全相等
function isEqual(obj1, obj2) {
  if(typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return obj1 === obj2
  }
  let keys1 = Object.keys(obj1)
  let keys2 = Object.keys(obj2)
  if(keys1.length !== keys2.length) {
    return false
  }
  for(let key in obj1) {
    if(!isEqual(obj1[key], obj2[key])) {
      return false
    }
  }
  return true
}

const obj1 = {
  a: 1,
  b: {
    c: 2,
    d: 3
  }
}
const obj2 = {
  a: 1,
  b: {
    c: 2,
    d: 3,
    f: 4
  }
}
console.log(isEqual(obj1, obj2))