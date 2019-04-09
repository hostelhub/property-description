/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import Slide from './Slide.jsx';
import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import ThumbnailGallery from './ThumbnailGallery.jsx';

const sliderStyle = {
  height: '520px',
  width: '900px',
  position: 'relative',
  margin: '0 auto',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
};

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [
        'https://s3-us-west-1.amazonaws.com/hackreactorfrontendcapstone/hrsf114-front-end-capstone-pics/sample26.jpg',
        'https://s3-us-west-1.amazonaws.com/hackreactorfrontendcapstone/hrsf114-front-end-capstone-pics/sample14.jpg',
        'https://s3-us-west-1.amazonaws.com/hackreactorfrontendcapstone/hrsf114-front-end-capstone-pics/sample43.jpg',
        'https://s3-us-west-1.amazonaws.com/hackreactorfrontendcapstone/hrsf114-front-end-capstone-pics/sample22.jpg',
        'https://s3-us-west-1.amazonaws.com/hackreactorfrontendcapstone/hrsf114-front-end-capstone-pics/sample8.jpg',
        'https://s3-us-west-1.amazonaws.com/hackreactorfrontendcapstone/hrsf114-front-end-capstone-pics/sample17.jpg',
        'https://s3-us-west-1.amazonaws.com/hackreactorfrontendcapstone/hrsf114-front-end-capstone-pics/sample33.jpg',
        'https://s3-us-west-1.amazonaws.com/hackreactorfrontendcapstone/hrsf114-front-end-capstone-pics/sample19.jpg',
        'https://s3-us-west-1.amazonaws.com/hackreactorfrontendcapstone/hrsf114-front-end-capstone-pics/sample2.jpg',
        'https://s3-us-west-1.amazonaws.com/hackreactorfrontendcapstone/hrsf114-front-end-capstone-pics/sample5.jpg',
      ],
      currentIndex: 0,
      translateValue: 0,
    };
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex !== 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1,
        translateValue: this.state.translateValue + this.slideWidth(),
      });
    }
  }

  goToNextSlide = () => {
    if (this.state.currentIndex !== this.state.images.length - 1) {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
        translateValue: this.state.translateValue + -(this.slideWidth()),
      });
    }
  }

  slideWidth = () => document.querySelector('.slide').clientWidth;

  clickHandler = (e) => {
    const difference = e.target.getAttribute('index') - this.state.currentIndex;

    if (e.target.getAttribute('index') !== this.state.currentIndex) {
      this.setState({
        currentIndex: Number(e.target.getAttribute('index')),
        translateValue: this.state.translateValue - (this.slideWidth() * difference),
      });
    }
  };

  render() {
    return (
      <div>
        <div style={sliderStyle} className='slider'>
          <div className='slider-wrapper' style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s',
            position: 'relative',
            height: '100%',
            width: '100%',
          }}>
            {
              this.state.images.map((image, i) => (
                <Slide key={i} image={image} />
              ))
            }
          </div>

          <LeftArrow goToPrevSlide={this.goToPrevSlide} />
          <RightArrow goToNextSlide={this.goToNextSlide} />
        </div>
        <ThumbnailGallery images={this.state.images} clickHandler={this.clickHandler.bind(this)} />
      </div>
    );
  }
}

export default Slider;
