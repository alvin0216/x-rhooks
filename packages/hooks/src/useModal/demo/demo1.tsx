/**
 * title: Default usage
 *
 * title.zh-CN: 基础用法
 */

import { Button, Modal } from 'antd';
import React from 'react';
import { useModal } from 'x-rhooks';

export default () => {
  const { modalProps, show } = useModal();
  return (
    <>
      <Button onClick={show}>show</Button>
      <Modal {...modalProps} title="xxx">
        Test
      </Modal>
    </>
  );
};
