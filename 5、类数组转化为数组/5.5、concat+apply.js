function transfor(arrayLike) {
  return Array.prototype.concat.apply([], arrayLike);
}