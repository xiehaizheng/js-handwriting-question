// 类数组是具有 length 属性，但不具有数组原型上的方法。常见的类数组有 arguments、DOM 操作方法返回的结果(如document.querySelectorAll('div'))等。


// 5.1、扩展运算符 适用于可迭代对象（iterable）对象，即拥有 Symbol(Symbol.iterable)属性值
function transforArray(arrayLike) {
  const arr = [...arrayLike];
  return arr;
}
