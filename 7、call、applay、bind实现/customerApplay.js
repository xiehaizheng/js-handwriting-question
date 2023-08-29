// 与 call类似，唯一的区别就是 call 是传入不固定个数的参数，而 apply 是传入一个参数数组或类数组。
Function.prototype.customerApply = function (context, arr) {
  if (typeof this !== 'function') {
    throw new TypeError('this is not function');
  }

  context = context || window; // 如果传入的是null，则指向window
  const fn = Symbol('fn'); // 创建唯一key值，作为构造的context内部方法名
  context[fn] = this; // 为context绑定原函数this
  let res;
  if (!arr) { // 判断是否传入的数组是否为空
    res = context[fn]();
  } else {
    res = context[fn](...arr); // 调用原函数并传参, 保存返回值用于call返回
  }

  delete context[fn]; // // 删除对象中的函数, 不能修改对象
  return res;
}

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.customerApply(null, numbers);

console.log(max);