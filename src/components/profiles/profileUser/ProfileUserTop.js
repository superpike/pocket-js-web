import React, { Component } from 'react';
import ProfileUserFoto from './ProfileUserFoto';

class ProfileUserTop extends Component {
  render() {
    return <ProfileUserFoto avatar={this.props.avatar}/>;
  }
}
export default ProfileUserTop;
