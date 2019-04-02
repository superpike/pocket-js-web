import React from 'react';

import {setActiveChat, getGroupProfile} from '../../../store/actions/index';
import {connect} from 'react-redux';

import ChatsItem from './ChatsItem';
// import GroupProfile from '../../../components/profiles/GroupProfile';
// import Modal from  '../../../components/UI/Modal/Modal';


import styles from './ChatsList.module.css';

class ChatsList extends React.Component {

    clickTimeout = null;
    click_count = 1;

    state = {
        id: null
    }

    handleClicks = (id) => {
        if (this.clickTimeout !== null) {
            this.click_count++;
        } else {
            this.clickTimeout = setTimeout(() => {
                //один клик
                if(this.click_count === 1){
                    this.props.dispatch(setActiveChat(id, 1));
                    console.log('один клик');
                    this.setState({id: id});
                //два клика
                // ----старое -----
                // } else if (id === this.state.id){
                //     this.setState({modal: true});
                // }
                } else {
                    this.props.dispatch(getGroupProfile(id)).then(() => {
                        this.props.openProfile();
                        console.log('двойной клик данные пришли');
                    })
                    console.log('двойной клик');
                }
                this.click_count = 1;
                clearTimeout(this.clickTimeout);
                this.clickTimeout = null
            }, 300)

        }
    }

    // getInviteCode = () => {
    //     this.props.dispatch(getInviteCode(this.state.id));
    // }

    render(){

        if(!this.props.chats.length){
            return null; //Если данные еще загружаются
        }


        let chats = this.props.chats.map((chat, index) => {
            return <ChatsItem key = {index}
                              handleClicks = {this.handleClicks}
                            {...chat}/>
        });

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

function mapStateToProps(store) {
    return {
        // chats: store.chats.chats,
        // group: store.chats.group,
        id: store.messages.id,
        // activeChat: store.messages.active,
        // is_loading: store.chats.is_loading,
        // invitation_link: store.chats.invitation_link
    }
}

export default connect(mapStateToProps)(ChatsList);
