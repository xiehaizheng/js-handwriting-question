function flat(arr) {
  // console.log(arr.toString()); // 1,2,3,4,5,6,7,8,9,10
  // return arr.toString().split(',').map(item => Number(item));
  return arr.join().split(',').map(item => Number(item));
}

console.log(flat([1, [2, 3], 4, [5, [6, 7], 8], 9, 10]));

// 调用数组的 toString()/join() 方法（它会自动扁平化处理），将数组变为字符串然后再用 split 
// 分割还原为数组。由于 split 分割后形成的数组的每一项值为字符串，所以需要用一个map方法遍历数组
// 将其每一项转换为数值型。


// 无法设置层数