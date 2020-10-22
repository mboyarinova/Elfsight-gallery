import React, {Component} from 'react';
import './App.css';
import Authors from './components/Authors';
import Albums from './components/Albums';
import Photos from './components/Photos';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      page: "authors",
      authorId: null,
      authorName: null,
      albumId: null,
      albumName: null,
      photoId: null
    }
  }

  pageHandler = (prevPage, newPage, id, name) => {
    if (prevPage === "photos") {
      this.setState({
        page: "albums",
        albumId: null,
        albumName: null
      });
    } else if (prevPage === "albums") {
      if (newPage === "photos") {
        this.setState({
          page: newPage,
          albumId: id,
          albumName: name
        });
      } else {
        this.setState({
          page: newPage,
          albumId: null,
          albumName: null
        });
      }
    } else {
      this.setState({
        page: newPage,
        authorId: id,
        authorName: name
      });
    }
  }

  render() {
    var page;
    switch(this.state.page) {
      case "authors":
        page = <Authors action={this.pageHandler} />;
        break;
      case "albums":
        page = <Albums action={this.pageHandler} authorId={this.state.authorId}
                       authorName={this.state.authorName} />;
        break;
      case "photos":
        page = <Photos action={this.pageHandler} albumId={this.state.albumId}
                       albumName={this.state.albumName} />;
        break;
      default:
        break;
    }

    return <div className="App">{page}</div>;
  }
}

export default App;
