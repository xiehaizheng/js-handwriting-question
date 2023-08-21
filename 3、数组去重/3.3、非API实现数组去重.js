function unique(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    let flag = false;
    for (let j = 0; j < res.length; j++) {
      if (res[j] === arr[i]) {
        flag = true;
        break;
      }
    }
    if (!flag) res.push(arr[i]);
  }
  return res;
}

console.log(unique([1, 1, 2, 2, 4, 3, 4]));