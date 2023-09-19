// 实现 模板字符串 解析
// 描述：实现函数使得将 template 字符串中的{{}}内的变量替换。
// 使用字符串替换方法  str.replace(regexp|substr, newSubStr|function)，使用正则匹配替换字符串
function render(template, data) {
  // 模板字符串正则 /\{\{(\w+)\}\}/, 加 g 为全局匹配模式, 每次匹配都会调用后面的函数
  const computed = template.replace(/\{\{(\w+)}\}/g, function (match, $1, offset, string, groups) {
    // match: 匹配的子串;  key：括号匹配的字符串
    // console.log(match, $1);
    // console.log('offset', offset);
    // console.log('string', string);
    // console.log('groups', groups);
    return data[$1];
  });
  return computed;
}

// 测试
let template = "我是{{name}}，年龄{{age}}，性别{{sex}}";
let data = {
  name: "张三",
  age: 18,
  sex: 0
}
console.log(render(template, data)); // 我是张三，年龄18，性别undefined