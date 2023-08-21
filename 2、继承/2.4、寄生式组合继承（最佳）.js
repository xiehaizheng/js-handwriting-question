// 核心思想：通过构造函数继承属性，但使用混合原型继承方法。即，不通过调用父类构造函数还给子类原型赋值，而是取得父类原型的一个副本
function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'green'];
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
}

function SubType(name, age) {
  // 通过构造函数继承属性
  SuperType.call(this, name);
  this.age = age;
}

// 继承方法
SubType.prototype = Object.create(SuperType.prototype);
// 重写原型导致默认 constructor 丢失，手动将constructor 指回SubType
SubType.prototype.constructor = SubType;

// 