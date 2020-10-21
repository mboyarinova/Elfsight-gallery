import React, {Component} from 'react';

class Authors extends Component {

  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    var users = this.state.data;
    if (users) {
      return (
        <div id="authors">
          {users.map(user => (
            <div className="author">
              {user.username}
            </div>
          )
        )}
        </div>
      );
    }
    return <div />

  }
}

export default Authors;
