// ES6
// 核心思想：通过 extends 来实现类的继承（相当于ES5的原型继承）。通过 super 调用父类的构造方法（相当于ES5的构造函数继承）。
class superType {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(this.name);
  }
}

class subType extends superType {
  constructor(name, age) {
    super(name); // 继承属性
    this.age = age;
  }
}

// 测试
const type1 = new subType('type1', 1);
type1.sayName();

// 虽然类继承使用的是新语法（extends），但背后依旧使用的是原型链。