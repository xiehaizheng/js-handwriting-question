// 递归调用--不指定层数
function flat(arr) {
  let res = [];
  arr.forEach((ele) => {
    if (Array.isArray(ele)) {
      res = res.concat(flat(ele))
    } else {
      res.push(ele)
    }
  });
  return res;
}

console.log(flat([1, [2, 3], 4, [5, [6, 7], 8], 9, 10]));

// 递归调用--指定层数
function flat(arr, level = 1) {
  let res = [];
  arr.forEach((ele) => {
    if (Array.isArray(ele) && level >= 1) {
      res = res.concat(flat(ele, level - 1));
    } else {
      res.push(ele);
    }
  });
  return res;
}

console.log(flat([1, [2, 3], 4, [5, [6, 7], 8], 9, 10]));