// ES6的扩展运算符 只扁平化一层
function flat(arr) {
  return [].concat(...arr);
}

// 全部扁平化：遍历数组，若arr中含有数组则使用一次扩展运算符，直到没有为止
function flat(arr) {
  while (arr.some(item => Array.isArray(item))) {
    return [].concat(...arr)
  }
}


console.log(flat([1, [2, 3], 4, [5, [6, 7], 8], 9, 10]));
