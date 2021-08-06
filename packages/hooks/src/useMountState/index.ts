import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';

import useSafeState from '../useSafeState';

function useMountState<T = any>(
  /** 默认的 state 值 */
  initialState: T,
  /** useMount 挂载函数，通过 set 方法可以进行 setState */
  fn?: (set: Dispatch<SetStateAction<T>>) => void,
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();
  const [state, set] = useSafeState<T>(initialState);

  async function refresh() {
    try {
      setLoading(true);
      await fn?.(set);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    refresh();
  }, []);

  return { state, loading, error, refresh, setState: set };
}

export default useMountState;
