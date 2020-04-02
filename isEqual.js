// 判断是否是对象或数组
function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}
// 判断全相等
function isEqual(obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2)) {
    // 值类型
    return obj1 === obj2
  }
  if (obj1 === obj2) {
    return true
  }
  // 两个都是对象或数组，且不相等
  // 1.先取出obj1和obj2的keys，比较个数
  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2)
  if (obj1Keys.length !== obj2Keys.length) {
    return false
  }
  // 2.以obj1为基准，和obj2依次递归比较
  for (let key in obj1) {
    const res = isEqual(obj1[key], obj2[key])
    if (!res) {
      return false
    }
  }
  // 3.全相等
  return true
}

const obj1 = {
  name: 'jiyt',
  age: 20,
  address: {
    city: 'nantong',
    area: 'chongchuan'
  },
  fav: ['music', 'book']
}

const obj2 = {
  name: 'jiyt',
  age: 20,
  address: {
    city: 'nantong',
    area: 'chongchuan'
  },
  fav: ['music', 'book']
}

console.log(isEqual(obj1, obj2))