import React, { useState } from 'react';
import { useMountState } from 'x-rhooks';

export default () => {
  const { state, loading, error, setState, refresh } = useMountState(0, async (set) => {
    const data = await queryCount();
    set(data);
  });

  if (error) return 'error';
  if (loading) return 'loading...';
  return (
    <>
      <h4> count: {state}</h4>
      <button onClick={() => setState((prev) => prev + 1)}>add age</button>
      <button onClick={refresh}>refresh</button>
    </>
  );
};

function queryCount() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(18);
    }, 1000);
  });
}
