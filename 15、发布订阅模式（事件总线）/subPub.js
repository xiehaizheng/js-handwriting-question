// 描述：实现一个发布订阅模式，拥有 on, emit, once, off 方法
class EventEmitter {
  constructor() {
    // 包含所有【监听器函数】的容器对象
    // 内部结构：{msg1: [listener1, listener2], msg2: [listener3]}
    this.cache = {};
  }

  // 实现订阅
  on(name, callback) {
    if (this.cache[name]) {
      this.cache[name].push(callback);
    } else {
      this.cache[name] = [callback];
    }
  }

  // 触发事件 
  emit(name, ...data) {
    if (this.cache[name]) {
      // 创建副本，如果回调函数内继续注册相同事件，会造成死循环
      const tasks = this.cache[name].slice();
      for (let task of tasks) {
        task(...data);
      }
    }
  }

  // 只触发一次
  once(name, callback) {
    callback();
    this.off(name, callback);
  }

  // 删除订阅
  off(name, callback) {
    if (this.cache[name]) {
      this.cache[name] = this.cache[name].filter(item => item !== callback);
    }
    if (this.cache[name].length === 0) delete this.cache[name];
  }
}