// 语法：arr.forEach(callback(currentValue [, index [, array]])[, thisArg])
// 参数：

// callback：为数组中每个元素执行的函数，该函数接受1-3个参数

// currentValue: 数组中正在处理的当前元素
// index(可选): 数组中正在处理的当前元素的索引
// array(可选): forEach() 方法正在操作的数组
// thisArg(可选): 当执行回调函数 callback 时，用作 this 的值。


// 返回值：undefined

Array.prototype.forEachCustomer = function (callback, thisArg) {
  if (this === null) {
    throw new TypeError('this is null or no defined');
  }

  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`);
  }

  // 创建一个新的Object对象，该对象将会包裹（wrapper）传入的参数this（当前数组）
  const O = Object(this);

  // O.length >>> 0 无符号右移0位
  // 意义：为了保证转换后的值为正整数
  // 其实底层做了2层转换，第一是非number转换成number类型，第二是将number转换成 Unit32类型 
  const len = O.length >>> 0;
  let k = 0;
  while (k < len) {
    // k in O 是用于检查数组 O 中是否存在索引为 k 的元素。这个检查是为了确保在进行映射操作时，只对实际存在的元素进行操作，而不是对可能未定义的稀疏数组的空位进行操作。
    if (k in O) {
      callback.call(thisArg, O[k], k, O)
    }
    k++;
  }
}

const array = [1, 2, 3];

array.forEachCustomer((element, index) => {
  console.log(`Element at index ${index}: ${element}`);
});