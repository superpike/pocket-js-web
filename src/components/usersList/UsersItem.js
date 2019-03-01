import React from 'react';

import styles from './UsersItem.module.css';

const UsersItem = ({name, id, onDeleteUser})  => (
        <li className = {styles.Item}>
            <div className = {styles.Avatar}>
                {/*<img src = {props.img} className = {styles.AvatarImg} alt = "#"/>*/}
                {/*<div className = {styles.OnlineMark}/>*/}
                <img src = 'https://partner.internet-akademia.ru/upload/site/user.png'
                    className = {styles.AvatarImg} alt = "#"/> {/*временный элемент*/}
            </div>
            <div className = {styles.Name}>
                {name}
            </div>
            <button
				className = {styles.Button}
				onClick = {() => {onDeleteUser(id)}}
            >
                <i className = {styles.ButtonIcon + ' fas fa-times'}/>
            </button>
        </li>
)


export default UsersItem;
