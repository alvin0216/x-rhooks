---
order: 1
nav:
  title: Guide
  order: 1
---

# Getting Started

x-rhooks is a React Hooks library dedicated to providing commonly used and high quality Hooks.

> Before start, you need to know the basic usage of React and React Hooks. Follow the [link](https://reactjs.org/docs/hooks-intro.html) to learn the official React Hooks documentation.

## First Example

Here is a simple codesandbox example to show the usage of x-rhooks.

<code src="./demo/demo1.tsx"  />

### Explore more Hooks

You can look up Hooks in the side menu like useRequest, useHover etc. Our document provides a variety of examples, you can click the icon in the lower right corner to view the code. At the same time, the Hooks API can be consulted at the bottom of the document. Go and try it.

## Import on demand

we can import individual Hooks on demand。

```javascript
import useModal from 'x-rhooks/es/useModal';
```

> Note: x-rhooks supports ES6 tree shaking, so `import { useModal } from 'x-rhooks'` will drop the js code you don't use too.

We strongly recommend using [babel-plugin-import](https://github.com/ant-design/babel-plugin-import), which can convert the following code to the `import useModal from 'x-rhooks/es/useModal'` way:

```javascript
import { useModal } from 'x-rhooks';
```
