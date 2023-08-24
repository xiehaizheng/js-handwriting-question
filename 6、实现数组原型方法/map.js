Array.prototype.customerMap = function (callback, thisArg) {
  if (this === null) {
    throw new TypeError('this id null or no defind');
  }

  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not function`)
  }

  const O = Object(this);
  const len = O.length >>> 0;
  let k = 0;
  const resArr = [];
  while (k < len) {
    // k in O 是用于检查数组 O 中是否存在索引为 k 的元素。这个检查是为了确保在进行映射操作时，只对实际存在的元素进行操作，而不是对可能未定义的稀疏数组的空位进行操作。
    if (k in O) {
      console.log(k); // 0 2
      resArr[k] = callback.call(thisArg, O[k], k, O)
    }
    k++;
  }
  return resArr;
}

const array = [1, , 3];
console.log(array.customerMap(ele => ele * 2));