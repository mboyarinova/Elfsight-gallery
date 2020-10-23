import React, {Component} from 'react';
import Popup from './Popup';

class Photos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photoId: -1,
      photoUrl: null
    };
  }

  handlePopup = (id, url) => {
    this.setState({
      photoId: id,
      photoUrl: url
    });
    document.getElementsByClassName("photos")[0].style.display = "none";
    document.getElementsByClassName("popup")[0].style.display = "inline-block";
  }

  render() {

    let allPhotos = this.props.data;
    if (allPhotos) {
      let photos = allPhotos.filter(
        photo => photo.albumId === this.props.albumId
      );
      return(
        <React.Fragment>
          <h1>Альбом "{this.props.albumName}"</h1>
          <h2>Автор: {this.props.authorName}</h2>
          <button onClick={() => this.props.action("photos", "albums")}>
            Вернуться в список альбомов
          </button>
          <div className="photos">
            {photos.map((photo, index) => (
              <div className="photo" key={index}>
                <img src={photo.thumbnailUrl} alt="" tabIndex="0"
                      onClick={() => this.handlePopup(photo.id, photo.url)}
                      onKeyPress={() => this.handlePopup(photo.id, photo.url)}/>
              </div>
            ))}
          </div>
          <Popup photoId={this.state.photoId} photoUrl={this.state.photoUrl}
                 photos={photos} />
        </React.Fragment>
      )
    }
    return <div />
  }

}

export default Photos;
