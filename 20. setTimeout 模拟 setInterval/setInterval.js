const mySetInterval = (fn, time) => {
  let timer = null;
  const interval = () => {
    timer = setTimeout(() => {
      fn(); // time 时间之后会执行真正的函数fn
      interval(); // 同时再次调用interval本身
    }, time);
  }
  interval(); // 开始执行
  return () => clearTimeout(timer);
}

const cancel = mySetInterval(() => console.log(1), 400);
setTimeout(() => {
  cancel(); // 清除定时器
}, 1300);