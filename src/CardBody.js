import React, { Component } from 'react';

class CardBody extends Component {
  render () {
    const imageSource = '/images/' + this.props.img + '.jpg';
    return (
      <div id="cardBodyContainer">
        <div id="messageContainer">
          {this.props.message}
        </div>

        <div id="imageContainer">
          <img id="imgResource" src={imageSource}  alt="images go here" />
        </div>
      </div>
    )
  }
}

export default CardBody;
