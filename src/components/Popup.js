import React, {Component} from 'react';

class Popup extends Component {

  handleClose = () => {
  document.getElementsByClassName("popup")[0].style.display = "none";
  document.getElementsByClassName("main-body")[0].style.display = "block";
}



  render() {
    return (
      <div className="popup">
        <button className="close-button" onClick={this.handleClose}>
          &times;
        </button>
        <img className="popup-img" alt="" src={this.props.photoUrl} />
      </div>
    );
  }
}

export default Popup;
