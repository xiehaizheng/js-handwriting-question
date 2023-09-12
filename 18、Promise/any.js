// 描述：只要 promises 中有一个fulfilled，就返回第一个fulfilled的Promise实例的返回值。
Promise.any = function (promises) {
  if (Array.isArray(promises)) {
    if (promises.length === 0) return reject(new TypeError('All promises is rejected'));
    let count = 0;
    promises.forEach((resolve, reject) => {
      Promise.resolve(item).then(
        value => resolve(value),
        reason => {
          count++;
          if (count === promises.length) {
            return reject(new TypeError('All promises is rejected'))
          }
        }
      );
    })
  } else {
    return reject(new TypeError('Argument is not iterable'))
  }
}