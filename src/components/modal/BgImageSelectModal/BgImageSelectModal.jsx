import React from 'react';
import { Modal, Tabs, Upload, Icon } from 'antd/lib/index';
import UnsplashContainer from "containers/UnsplashContainer";

const { TabPane } = Tabs;
const { Dragger } = Upload;

const BgImageSelectModal = ({ open, onSelect, onCancel }) => {
  return (
    <Modal
      title="Select Background Image"
      visible={open}
      onOk={onSelect}
      onCancel={onCancel}
      width={800}
    >
      <Tabs defaultActiveKey="unsplash">
        <TabPane tab="Unsplash" key="unsplash" >
          <UnsplashContainer />
        </TabPane>
        <TabPane tab="Upload" key="upload">
          <Dragger >
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from uploading company data or other
              band files
            </p>
          </Dragger>
        </TabPane>
      </Tabs>
    </Modal>
  )
};

export default BgImageSelectModal;
