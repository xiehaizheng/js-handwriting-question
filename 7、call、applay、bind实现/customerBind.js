// bind 方法会创建一个新的函数，在bind被调用时，这个新函数的this会被指定为bind（）的第一个参数，而其余参数将作为新函数的参数，供调用时使用
// 核心思想
// 调用bind的可能不是函数
// bind()除了this外，还可以传入多个参数
// bind()创建的新函数可能传入多个参数
// 新函数可能被当做构造函数调用
// 函数可能有返回值
Function.prototype.customerBind = function (context, ...args) {
  const that = this; // 保存原函数（this）
  if (typeof that !== 'function') {
    throw new TypeError('this is not function');
  }

  return function F(...innerArgs) {
    console.log('args', ...args);
    console.log('innerArgs', ...innerArgs);
    // 判断是否是new构造函数
    // 由于这里是调用的call方法，因此不需要判断context是否为空
    return that.call(this instanceof F ? this : context, ...args, ...innerArgs);
  }
}

function list() {
  return Array.prototype.slice.call(arguments);
}

function addArguments(arg1, arg2) {
  return arg1 + arg2;
}

// var list1 = list(1, 2, 3); // [1, 2, 3]

// var result1 = addArguments(1, 2); // 3

// 创建一个函数，它拥有预设参数列表。
var leadingThirtysevenList = list.customerBind(null, 37);

// 创建一个函数，它拥有预设的第一个参数
var addThirtySeven = addArguments.customerBind(null, 37);

var list2 = leadingThirtysevenList();
// [37]
console.log(list2);

var list3 = leadingThirtysevenList(1, 2, 3);
// [37, 1, 2, 3]
console.log(list3);

// var result2 = addThirtySeven(5);
// // 37 + 5 = 42
// console.log(result2);

// var result3 = addThirtySeven(5, 10);
// // 37 + 5 = 42，第二个参数被忽略
// console.log(result3);
