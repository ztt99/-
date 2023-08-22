import ejs from "ejs";
import path from "path";
import url from "url";
import { glob } from "glob";

// -%> 将空行删除。在结束符那里加上-
const html = `
<% if(user){ -%>
  <% for(let key = 0 ; key < 10; key++){ -%>
  <%_ -%><div><%= user.name -%></div>
  <% } -%>
<% } -%>
`;
const options = {};
const data = {
  user: {
    name: "sam",
  },
};

// !第一种
// compile 编译的过程，
const template = ejs.compile(html, options);

// console.log("template(data)", template(data));

// !第二种

// const renderedTemplate = ejs.render(html, data, options);

// console.log(renderedTemplate);
// !第三种
// const renderedFile = ejs.renderFile(
//   path.join(__dirname, "template.html"),
//   data,
//   options
// );

// console.log(renderedFile);

// ** 代表任意目录下的，不论是几级路径
// !ignore 如果只写node_modules那么只会忽略node_modules，并不会忽略里面的文件，所以要加上/**,表示node_modules下的任意层级
glob("**/*.js", {
  ignore: ["node_modules/**", "**/node_modules/**"],
  nodir: true, // 不要文件夹
}).then((data) => {
  console.log(data);
});
