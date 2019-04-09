import React from 'react';

import {setActiveChat, getGroupProfile} from '../../../store/actions/index';
import {connect} from 'react-redux';

import ChatsItem from './ChatsItem';

import styles from './ChatsList.module.css';

export class ChatsList extends React.Component {

    clickTimeout = null;
    click_count = 1;

    handleClicks = (id) => {
        if (this.clickTimeout !== null) {
            this.click_count++;
        } else {
            this.clickTimeout = setTimeout(() => {
                //один клик
                if(this.click_count === 1){
                    this.props.dispatch(setActiveChat(id, 1));
                //два клика
                } else {
                    this.props.dispatch(getGroupProfile(id)).then(() => {
                        this.props.openProfile();
                    })
                }
                this.click_count = 1;
                clearTimeout(this.clickTimeout);
                this.clickTimeout = null
            }, 300)
        }
    }

    render(){
        let chats = this.props.chats.map((chat, index) => {
            return <ChatsItem key = {index}
                              handleClicks = {this.handleClicks}
                            {...chat}/>
        }) : [];
        return (
            <>
                <div className = {styles.List}>
                    { chats }
                </div>
                <div className = {styles.ButtonsBlock}>
                    <button className = {styles.Button} onClick = {this.props.createGroup} >
                        <div>
                            <i className = {styles.ButtonIcon + ' fas fa-check'}/>
                        </div>
                        <span className = {styles.ButtonText}>Создать группу</span>
                    </button>
                    <button className = {styles.Button} onClick = {this.props.searchGroup} >
                        <div className = {styles.ButtonIcon}>+</div>
                        <span className = {styles.Text}> Добавить группу</span>
                    </button>
                </div>
            </>
        );
    }
}

export default connect()(ChatsList)