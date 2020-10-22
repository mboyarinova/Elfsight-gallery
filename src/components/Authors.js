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
    let colorScheme = ['#8A4F7D', '#887880', '#88A096', '#BBAB8B', '#EF8275'];
    let styles = colorScheme.map(color => {
      return {backgroundColor: color};
    });
    if (users) {
      return (
        <div>
          <h1>Авторы альбомов</h1><br />
          <div className="authors">
            {users.map((user, index) => (
              <div className="author"
                   style={styles[index % colorScheme.length]}
                   key={index}
                   onClick={() => this.props.action("authors", "albums",
                                    user.id, user.username)}>
                {user.username}
              </div>
            ))}
          </div>
        </div>
      );
    }
    return <div />

  }
}

export default Authors;
