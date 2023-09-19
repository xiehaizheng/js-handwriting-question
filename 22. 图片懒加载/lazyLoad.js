// 实现：监听 scroll 事件（建议给监听事件添加节流），图片加载完会从 img 标签组成的 DOM 列表中删除，
// 最后所有的图片加载完毕后需要解绑监听事件。
// <img src="./1.png" data-src="https://xxx.jpg" alt="" />
let imgs = [...document.querySelectorAll('img')];
const len = imgs.length;

const lazyLoad = () => {
  let count = 0;
  const deleteImgs = [];
  // 获取当前可视区的高度
  const viewHeight = document.documentElement.clientHeight;
  // 获取当前滚动条的位置(距离顶部的距离,等价于document.documentElement.scrollTop)
  const scrollTop = document.documentElement.scrollTop;
  imgs.forEach((img) => {
    // 当前图片距离网页顶部的距离
    const imgOffsetTop = img.offsetTop;
    // 判断图片是否在可视区内，如果在就加载
    if (imgOffsetTop < scrollTop + viewHeight) {
      img.src = img.dataset.src;
      count++;
      deleteImgs.push(img);
      if (count === len) {
        document.removeEventListener('scroll', imgThrottle);
      }
    }
  });
  // 图片加载完会从 `img` 标签组成的 DOM 列表中删除
  imgs = imgs.filter(img => !deleteImgs.includes(img));
}

window.onload = function () {
  lazyLoad();
}

// 使用 防抖/节流 优化一下滚动事件
const imgThrottle = debounce(lazyLoad, 1000);

// 监听 scroll 事件
window.addEventListener('scroll', imgThrottle);