# awesome-samples
微前端发展过程中收录的一些典型的样例

### cesiumJS 避免和vite 一起使用

cesiumJS 强依赖 window.location，而使用 vite 子应用 需要采用 window.microApp.location 替代 window.location

