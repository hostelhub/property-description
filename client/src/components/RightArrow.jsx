/* eslint-disable no-unused-vars */
import React from 'react';

const RightArrow = (props) => {
  const RightArrowStyles = {
    position: 'absolute',
    top: '50%',
    right: '25px',
    zindex: '999',
    color: '#fff',
    cursor: 'pointer',
  };

  return (
    <div className='nextArrow' onClick={props.goToNextSlide} style={RightArrowStyles}>
      <i className='fa fa-arrow-right fa-2x' aria-hidden='true'></i>
    </div>
  );
};

export default RightArrow;
