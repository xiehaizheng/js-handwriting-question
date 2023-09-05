function myinstanceof(left, right) {
  // 基本数据类型 都返回 fasle，注意 typeof 【函数】返回“function”
  if ((typeof left !== "object" && typeof left !== "function") || left === null) return false;
  const leftPro = left.__proto__; // 取左边的隐式原型（__proto__） left.__proto__ 等价于 Object.getProtoTypeOf(left)
  while (true) {
    // 判断是否到原型链顶端
    if (leftPro === null) return false;
    // 判断右边的显示原型 prototype 对象是否在左边的原型链上
    if (leftPro === right.prototype) return true;
    // 原型链查找
    leftPro = leftPro.__proto__;
  }
}