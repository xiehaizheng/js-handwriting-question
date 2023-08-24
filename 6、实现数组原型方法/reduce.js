Array.prototype.customerreduce = function (callback, initValue) {
  // reduce() 不接受 thisArg 参数
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not function`);
  }

  const O = Object(this);
  const len = O.length >>> 0;

  let k = 0;
  let accumulator = initValue;

  // 如果第二个参数为 undefined 的情况下，则数组的第一个有效值（非empty）作为累加器的初始值
  if (accumulator === undefined) {
    while (k < len && !(k in O)) {
      k++;
    }

    // 如果超出数组界限，还没有找到累加器的初始值，则 throw TypeError
    if (k >= len) {
      throw new TypeError('Reduce of empty array with no initial value');
    }

    accumulator = O[k++];
  }

  while (k < len) {
    if (k < len) {
      accumulator = callback(accumulator, O[k], k, O);
    }
    k++;
  }
  return accumulator;
}

const arr = [1, 2, 3, 4];
console.log(arr.customerreduce((pre, cur) => pre + cur, 100));