---
order: 1
nav:
  title: 指南
  order: 1
---

# 快速上手

x-rhooks 是一个 React Hooks 库，致力提供常用且高质量的 Hooks。

> 在开始之前，你需要掌握 React 及 React Hooks 基础用法。访问[链接](https://zh-hans.reactjs.org/docs/hooks-intro.html)学习 React Hooks 官方文档。

## 第一个例子

这是一个最简单的 x-rhooks 的在线 codesandbox 演示。

<code src="./demo/demo1.tsx"  />

### 探索更多 Hooks 用法

你可以在左侧菜单查看 Hooks 列表。我们的文档中提供了各类演示，每个代码演示的例子，都可以点击右下角的图标查看代码，同时文档最下方有 Hooks API 文档可以查阅，快去试试吧。

## 按需加载

可以通过以下的写法来按需加载 Hooks。

```javascript
import useModal from 'x-rhooks/es/useModal';
```

> 注意：x-rhooks 默认支持基于 ES module 的 tree shaking，对于 js 部分，直接引入 `import { useModal } from 'x-rhooks'` 也会有按需加载的效果。

如果你使用了 babel，那么可以使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 来进行按需加载，加入这个插件后。你可以仍然这么写：

```javascript
import { useModal } from 'x-rhooks';
```

插件会帮你转换成 `x-rhooks/es/useModal` 的写法。
