/**
 * title: Default usage
 *
 * title.zh-CN: 基础用法
 */

import React, { useState } from 'react';
import { useMountState } from 'x-rhooks';

export default () => {
  const { state, loading, error, setState, refresh } = useMountState(
    { name: 'default', age: 100 },
    async (set) => {
      const data = await queryUserInfo();
      set(data);
    },
  );

  if (error) return 'error';
  if (loading) return 'loading....';
  return (
    <>
      <h4> name: {state.name}</h4>
      <h4> age: {state.age}</h4>
      <button onClick={() => setState((prev) => ({ ...prev, age: prev.age + 1 }))}>add age</button>
      <button onClick={refresh}>refresh</button>
    </>
  );
};

interface UserInfo {
  name: string;
  age: number;
}

function queryUserInfo(): Promise<UserInfo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'alvin', age: 18 });
    }, 1000);
  });
}
