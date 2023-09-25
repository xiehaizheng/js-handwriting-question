// 思想：将传入的对象作为原型
function create(obj) {
  function F() { };
  F.prototype = obj;
  return F;
}