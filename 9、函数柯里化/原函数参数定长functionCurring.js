// 柯里化： 将一个【多参数的函数】拆分成 【一系列函数】，每个拆分后的函数都只接受一个参数。
// 对于已经柯里化后的函数来说，当【接收的参数数量】与【原函数的形参数量】相同时，执行原函数；
// 当【接收的参数数量】小于【原函数的形参数量】时，返回一个函数用于接收剩余的参数，直至接收的【参数数量】与【形参数量】一致，执行原函数。

// 方式一、原函数形参定长（此时 fn.length 是个不变的常数）

// 写法1： 不保存参数，递归局部函数
// function curry(fn) {
//   // console.log('fn', fn.length);
//   const judge = (...args) => {
//     // console.log('...args', ...args);
//     if (args.length === fn.length) return fn(...args);
//     return (...arg) => judge(...args, ...arg)
//   }
//   return judge;
// }

// 写法2：保存参数，递归整体函数
function curry(fn) {
  // 保存参数，除去第一个函数参数
  // console.log('arguments', arguments);
  const presentArgs = [].slice.call(arguments, 1);
  // console.log(presentArgs);
  // 返回一个新函数
  return function () {
    // 新函数调用时会继续传参
    // console.log('arguments2', arguments);
    const allArgs = [...presentArgs, ...arguments];
    // console.log('allArgs', allArgs);
    // 递归结束条件
    if (allArgs.length === fn.length) {
      // 如果参数够了，就执行原函数
      return fn(...allArgs);
    } else {
      // 否则继续柯里化
      return curry(fn, ...allArgs);
    }
  }
}

// test
// 测试
function add(a, b, c, d) {
  return a + b + c + d;
}
// console.log(add(1, 2, 3, 4));
let addCurry = curry(add);
// 以下结果都返回 10
console.log('0============');
console.log(addCurry(1)(2)(3)(4));
console.log('1============');
console.log(addCurry(1)(2, 3, 4));
console.log('2============');
console.log(addCurry(1, 2)(3)(4));
console.log('3============');
console.log(addCurry(1, 2)(3, 4));
console.log('4============');
console.log(addCurry(1, 2, 3)(4));
console.log('5============');
console.log(addCurry(1, 2, 3, 4));
