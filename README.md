# Vue 3 + TypeScript + Vite

## Vite + Vue3 + TS + 前端工具链合集

## 业务代码示例

简单使用了以下常用的业务处理：

- axios + TS 封装
- 静态资源处理
- 图片懒加载 + 指令处理
- element-plus 按需加载
- echarts 按需加载
- mock 模拟数据拦截

## vite 配置相关优化

- 别名处理
- `vite-plugin-mock`插件对于`mock`数据的拦截
- 全局`Sass`文件读取
- `rollup`对于打包文件名字的处理
- `rollup`拆包

## 前端工具链处理

- JS 代码规范（`ESLint + Prettier`）
- CSS 规范（`Stylelint`）
- Git 工作流规范（`Husky + Lint-staged`）
- Git 提交信息规范（`Commitlint + commitizen + cz-git`）

## VSCode 推荐

`extensions.json`文件中有对于`VSCode`插件的推荐，`VSCode`启动后如果没有安装相关插件，会弹出安装插件提示

## script 脚本命令

> stylelint 与 stylelint-config-prettier 现阶段有 peerDependence 对等依赖的问题，建议通过 npm 安装的时候，使用`--legacy-peer-deps`参数：`npm i --legacy-peer-deps`
