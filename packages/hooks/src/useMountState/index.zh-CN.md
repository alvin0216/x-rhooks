---
title: useMountState 🌟
nav:
  title: Hooks
  path: /hooks
group:
  title: State
  path: /state
---

# useMountState

只在组件 mount 时执行的 hook。我们希望在挂载组件时，获取某些远程信息并 `setState` 值。

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

## API

```typescript
const { state, loading, error, setState, refesh } = useMountState(initialState, fn(set): void);
```

### 参数

| 参数         | 说明                                                             | 类型            | 默认值 |
| ------------ | ---------------------------------------------------------------- | --------------- | ------ |
| initialState | state 默认值                                                     | `undefined`     | -      |
| fn           | mount 时执行的函数，`set` 方法同 `setState`, 用于设置 `state` 值 | `(set) => void` | -      |

### 结果

| 参数       | 说明              | 类型                                      | 默认值 |
| ---------- | ----------------- | ----------------------------------------- | ------ |
| `state`    | 初始状态          | `undefined`                               | -      |
| `loading`  | `fn` 是否正在执行 | `boolean`                                 | -      |
| `error`    | `fn` 抛出的异常   | `undefined \| Error`                      | -      |
| `refesh`   | 再次执行 `fn`     | `() => Promise<void>`                     | -      |
| `setState` | 设置 setate       | `React.Dispatch<React.SetStateAction<T>>` | -      |
