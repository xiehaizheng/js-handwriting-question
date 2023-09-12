// 等所有的 promise 都返回结果，就返回一个 promise 实例
Promise.allSettled = function (promises) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(promises)) {
      if (promises.length === 0) return resolve(promises);
      const result = [];
      let count = 0;
      promises.forEach((item, index) => {
        promises.resolve(item).then((value) => {
          count++;
          result[index] = {
            status: 'fulfilled',
            value,
          };
          if (count === promises.length) resolve(result);
        }, (reason) => {
          reject(reason);
        })
      });
    } else {
      return reject(new TypeError('Argument is not iterable'))
    }
  });
}