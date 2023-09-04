// 节流（throttle）：触发高频事件，且N秒内只执行一次。这就好比公交车，10 分钟一趟，10 分钟内有多少人在公交站等我不管，10 分钟一到我就要发车走人！类似qq飞车的复位按钮。
// 核心思想：使用时间戳或者标志来实现，立即执行一次，然后每N秒执行一次。如果N秒内触发则直接返回。
// 应用：节流常应用于鼠标不断点击触发、监听滚动事件。


// 版本一：标志实现
function throtle(fn, wait) {
  let flag = true;
  return function (...args) {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.call(this, ...args);
      flag = true;
    }, wait);
  }
}

// 版本二： 时间戳
function throttle(fn, wait) {
  const pre = 0
  return function (...args) {
    const now = new Date();
    if (now - pre < wait) return;
    pre = now;
    fn.call(this, ...args);
  }
}