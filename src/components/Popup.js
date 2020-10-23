import React, {Component} from 'react';

class Popup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photoId: this.props.photoId,
      photoUrl: this.props.photoUrl,
      prevButton: true,
      nextButton: true
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.photoId !== prevProps.photoId) {
      this.setState({
        photoId: this.props.photoId,
        photoUrl: this.props.photoUrl
      })
    }
  }

  changePhoto = index => {
    let photos = this.props.photos;
    let currIndex = photos.findIndex(photo => photo.id === this.state.photoId);
    let newPhoto = photos[currIndex + index];
    this.setState({
      photoId: newPhoto.id,
      photoUrl: newPhoto.url
    });
  }

  handleClose = () => {
  document.getElementsByClassName("popup")[0].style.display = "none";
  document.getElementsByClassName("main-body")[0].style.display = "block";
}

  render() {

    var photos = this.props.photos;

    var prevButton;
    if (photos.findIndex(photo => photo.id === this.state.photoId)) {
      prevButton = <div className="prev" onClick={() => this.changePhoto(-1)}>&#10094;</div>
    } else {
      prevButton = null
    };

    var nextButton;
    if (photos.findIndex(photo => photo.id === this.state.photoId) !== photos.length-1) {
      nextButton = <div className="next" onClick={() => this.changePhoto(1)}>&#10095;</div>
    } else {
      nextButton = null
    };

    return (
      <div className="popup">
        <button className="close-button" onClick={this.handleClose}>
          &times;
        </button>
        <img className="popup-img" alt="" src={this.state.photoUrl} />
        {prevButton}
        {nextButton}
      </div>
    );
  }
}

export default Popup;
