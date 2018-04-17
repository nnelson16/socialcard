import React, { Component } from 'react';
import FaCommentO from 'react-icons/lib/fa/comment-o';
import FaRetweet from 'react-icons/lib/fa/retweet';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import MdEmail from 'react-icons/lib/md/email';

class ReactionsBar extends Component {
  render() {
    return (
      <div id="reactionContainer">
        <span id="comments"><FaCommentO /></span>
        <span id="numComments">{this.props.numComments}</span>

        <span id="retweets"><FaRetweet /></span>
        <span id="numRetweets">{this.props.numRetweets}</span>

        <span id="hearts"><FaHeartO /></span>
        <span id="numHearts">{this.props.numHearts}</span>

        <span id="messageIcon"><MdEmail /></span>
      </div>
    )
  }
}

export default ReactionsBar;
