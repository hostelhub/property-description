/* eslint-disable no-unused-vars */
import React from 'react';

const LeftArrow = (props) => {
  const LeftArrowStyles = {
    position: 'absolute',
    top: '50%',
    left: '25px',
    zindex: '999',
    color: '#fff',
    cursor: 'pointer',
  };

  return (
    <div className='backArrow' onClick={props.goToPrevSlide} style={LeftArrowStyles}>
      <i className='fa fa-arrow-left fa-2x' aria-hidden='true'></i>
    </div>
  );
};

export default LeftArrow;
