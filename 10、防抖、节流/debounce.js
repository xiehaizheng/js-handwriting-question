// 执行最后一次
// 防抖--触发高频事件N秒后只会执行一次，如果N秒内再次触发，则会重新计时。类似王者荣耀的回城功能，你反复触发回城功能，那么只认最后一次，从最后一次触发开始计时。
// 核心思想：每次事件触发，就清除原来的定时器，建立新的定时器。使用apply或call调用传入的参数。函数内部支持使用this和event对象。
// 应用：防抖常用于用户进行搜索输入节约请求资源，window触发resize事件时，进行防抖只会触发一次。
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      // 改变this指向为调用 debounce所指的对象
      fn.call(this, ...args);
      // fn.apply(this, args);
    }, delay);
  }
}