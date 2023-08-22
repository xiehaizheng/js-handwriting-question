// 不指定层数
function flat(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator.concat(Array.isArray(currentValue) ? flat(currentValue) : currentValue), [])
}

console.log(flat([1, [2, 3], 4, [5, [6, 7], 8], 9, 10]));

// 指定层数
function flat(arr, level = 1) {
  return arr.reduce(
    (pre, cur) => {
      if (Array.isArray(cur) && level >= 1) {
        return pre.concat(flat(cur, level - 1));
      } else {
        pre.push(cur);
        return pre;
      }
    }, []
  )
}

console.log(flat([1, [2, 3], 4, [5, [6, 7], 8], 9, 10]));
