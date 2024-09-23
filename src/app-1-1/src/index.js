// import './public-path';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import 'antd/dist/antd.css';

// 发送数据
window.microApp?.dispatch({ from: "来自微应用react17的数据" + +new Date() });

// 👇 将渲染操作放入 mount 函数，子应用初始化时会自动执行
window.mount = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );

  console.log("微应用react17渲染来了 -- UMD模式");
};

// 👇 将卸载操作放入 unmount 函数
window.unmount = () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  console.log("微应用react17卸载了 -- UMD模式");
};

// 如果不在微前端环境，则直接执行mount渲染
if (!window.__MICRO_APP_ENVIRONMENT__) {
  window.mount();
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
