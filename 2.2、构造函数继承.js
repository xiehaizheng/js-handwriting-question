// 核心思想：在子类构造函数中调用父类构造函数
function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'green'];
  this.getName = function () {
    return this.name;
  }
}

function SubType(name) {
  // 继承SuperType并传参
  SuperType.call(this, name)
  // getName();
}

const type1 = new SubType('type1');
type1.colors.push('blue');
console.log(type1.colors); // [ 'red', 'green', 'blue' ]
// console.log(type1.getName());

const type2 = new SubType('type2');
console.log(type2.colors); // [ 'red', 'green' ]


// 构造函数继承的出现：是为了解决原型链继承的引用值共享问题。优点是可以在子类构造函数中向父类构造函数传参。
// 存在问题：1）由于方法必须在构造函数中定义，因此方法不能重用。2）子类也不能访问父类原型上定义的方法。