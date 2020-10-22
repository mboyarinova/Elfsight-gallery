import React, {Component} from 'react';

class Photos extends Component {

  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {

    let allPhotos = this.state.data;
    if (allPhotos) {
      let photos = allPhotos.filter(
        photo => photo.albumId === this.props.albumId
      );
      return(
        <div>
          <h1>Альбом "{this.props.albumName}"</h1>
          <button onClick={() => this.props.action("photos", "albums")}>
            Вернуться в список альбомов
          </button>
          <div className="photos">
            {photos.map((photo, index) => (
              <div className="photo" key={index}>
                <img src={photo.thumbnailUrl} alt=""
                      />
              </div>
            ))}
          </div>
        </div>
      )
    }
    return <div />
  }

}

export default Photos;
