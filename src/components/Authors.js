import React, {Component} from 'react';

class Authors extends Component {

  render() {
    var users = this.props.data;
    if (users) {
      let colorScheme = ['#8A4F7D', '#887880', '#88A096', '#BBAB8B', '#EF8275'];
      let styles = colorScheme.map(color => {
        return {backgroundColor: color};
      });
      return (
        <React.Fragment>
          <h1>Авторы альбомов</h1>
          <div className="authors">
            {users.map((user, index) => (
              <div className="author"
                   style={styles[index % colorScheme.length]}
                   key={index}
                   tabIndex="0"
                   onClick={() => this.props.action("authors", "albums",
                                    user.id, user.username)}
                   onKeyPress={() => this.props.action("authors", "albums",
                                    user.id, user.username)}>
                {user.username}
              </div>
            ))}
          </div>
        </React.Fragment>
      );
    }
    return <div />

  }
}

export default Authors;
