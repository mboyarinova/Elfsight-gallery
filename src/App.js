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
      photoId: null,
      authorData: null,
      albumData: null,
      photoData: null
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(authorData => this.setState({ authorData }));
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(albumData => this.setState({ albumData }));
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(photoData => this.setState({ photoData }));
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
    if (this.state.authorData && this.state.albumData && this.state.photoData) {
      var page;
      switch(this.state.page) {
        case "authors":
          page = <Authors action={this.pageHandler}
                          data={this.state.authorData} />;
          break;
        case "albums":
          page = <Albums action={this.pageHandler}
                         authorId={this.state.authorId}
                         authorName={this.state.authorName}
                         albumData={this.state.albumData}
                         photoData={this.state.photoData} />;
          break;
        case "photos":
          page = <Photos action={this.pageHandler}
                         albumId={this.state.albumId}
                         albumName={this.state.albumName}
                         authorName={this.state.authorName}
                         data={this.state.photoData} />;
          break;
        default:
          break;
      }
      return <div className="app">{page}</div>;
    } else {
      return <div />
    }
  }
}

export default App;
