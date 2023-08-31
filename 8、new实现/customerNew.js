// 描述：new 运算符用来创建【用户自定义的对象类型的实例】或者【具有构造函数的内置对象的实例】
// 核心思想：
//    new 会产生一个新对象
//    新对象要能够访问到构造函数的属性，所以需要重新指定他的原型
//    构造函数可能会显示返回对象与基本类型的情况（以及null）

// 步骤：使用new命令时，它后面的函数依次执行下面的步骤
//  a.创建一个空对象，作为将要返回的对象实例；
//  b.将这个对象的隐式原型（__proto__）,指向构造函数的prototype属性
//  c.让函数内部this关键字指向这个对象，开始执行构造函数内部的代码（为这个新对象添加属性）
//  d.判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。
// case 1:写法一
function customerNew1() {
  // 将 arguments 对象转化为数组
  const args = [].slice.call(arguments);
  console.log(args);
  // 取出构造函数
  const constructor = args.shift();
  // 创建空对象，继承构造函数的 prototype 属性
  const obj = {};
  obj.__proto__ = constructor.prototype;
  // 执行构造函数，并将this绑定到新创建的对象上
  const res = constructor.call(obj, ...args);
  // const res = constructor.apply(obj, args);
  // 判断构造函数返回的结果，如果结果是引用类型，直接返回，否则返回 obj 对象
  return (typeof res === 'object' && res !== null) ? res : obj;
}



// case 2  写法二：constructor：构造函数， ...args：构造函数参数
function customerNew2(constructor, ...args) {
  // 生成一个空对象，继承构造函数的prototype属性
  const obj = Object.create(constructor.prototype);

  // 执行构造函数并将 this 绑定到新创建的对象上
  const res = constructor.call(obj, ...args);
  // 判断构造函数返回的结果，如果结果是引用类型，直接返回，否则返回 obj 对象
  return (typeof res === 'object' && res !== null) ? res : obj;
}