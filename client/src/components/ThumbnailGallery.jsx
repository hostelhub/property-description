/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import Thumbnail from './Thumbnail.jsx';

const ThumbnailGallery = props => (
    <div style={{
      height: '100px',
      width: '1100px',
      margin: '0 auto',
      display: 'flex',
    }}>
    {props.images.map((image, i) => <Thumbnail image={image} clickHandler={props.clickHandler} key={i} index={i} />)}
    </div>
);

export default ThumbnailGallery;
