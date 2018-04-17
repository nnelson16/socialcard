import React, { Component } from 'react';
import UserInfoBar from './UserInfoBar';
import CardBody from './CardBody';
import ReactionsBar from './ReactionsBar';

class SocialCard extends Component {
  render() {
    return (
      <div id="socialCardContainer">
        <UserInfoBar displayName={this.props.displayName} handle={this.props.handle} date={this.props.date}/>
        <CardBody message={this.props.message} img={this.props.img} />
        <ReactionsBar numComments={this.props.numComments} numRetweets={this.props.numRetweets} numHearts={this.props.numHearts}/>
      </div>
    )
  }
}
export default SocialCard;
