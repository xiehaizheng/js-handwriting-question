const mySetTimeout = (fn, time) => {
  let timer = null;
  timer = setInterval(() => {
    debugger;
    // 关闭定时器，保证只执行一次fn，也就达到了setTimeout的效果了
    clearInterval(timer);
    fn();
  }, time);
}

const cancel = mySetTimeout(() => console.log(11), 1000);
