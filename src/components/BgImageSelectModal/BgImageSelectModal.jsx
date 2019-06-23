import React from 'react';
import { Modal, Tabs } from 'antd/lib/index';
import UnsplashContainer from "containers/UnsplashContainer";

const { TabPane } = Tabs;

const BgImageSelectModal = ({ open, handleSelect, handleCancel }) => {

  return (
    <Modal
      title="Select Background Image"
      visible={open}
      onOk={handleSelect}
      onCancel={handleCancel}
      width={800}
    >
      <Tabs defaultActiveKey="unsplash">
        <TabPane tab="Unsplash" key="unsplash" >
          <UnsplashContainer />
        </TabPane>
        <TabPane tab="Upload" key="upload">
          준비중입니다.
        </TabPane>
      </Tabs>
    </Modal>
  )
};

export default BgImageSelectModal;
