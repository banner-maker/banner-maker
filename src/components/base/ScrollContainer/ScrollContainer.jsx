import React from 'react';

const ScrollContainer = ({ height, vertical, horizontal, children, forwardedRef }) => (
  <div
    ref={forwardedRef}
    style={{
    height,
    overflowY: vertical ? 'scroll': 'hidden',
    overflowX: horizontal ? 'scroll': 'hidden'
  }} >
    {children}
  </div>
);

ScrollContainer.defaultProps = {
  height: 300,
  vertical: false,
  horizontal: false
};

export default React.forwardRef(((props, ref) => {
  return (
    <ScrollContainer {...props} forwardedRef={ref}/>
  )
}));

