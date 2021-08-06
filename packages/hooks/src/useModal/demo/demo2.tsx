import { Button, Modal } from 'antd';
import React, { useCallback, useState } from 'react';
/**
 * title: Default usage
 *
 * title.zh-CN: 设置 modelState 变量
 */
import { useModal } from 'x-rhooks';

interface Info {
  age: number;
}

export default () => {
  const { modalProps, show, modalState, setModalState } = useModal<Info>();

  return (
    <>
      <Button
        onClick={() => {
          setModalState({ age: 18 });
          show();
        }}
      >
        show
      </Button>
      <Modal {...modalProps} title="xxx">
        {JSON.stringify(modalState, null, 2)}
      </Modal>
    </>
  );
};
