function unique(arr) {
  // const res = [];
  const res = arr.filter((value, index) => {
    return arr.indexOf(value) === index;
  });
  return res;
}

console.log(unique([1, 1, 2, 3, 3, 4, 2]));