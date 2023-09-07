// Object.is() 不会转换被比较的两个值的类型，这点和 === 更为类似，他们之间存在的区别
// 1、NaN在 === 是不相等的，而在 Object.is()中是相等的
// 2、+0 -0 在 === 是相等的，在Object.is() 中是不相等的
Object.is = function (x, y) {
  if (x === y) {
    // 当前情况下，只有一种情况是特殊的 -0 === +0
    // 如果x不为0，返回true
    // 如果 x === 0，则需要判断+0和-0，则可以直接使用 1/+0 === Infinity 和 1/-0 === -Infinity来进行判断
    return x !== 0 || 1 / x === 1 / y;
  }
  // 如果 x !== x,x为NaN，y同理
  // 如果x,y同时为NaN，返回true
  return x !== x && y !== y;
}