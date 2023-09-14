// 描述：实现一个带并发限制的异步调度器 Scheduler，保证同时运行的任务最多有 limit 个。
class Scheduler {
  queue = []; // 用队列保存正在执行的任务
  count = 0; // 计数正在执行的任务个数
  constructor(limit) {
    this.maxCount = limit;
  }

  add(time, data) {
    const promiseCreator = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log(data);
          resolve();
        }, time)
      });
    }
    this.queue.push(promiseCreator);
    // 每次添加任务的时候都会尝试去执行任务
    this.request();
  }

  request() {
    // 队列中有任务才会执行
    if (this.queue.length && this.count < this.maxCount) {
      this.count++;
      // 执行先加入队列的函数
      this.queue.shift()().then(() => {
        this.count--;
        // 尝试进行下一次任务
        this.request();
      })
    }
  }
}

// test
const scheduler = new Scheduler(2);
const addTask = (time, data) => {
  scheduler.add(time, data);
}

addTask(1000, '1');
addTask(500, '2');
addTask(400, '3');
addTask(300, '4');