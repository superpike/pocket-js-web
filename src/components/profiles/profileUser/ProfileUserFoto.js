import React, { Component } from 'react';
import styles from './ProfileUser.module.css';
import avatar from '../../../images/personal_profile/avatar.svg';


class ProfileUserFoto extends Component {
    render() {
        return <img
            src={avatar}
            alt='#'
            className={ styles.header__avatar }
        />
    }
}

export default ProfileUserFoto;
