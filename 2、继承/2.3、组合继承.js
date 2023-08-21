// 核心思想：综合原型链 和 构造函数，即，使用原型链继承原型上的方法，而通过构造函数继承实例属性
function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'green'];
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
}

function SubType(name, age) {
  // 继承属性--构造函数继承属性
  SuperType.call(this, name);
  // 实例属性
  this.age = age;
  // 子类可访问父类原型上定义的方法
  this.sayName();
}

// 继承方法
SubType.prototype = new SuperType();

// test
const type1 = new SubType('type1', 1)
type1.sayName();
type1.colors.push('black');
console.log(type1.colors);

const type2 = new SubType('type2', 2)
type2.sayName();
type2.colors.push('white');
console.log(type2.colors);


// 组合继承存在的问题：父类构造函数 始终会被 调用两次：
// 一次是在创建子类原型时 new SuperType()调用;
// 另一次是在子类构造函数中 SuperType.call()调用


