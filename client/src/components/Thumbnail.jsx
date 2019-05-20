/* eslint-disable no-unused-vars */
import React from 'react';

const Thumbnail = props => (
  <div style={{
    width: '10%',
  }}>
    <img src={props.image.small} style={{
      width: '100%',
      height: '100%',
      cursor: 'pointer',
    }} onClick={props.clickHandler} index={props.index} />
  </div>
);

export default Thumbnail;
