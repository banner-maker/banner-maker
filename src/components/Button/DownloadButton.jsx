import React from "react";
import { Button } from "antd";
import ReactGA from "react-ga";
ReactGA.initialize("UA-80202920-2");

const DownloadButton = ({ href, text }) => {
  const sendLog = () => {
    ReactGA.event({
      category: "DOWNLOAD",
      action: "Click",
      label: text
    });
  };

  return (
    <a href={href} download="banner-image.png">
      <Button
        type="primary"
        icon="download"
        size="large"
        onClick={() => sendLog()}>
        Download
      </Button>
    </a>
  );
};

export default DownloadButton;
