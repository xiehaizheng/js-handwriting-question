// 描述：使用一个【指定的this值（默认为window）】和 【一个或多个参数】 来调用一个函数
// 语法：function.call(thisArg, arg1, arg2, ...)

// 核心思想：
// 调用call的可能不是函数
// this可能传入null
// 传入不固定个数的参数
// 给对象绑定函数并调用
// 删除绑定的函数
// 函数可能有返回值
Function.prototype.customerCall = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('this is not function');
  }

  context = context || window; // 如果传入的是null，则指向window
  const fn = Symbol('fn'); // 创造唯一的 key 值，作为构造的 context 内部方法名
  context[fn] = this; // 为 context 绑定原函数（this）
  const res = context[fn](...args); // 调用原函数并传参，保存返回值用于call返回
  delete context[fn]; // 删除对象中的函数，不能修改对象
  return res;
}



function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.customerCall(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name); // Expected output: "cheese"


