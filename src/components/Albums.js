import React, {Component} from 'react';

class Albums extends Component {

  displayAlbum = album => {
    return this.props.action("albums", "photos", album.id, album.title);
  }

  render() {

    var allAlbums = this.props.albumData;
    var allPhotos = this.props.photoData;
    if (allAlbums && allPhotos) {
       let albums = allAlbums.filter(
           album => album.userId === this.props.authorId);
       var photos = albums.map(album => {
         return allPhotos.filter(
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
