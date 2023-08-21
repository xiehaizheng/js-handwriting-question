function unique(arr) {
  // 使用 set + ...扩展运算符实现
  // return [...new Set(arr)];
  // 使用set+Array.from实现
  return Array.from(new Set(arr));
}

console.log(unique([1, 1, 2, 2, 4, 3, 4]));