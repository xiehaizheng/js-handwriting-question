Array.prototype.customerSome = function (callback, thisArg) {
  if (this === null) {
    throw new TypeError('this is null or not defined');
  }

  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not function`);
  }

  const O = Object(this);

  const len = O.length >>> 0;

  let k = 0;

  while (k < len) {
    if (k in O) {
      if (callback.call(thisArg, O[k], k, O)) {
        return true;
      }
    }
    k++;
  }
  return false;
}

const array = [1, , 3];
console.log(array.customerSome(ele => ele > 2));