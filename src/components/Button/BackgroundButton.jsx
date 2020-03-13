import React from "react";
import { Button } from "antd";

const BackgroundButton = ({ onClick }) => {
  return (
    <Button
      type="primary"
      icon="file-image"
      size="large"
      style={{
        marginBottom: 10
      }}
      onClick={() => onClick()}>
      Background Image
    </Button>
  );
};

export default BackgroundButton;
