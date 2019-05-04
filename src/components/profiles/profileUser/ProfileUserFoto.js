import React, { Component } from 'react';
import styles from './ProfileUser.module.css';

class ProfileUserFoto extends Component {
  render() {
    return <img src={(this.props.avatar === null) ? require('../../../images/personal_profile/avatar.svg') : this.props.avatar} alt="#" className={styles.header__avatar} />;
  }
}

export default ProfileUserFoto;
