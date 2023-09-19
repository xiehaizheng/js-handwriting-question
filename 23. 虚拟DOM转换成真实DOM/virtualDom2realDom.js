// 描述：将如下 JSON格式的虚拟DOM结构转换成真实DOM结构。
// vnode 结构
const vonde = {
  tag: 'DIV',
  attrs: {
    id: "app"
  },
  children: [
    {
      tag: 'SPAN',
      children: [
        {
          tag: 'A',
          children: []
        }
      ]
    }
  ]
}
// 真实DOM 结构
// {/* <div id="app">
//   <span>
//     <a></a>
//   </span>
// </div> */}

function virtualDom2realDom(vnode) {
  // vnode 如果是number ,转换成string
  if (typeof vnode === 'number') vonde = String(vnode);
  // 如果是string，直接显示: 字符串类型直接就是文本节点
  if (typeof vnode === 'string') {
    return document.createTextNode(vnode);
  }
  // 普通Dom对象
  const dom = document.createElement(vonde.tag);
  if (vonde.attrs) {
    // 遍历添加属性
    Object.keys(vnode.attrs).forEach((key) => {
      dom.setAttribute(key, vnode.attrs[key]);
    });
  }
  // 子数组进行递归操作
  vnode.children && vonde.children.forEach((chlid) => {
    dom.appendChild(virtualDom2realDom(chlid));
  });
}

const realDom = virtualDom2realDom(vonde);
console.log(realDom);

