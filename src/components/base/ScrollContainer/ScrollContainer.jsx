import React from 'react';

const ScrollContainer = ({ height, children }) => (
  <div style={{
    height,
    overflowY: 'scroll'
  }} >
    {children}
  </div>
);

export default ScrollContainer;

