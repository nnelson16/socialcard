import React, { Component } from 'react';
import FaAngleDown from 'react-icons/lib/fa/angle-down';

class UserInfoBar extends Component {
  render() {
    const userAvatar = 'https://api.adorable.io/avatars/285/' + this.props.displayName + '.png';
    return(
      <div id="userInfoBar">
        <img src={userAvatar} id="infoBarImage" alt="user avatar" />
        <div id="infoBarText">
          <span id="displayName">{this.props.displayName}</span>
          <span id="handle">@{this.props.handle}</span>
          <span id="dotSeparator">&middot;</span>
          <span id="date">{this.props.date}</span>

          <span id="chevronContainer">
            <FaAngleDown />
          </span>
        </div>
      </div>
    )
  }
}

export default UserInfoBar;
