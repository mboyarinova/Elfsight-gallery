import React, {Component} from 'react';

class Albums extends Component {

  constructor(props) {
    super(props);
    this.state = {
      albumData: null,
      photoData: null
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(albumData => this.setState({ albumData }));
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(photoData => this.setState({ photoData }));
  }

  displayAlbum = album => {
    return this.props.action("albums", "photos", album.id, album.title);
  }

  render() {

    var allAlbums = this.state.albumData;
    var allPhotos = this.state.photoData;
    if (allAlbums && allPhotos) {
       let albums = allAlbums.filter(
           album => album.userId === this.props.authorId);
       var photos = albums.map(album => {
         return this.state.photoData.filter(
           photo => photo.albumId === album.id
         );
       });

       return (
         <div>
           <h1>Альбомы пользователя {this.props.authorName}</h1><br />
           <button onClick={() => this.props.action("albums", "authors")}>
             Вернуться в список пользователей
           </button>
           <div className="albums">
              {albums.map((album, index) => (
                <div className="album" key={index}>
                  <img src={photos[index][0].thumbnailUrl} alt=""
                       className="albumCover"
                       onClick={() => this.displayAlbum(album)} />
                  <h2 className="albumTitle"
                      onClick={() => this.displayAlbum(album)}>
                    {album.title}
                  </h2>
                  <h3>({photos[index].length} фотографий)</h3>
                </div>
              ))}
           </div>
         </div>
       )
    }

    return <div />;
  }
}

export default Albums;
