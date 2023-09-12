// 所有的 promise 状态都变成 fulfilled,就会返回一个状态为 fulfilled 的数组（所有 promise的值）。只要有一个失败，就返回第一个状态为 rejected 的 promise 的 resaon
Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(promises)) {
      if (promises.length === 0) return resolve(promises);
      const result = [];
      let count = 0;
      promises.forEach((item, index) => {
        Promise.resolve(item).then(
          value => {
            count++;
            result[index] = value;
            if (count === promises.length) resolve(result);
          },
          reason => reject(reason)
        )
      });
    } else {
      return reject(new TypeError('Argument is not iterable'))
    }
  });
}