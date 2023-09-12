// 只要promises中有一个率先改变状态，就返回这个率先改变Promise实例的返回值
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(promises)) {
      if (promises.length === 0) return resolve(promises);
      promises.forEach((item) => {
        Promise.resolve(item).then(
          value => resolve(value),
          reason => reject(reason),
        );
      });
    } else {
      return reject(new TypeError('Argument is not iterable'))
    }
  });
}