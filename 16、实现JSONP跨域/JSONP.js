// JSONP核心原理：script标签不受同源策略限制，所以可以用来进行跨域请求，优点是兼容性好，但是只能用于GET请求
const JSONP = (url, params, callbackName) => {
  const getUrl = () => {
    let dataSrc = '';
    for (let key in params) {
      if (params.hasOwnProperty(key)) {
        dataSrc += `${key}=${params[key]}`;
      }
    }
    dataSrc += `callback=${callbackName}`;
    return `${url}?${dataSrc}`
  }
  return new Promise((resolve, reject) => {
    const scriptEle = document.createElement('script');
    scriptEle.src = getUrl();
    document.body.appendChild(scriptEle);
    window[callbackName] = (data) => {
      resolve(data);
      document.removeChild(scriptEle);
    }
  });
}