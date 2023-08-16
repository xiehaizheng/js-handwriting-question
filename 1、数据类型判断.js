function myTypeOf(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

console.log(myTypeOf(1)); // number
console.log(myTypeOf('1111')); // string
console.log(myTypeOf(true)); // boolean
console.log(myTypeOf(undefined));; // undefind
console.log(myTypeOf(null)); // null
console.log(myTypeOf(Symbol())); // symbol
console.log(myTypeOf([1, 2, 3])); // array
console.log(myTypeOf(() => { })); // function