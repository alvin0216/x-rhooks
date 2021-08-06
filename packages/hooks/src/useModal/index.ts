import { useCallback, useState } from 'react';

interface BaseCallback {
  visible: boolean;
  show: () => void;
  close: () => void;
  modalProps: {
    visible: boolean;
    onCancel: () => void;
  };
}
interface UseModalState<T> extends BaseCallback {
  modalState: T;
  setModalState: React.Dispatch<React.SetStateAction<T>>;
}

function useModal<T>(): UseModalState<T | undefined>;
function useModal<T>(state: T): UseModalState<typeof state>;

function useModal<T = undefined>(defaultState?: T) {
  const [modalState, setModalState] = useState(defaultState);
  const [visible, setVisible] = useState(false);
  const show = useCallback(() => setVisible(true), [visible]);
  const close = useCallback(() => setVisible(false), [visible]);

  const modalProps = {
    visible,
    onCancel: close,
  };

  return {
    visible,
    show,
    close,
    modalProps,
    /** show(modalState) 会设置 modal 值 */
    modalState,
    setModalState,
  };
}

export default useModal;
