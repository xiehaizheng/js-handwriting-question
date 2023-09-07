// Oject.assign()方法用于将所有【可枚举（Object.propertyIsEnumerable()返回true）】的【自有 Object.hasOwnProperty()返回true】属性的值从一个或多个源对象复制到目标对象。返回修改后的目标对象。（这个操作是浅拷贝）
// 可枚举 的 自有属性
Object.assign = function (target, ...source) {
  if (target === null) {
    throw new Error('can not covert undefined or null to object');
  }

  const res = Object(target);
  source.forEach((obj) => {
    if (obj !== null) {
      // for...in 只会遍历对象自身和继承的可枚举属性，不含Symbol属性
      for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
          res[key] = obj[key];
        }
      }
    }
  });
  return res;
}
