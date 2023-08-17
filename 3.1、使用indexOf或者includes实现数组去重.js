function unique(arr) {
  const res = [];
  arr.foreach((item) => {
    if (res.indexOf(item) === -1) res.push(item);
    // if (!res.includes(item)) res.push(item);
  });
} 