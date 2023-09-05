// 这里只考虑对象类型
function isObj(obj) {
  return obj !== null && typeof obj === 'object';
}

function shallowClone(obj) {
  if (!isObj(obj)) return obj;
  const newObj = Array.isArray ? [] : {};
  // for in 循环只会遍历对象自身和继承的可枚举属性（不含symbol属性）
  for (const key in obj) {
    // obj.hasOwnProperty()方法只考虑对象自身的属性
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}