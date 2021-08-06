---
title: useUrlState
nav:
  title: Hooks
  path: /hooks
group:
  title: State
  path: /state
---

# useUrlState

A hook that stores the state into url query parameters.

## Install

> This hook relies on useLocation & useHistory from `react-router`, to use this hook, you need to ensure
>
> 1\. Your project is using `react-router` version 5.0 or higher to manage routing

## Usage

```js
import { useUrlState } from 'x-rhooks';
```

## Examples

### Default usage

<code src="./demo/demo1.tsx" hideActions='["CSB"]' />

### Multi-state management

<code src="./demo/demo2.tsx" hideActions='["CSB"]' />

## API

```typescript
const [state, setState] = useUrlState(initialState, options);
```

### Params

| Property     | Description                    | Type         | Default |
| ------------ | ------------------------------ | ------------ | ------- |
| initialState | initialState, same as useState | S \| () => S | -       |
| options      | url config                     | Options      | -       |

### Options

| Property     | Description                   | Type                | Default   |
| ------------ | ----------------------------- | ------------------- | --------- |
| navigateMode | type of history navigate mode | 'push' \| 'replace' | 'replace' |

### Result

| Property | Description                                  | Type                                            |
| -------- | -------------------------------------------- | ----------------------------------------------- |
| state    | url query object                             | object                                          |
| setState | same as useState, but state should be object | (state: S) => void \| (() => ((state: S) => S)) |
