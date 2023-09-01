// 柯里化： 将一个【多参数的函数】拆分成 【一系列函数】，每个拆分后的函数都只接受一个参数。
// 对于已经柯里化后的函数来说，当【接收的参数数量】与【原函数的形参数量】相同时，执行原函数；
// 当【接收的参数数量】小于【原函数的形参数量】时，返回一个函数用于接收剩余的参数，直至接收的【参数数量】与【形参数量】一致，执行原函数。

// 方式二、原函数形参不定长（此时 fn.length 为0）
function curry(fn) {
  // 保存参数，去除第一个函数参数
  const presentArgs = [].slice.call(arguments, 1)
  // 返回一个新函数
  const curried = function () {
    const allArgs = [...presentArgs, ...arguments];
    return curry(fn, ...allArgs);
  }
  // 利用 toString隐式转换的特性，当最后执行函数时，会隐式转换
  curried.toString = function () {
    return fn(...presentArgs);
  }

  return curried;
}

function add(...args) {
  return args.reduce((pre, cur) => pre + cur, 0);
}
console.log(add(1, 2, 3, 4));
console.log('1===========');
let addCurry = curry(add);
console.log(addCurry(1)(2)(3).toString()); // true
console.log('2===========');
console.log(addCurry(1, 2, 3)(4) == 10); // true
console.log('3===========');
console.log(addCurry(2, 6)(1).toString()); // 9
console.log('4===========');
console.log(addCurry(2, 6)(1, 8)); // 打印 curried 函数