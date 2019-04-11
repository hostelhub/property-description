/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import ThumbnailGallery from './ThumbnailGallery.jsx';
import Modal from './Modal.jsx';
import '../../dist/styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      currentIndex: 0,
      modal: false,
    };
  }

  componentDidMount = () => {
    const Id = window.location.pathname.split('/')[2];
    axios.get(`/api/hostels/${Id}`)
      .then(response => (
        this.setState({
          images: response.data[0].photos,
        })
      ))
      .catch(error => console.log(error));
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex !== 0) {
      this.setState({
        currentIndex: this.state.currentIndex - 1,
      });
    }
  }

  goToNextSlide = () => {
    if (this.state.currentIndex !== this.state.images.length - 1) {
      this.setState({
        currentIndex: this.state.currentIndex + 1,
      });
    }
  }

  clickHandler = (e) => {
    if (e.target.getAttribute('index') !== this.state.currentIndex) {
      this.setState({
        currentIndex: Number(e.target.getAttribute('index')),
        modal: true,
      });
    }
  };

  closeModal = () => {
    this.setState({ modal: false });
  }

  render() {
    const renderModal = this.state.modal ? <Modal goToNextSlide={this.goToNextSlide}
      goToPrevSlide={this.goToPrevSlide}
      closeModal={this.closeModal}
      currentIndex={this.state.currentIndex}
      images={this.state.images}
      clickHandler={this.clickHandler} />
      : <ThumbnailGallery images={this.state.images} clickHandler={this.clickHandler} />;

    return (
      <div>
        {renderModal}
      </div>
    );
  }
}

export default App;
window.Photos = App;
