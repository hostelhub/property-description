/* eslint-disable no-unused-vars */
import React from 'react';

const Slide = (props) => {
  const slideStyles = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    height: '100%',
    width: '100%',
    display: 'inline-block',
  };

  return <div style={slideStyles} className='slide'></div>;
};

export default Slide;
