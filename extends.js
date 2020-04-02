// 继承，在JavaScript高级程序设计中写了6种继承
// 1.原型链：利用原型让一个引用类型继承另一个引用类型的属性和方法。
// 2.借用构造函数（有时候也叫做伪造对象或经典继承）：在子类型构造函数的内部调用超类型构造函数
// 3.组合继承（有时候也叫做伪经典继承）：使用原型链实现对原型属性和方法的继承，而通过借用构造函数来实现对实例属性的继承
// 4.原型式继承：是借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型。ECMAScript 5 通过新增Object.create()方法规范化了原型式继承
// 5.寄生式继承：创建一个仅用于封装继承过程的函数，该函数在内部以某种方式来增强对象，最后再像真地是它做了所有工作一样返回对象
// 6.寄生组合式继承：通过借用构造函数来继承属性，通过原型链的混成形式来继承方法
function SuperType(name) {
  this.name = name
  this.property = true
}

// 1.原型链
function SubType1() {
  this.subProperty = false
}
SubType1.prototype = new SuperType()
console.log(SubType1.prototype.__proto__=== SuperType.prototype)

// 2.借用构造函数
function SubType2() {
  SuperType.call(this, "jiyt")
}

// 3.组合继承
function SubType3() {
  SuperType.call(this, "jiyt")
}
SubType3.prototype = new SuperType()
SubType3.prototype.constructor = SubType3

// 4.原型式继承
function object(o){
  function F(){}
  F.prototype = o
  return new F()
}
let superObj = new SuperType('jiyt')
// 在传入一个参数的情况下，Object.create()与object()方法的行为相同
let sub1 = object(superObj)
let sub2 = Object.create(superObj)

// 5.寄生式继承
function SubType5(obj) {
  let clone = object(obj)
  clone.hobby = "eat"
  return clone
}

// 6.寄生组合式继承
function inheritPrototype(subType, superType){
  let prototype = object(superType.prototype) //创建对象
  prototype.constructor = subType //增强对象
  subType.prototype = prototype //指定对象
}

function SubType6(name, age) {
  SuperType.call(this, name)
  this.age = age
}
inheritPrototype(SubType6, SuperType)