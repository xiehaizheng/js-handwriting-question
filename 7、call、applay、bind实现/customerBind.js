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
    // 判断是否是new构造函数
    // 由于这里是调用的call方法，因此不需要判断context是否为空
    return that.call(this instanceof F ? this : context, ...args, ...innerArgs);
  }
}


Function.prototype.bind1 = function (context, ...args) {
  const that = this;
  if (typeof that !== 'function') {
    throw new TypeError('this is not function');
  }

  return function F(...innerArgs) {
    return that.call(this instanceof F ? this : context, ...args, ...innerArgs);
  }
}