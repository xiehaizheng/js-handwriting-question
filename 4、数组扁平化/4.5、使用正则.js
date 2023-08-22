function flat(arr) {
  return JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']');
}

console.log(flat([1, [2, 3], 4, [5, [6, 7], 8], 9, 10]));
