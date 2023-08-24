Array.prototype.customerFilter = function (callback, thisArg) {
  if (this === null) {
    throw new TypeError('this is null or no defined');
  }


  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is no function`);
  }

  const O = Object(this);

  const len = O.length >>> 0;

  const resArr = [];
  let k = 0;
  while (k < len) {
    if (k in O) {
      if (callback.call(thisArg, O[k], k, O)) {
        resArr.push(O[k]);
      }
    }
    k++;
  }
  return resArr;
}

const array = [1, , 3];
console.log(array.customerFilter(ele => ele > 2));