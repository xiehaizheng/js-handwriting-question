Promise.reject = function (value) {
  return new Promise((resolve, reject) => reject(value))
}