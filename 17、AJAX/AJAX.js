// AJAX:实现：利用 XMLHttpRequest
// get
const getJSON = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    // open 方法用于指定 HTTP 请求的参数：method, url, async (是否异步，默认true)
    xhr.open('GET', url, false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    // onreadystatechange 属性指向一个监听函数
    // readystatechange 事件发生时（实例的readyState属性发生变化），就会执行这个属性
    xhr.onreadystatechange = function () {
      // 4表示服务器返回的数据已经接收完成，或者本次接收已经失败
      if (xhr.readyState !== 4) return;
      // 请求成功，基本上只有2xx和304的状态码，表示服务器返回时正常状态
      if (xhr.status === 200 || xhr.status === 304) {
        // responseText 属性返回从服务器接收到的字符串
        resolve(xhr.responseText);
      } else {
        reject(new Error(xhr.responseText));
      }
    }
    xhr.send();
  });
}

// post
const postJSON = (url, data) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200 || xhr.status === 304) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(xhr.responseText))
      }
    }
    xhr.send(data);
  });
}