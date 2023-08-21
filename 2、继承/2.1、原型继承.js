function SuperType() {
  this.color = ['red', 'green'];
}

function SubType() { }

SubType.prototype = new SuperType();

const type1 = new SubType();
type1.color.push('blue');

const type2 = new SubType();
console.log(type2.color); // [ 'red', 'green', 'blue' ]

// 核心思想：子类的原型 成为 父类的实例

// 原型继承存在的问题：
//  1、原型中包含的【引用类型属性】将被所有实例对象共享。
//  2、子类在实例化时，不能给父类构造函数传参