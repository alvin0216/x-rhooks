---
title: useModal 🌟
nav:
  title: Hooks
  path: /hooks
group:
  title: UI
  path: /ui
---

# useModal

当你需要使用 `antd Modal`，可使用 `useModal`。

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

### 复杂一些的例子

<code src="./demo/demo2.tsx" />

## API

```ts
const { modalProps, show, close, visible, modalState, setModalState } = useModal(initialState);
```

### Params

| 参数         | 说明     | 类型         | 默认值 |
| ------------ | -------- | ------------ | ------ |
| initialState | 初始状态 | S \| () => S | -      |

### Result

| 名称          | 说明                                                  | 类型                                          |
| ------------- | ----------------------------------------------------- | --------------------------------------------- |
| modalProps    | antd Modal 组件的 props，作为 Modal 组件的 props 即可 | ` { visible: boolean; onCancel: () => void;}` |
| show          | 打开弹窗,                                             | () => void                                    |
| close         | 关闭弹窗                                              | () => void                                    |
| visible       | 弹窗当前显隐状态                                      | boolean                                       |
| modalState    | state                                                 | `T \| undefined`                              |
| setModalState | setState                                              | `React.Dispatch<React.SetStateAction<T>>`     |
