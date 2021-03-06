---
title: useLocalStorageState
nav:
  title: Hooks
  path: /hooks
group:
  title: State Hooks
  path: /state
---

# useLocalStorageState

一个可以将状态持久化存储在 localStorage 中的 Hook 。

## 代码演示

### 将 state 持久化在 localStorage 中

<code src="./demo/demo1.tsx" />

### 存储对象

<code src="./demo/demo2.tsx" />

### 使用 function updater 存储

<code src="./demo/demo3.tsx" />

## API

```typescript
const [state, setState] = useLocalStorageState<T>(
  key: string,
  defaultValue?: T | (() => T),
): [T?, (value?: T | ((previousState: T) => T)) => void]
```

它的 API 和 `useState` 非常类似，但是多了一个参数 `key` ，用来指定在 localStorage 中存储时所使用的 `key` 。而它的返回值类型和 `useState` 保持了一致，当调用 `setState` 时，它会自动将新值写入到 localStorage 中。

如果想从 localStorage 中删除这条数据，可以使用 `setState()` 或 `setState(undefined)` 。
