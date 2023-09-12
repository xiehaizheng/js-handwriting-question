Promise.resolve = function (value) {
  // 1、如果value为promise对象，则直接返回该对象
  if (value instanceof Promise) return value;
  // 2、如果value参数是一个具有then方法的对象，则将这个对象转为 Promise 对象，并立即执行他的then方法
  if (typeof value === 'object' && 'then' in value) {
    return new Promise((resolve, reject) => {
      value.then(resolve, reject);
    });
  }
  // 3、否则返回一个新的Promise对象，状态为fulfilled
  return new Promise(resolve => resolve(value));
}