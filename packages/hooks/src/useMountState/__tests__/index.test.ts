import { Dispatch, SetStateAction } from 'react';

import { act, renderHook, RenderHookResult } from '@testing-library/react-hooks';

import useMountState from '../index';

const setUp = (init?: number, fn?: (set: Dispatch<SetStateAction<number>>) => void) =>
  renderHook(() => useMountState(init, fn));

it('should render count1', () => {});
