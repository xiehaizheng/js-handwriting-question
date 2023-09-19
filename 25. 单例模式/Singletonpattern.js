// 意图：保证一个类仅有一个实例，并提供一个访问他的全局访问点
// 主要解决：一个全局使用的类频繁的创建与销毁
// 何时使用：当你想控制实例数目，节省系统资源的时候
// 如何解决：判断系统是否有这个单例，如果有则返回，如果没有则创建
const Singleton = (function () {
  // 如果在内部声明 SingletonClass 对象，则无法在外部直接调用
  const SingletonClass = function () { };
  let instance;
  return function () {
    // 如果已存在，则返回 instance
    if (instance) return instance;
    // 如果不存在，则new 一个 SingletonClass 对象
    instance = new SingletonClass();
    return instance;
  }
})()

const a = new Singleton();
const b = new Singleton();
console.log(a === b);