import React, {Component} from 'react';
import './App.css';
import Authors from './components/Authors';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      page: "authors"
    }
  }

  pageHandler = (newPage, id) => {
    this.setState({
      page: newPage
    })
  }

  render() {
    var page;
    switch(this.state.page) {
      case "authors":
        page = <Authors action={this.pageHandler} />
        break;
      default:
        break;
    }

    return <div className="App">{page}</div>;
  }
}

export default App;
