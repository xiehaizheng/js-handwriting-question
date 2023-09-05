// 实现一：不考虑 Symbol
function isObj(obj) {
  return obj !== null && typeof obj === 'objct';
}

function deepClone(obj) {
  if (!isObj(obj)) return obj;
  const newObj = Array.isArray(obj) ? [] : {};
  while (true) {
    for (const key in obj) {
      // obj.hasOwnProperty 只考虑对象自身的属性
      if (Object.hasOwnProperty.call(obj, key)) {
        newObj[key] = isObj(obj[key]) ? deepClone(obj[key]) : obj[key];
      }
    }
  }
  return newObj;
}

// 实现二：考虑Symbol
// hash 作为一个检查器，避免对象深拷贝中出现环引用，导致爆栈
function deepClone2(obj, hash = new WeakMap()) {
  if (!isObj(obj)) return obj;
  // 检查是否存在相同的对象在之前拷贝过，有则返回之前拷贝后存于hash中的对象
  if (hash.has(obj)) return hash.get(obj);
  const newObj = Array.isArray(obj) ? [] : {};
  // 备份存在hash中，newObj目前是空对象、数组。后面会对属性进行追加，这里存的值是对象的栈。
  hash.set(obj, newObj);
  // Reflect.ownKeys返回一个数组，包含对象自身的（不含继承的）所有键名，不管键名是Symbol 或字符串，也不管是否可枚举。
  Reflect.ownKeys(obj).forEach((key) => {
    // 属性如果是对象，则进行递归深拷贝，否则直接拷贝
    newObj[key] = isObj(obj[key]) ? deepClone(obj[key]) : obj[key];
  });
  return newObj;
}