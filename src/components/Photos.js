import React, {Component} from 'react';
import Popup from './Popup';

class Photos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      photoId: -1,
      photoUrl: null
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  handlePopup = (id, url) => {
    this.setState({
      photoId: id,
      photoUrl: url
    });
    document.getElementsByClassName("main-body")[0].style.display = "none";
    document.getElementsByClassName("popup")[0].style.display = "inline-block";
  }

  render() {

    //console.log(this.state.photoId, this.state.photoUrl);

    let allPhotos = this.state.data;
    if (allPhotos) {
      let photos = allPhotos.filter(
        photo => photo.albumId === this.props.albumId
      );
      return(
        <div>
          <div className="main-body">
            <h1>Альбом "{this.props.albumName}"</h1>
            <button onClick={() => this.props.action("photos", "albums")}>
              Вернуться в список альбомов
            </button>
            <div className="photos">
              {photos.map((photo, index) => (
                <div className="photo" key={index}>
                  <img src={photo.thumbnailUrl} alt=""
                       onClick={() => this.handlePopup(photo.id, photo.url)} />
                </div>
              ))}
            </div>
          </div>
          <Popup photoId={this.state.photoId} photoUrl={this.state.photoUrl}
                 photos={photos} />
        </div>
      )
    }
    return <div />
  }

}

export default Photos;
