// 1.检测数组
// const arr = [1, 2, 3]
// console.log(arr instanceof Array)
// console.log(Array.isArray(arr))

// 2.转换方法
// Array.prototype.toString  返回由数组中每个值的字符串形式拼接而成的一个以逗号分隔的字符串
// Array.prototype.toLocaleString  调用的是每一项的toLocaleString()方法
// Array.prototype.join  接收一个参数，即用作分隔符的字符串，然后返回包含所有数组项的字符串

// 3.栈方法
// Array.prototype.push  可以接收任意数量的参数，把它们逐个添加到数组末尾，并返回修改后数组的长度
// Array.prototype.pop  从数组末尾移除最后一项，减少数组的length值，然后返回移除的项


// 4.队列方法
// Array.prototype.shift  移除数组中的第一个项并返回该项，同时将数组长度减1
// Array.prototype.unshift  在数组前端添加任意个项并返回新数组的长度

// 5.重排序方法
// Array.prototype.reverse  原数组和返回值都是逆序
// Array.prototype.sort  调用每个数组项的toString()转型方法，然后比较得到的字符串。即使数组中的每一项都是数值，sort()方法比较的也是字符串
// 因此sort()方法可以接收一个比较函数作为参数，以便我们指定哪个值位于哪个值的前面

// 6.操作方法
// Array.prototype.concat  不改变原数组。这个方法会先创建当前数组一个副本，然后将接收到的参数添加到这个副本的末尾，最后返回新构建的数组
// Array.prototype.slice  不改变原数组。基于当前数组中的一或多个项创建一个新数组，可以接受一或两个参数，即要返回项的起始和结束位置，不包括结束位置的项，参数可以是负数
// Array.prototype.splice  改变原数组。返回一个数组，该数组中包含从原始数组中删除的项,如果没有删除任何项，则返回一个空数组

// 7.位置方法
// Array.prototype.indexOf   接收两个参数：要查找的项和（可选的）表示查找起点位置的索引。从数组的开头（位置0）开始向后查找
// Array.prototype.lastIndexOf   从数组的末尾开始向前查找，没找到的情况下返回-1。使用全等操作符比较

// 8.迭代方法  以下方法都不会修改数组中的包含的值。
// Array.prototype.every  对数组中的每一项运行给定函数，如果该函数对每一项都返回true，则返回true
// Array.prototype.filter  对数组中的每一项运行给定函数，返回该函数会返回true 的项组成的数组
// Array.prototype.forEach  对数组中的每一项运行给定函数。这个方法没有返回值
// Array.prototype.map  对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组
// Array.prototype.some  对数组中的每一项运行给定函数，如果该函数对任一项返回true，则返回true

// 9.归并方法
// Array.prototype.reduce  会迭代数组的所有项，然后构建一个最终返回的值。
// Array.prototype.reduceRight  接收两个参数：一个在每一项上调用的函数和（可选的）作为归并基础的初始值。函数返回的任何值都会作为第一个参数自动传给下一项。第一次迭代发生在数组的第二项上，因此第一个参数是数组的第一项，第二个参数就是数组的第二项。


// 数组去重
// (1)使用reduce
// let arr = [1, 2, 3, 4, 4, 1]
// let newArr = arr.reduce((pre, cur) => {
//   if(pre.includes(cur)) {
//     return pre
//   } else {
//     return pre.concat(cur)
//   }
// }, [])
// console.log(newArr)
// (2)使用set
// const res = [...new Set(arr)]
// console.log(res)

// 扁平化数组
// (1)使用reduce+递归
// let arr = [[0, 1], [2, 3], [4, [5, 6, 7]]]
// const flatten1 = (arr) => {
//   return arr.reduce((pre, cur) => pre.concat(Array.isArray(cur) ? flatten(cur) : cur), [])
// }

// (2)使用some
// const flatten2 = (arr) => {
//   while(arr.some(item => Array.isArray(item))) {
//     arr = [].concat(...arr)
//   }
//   return arr
// }

// (3)使用toString,数字会变成字符串
// const flatten3 = (arr) => {
//   return arr.toString().split(',')
// }

// (4)使用ES10的Array.flat(n)
// const flatten4 = (arr) => {
//   return arr.flat(Infinity)
// }

