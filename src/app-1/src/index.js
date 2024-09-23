// import './public-path';
import microApp from "@micro-zoe/micro-app";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 👇 将渲染操作放入 mount 函数，子应用初始化时会自动执行
window.mount = () => {
  console.log("app-1", window.__MICRO_APP_BASE_ROUTE__);
  ReactDOM.render(
    <BrowserRouter basename={window.__MICRO_APP_BASE_ROUTE__ || "/"}>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

// 👇 将卸载操作放入 unmount 函数
window.unmount = () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("root"));
};

// 如果不在微前端环境，则直接执行mount渲染
if (!window.__MICRO_APP_ENVIRONMENT__) {
  window.mount();
}

microApp.setGlobalData({ from: "app-1" });
microApp.start({
  tagName:"micro-app-app1"
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
