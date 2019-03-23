import React from 'react';

import ChatsList from './ChatsList';
import CreateGroup from '../../group/Create/CreateGroup';
import SearchGroup from '../../group/Search/SearchGroup';
import GroupProfile from '../../../components/profiles/GroupProfile';
import Modal from  '../../../components/UI/Modal/Modal';

import Spinner from '../../../components/UI/Spinner/Spinner';

import {getChats, searchGroup} from '../../../store/actions/index';

import {connect} from 'react-redux';



class Chats extends React.Component {

    state = {
        active: 1,
        modal: false
    };

	componentDidMount(){
        this.props.dispatch(getChats());
	}

    searchGroup = (name) => {
        this.props.dispatch(searchGroup(name));
    }

    profileToggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    openProfile = () => {
        this.setState({ modal: true });
        console.log(this.state.modal);
    }
    switchComponent() {
        switch(this.state.active) {
            case 1:
                return (
                    <ChatsList 
                    chats={this.props.chats}
                    createGroup = {() => {this.setState({active: 2})}}
                    searchGroup = {() => {this.setState({active: 3})}}
                    openProfile = {this.openProfile}
                    />
                );
            break;
            case 2:
                return (
                    <CreateGroup
                    closeForm = {() => {this.setState({active: 1})}}/>
                );
            break;
            case 3:
                return (
                    <SearchGroup
                    closeForm = {() => {this.setState({active: 1})}}
                    searchGroup = {this.searchGroup}/>
                );
            break;
            default:
                console.log(this.state.active);
            break;
        }
    }

    
	render() {
		if(this.props.is_loading){
            return <Spinner />
        }
        let profile = this.state.modal ? (
            <>
                <Modal classesNames = 'Profile'>
                    <GroupProfile id = 'Profile'
                                profile = {this.props.group}
                                // invitation_link = {this.props.invitation_link}
                                profileToggle = {this.profileToggle}
                                // getInviteCode = {this.getInviteCode}
                                />
                </Modal>
            </>
        ) : null;

        return (
            <>
                { this.switchComponent() }
                <div>
                { profile }
                </div>
            </>

        );
    }
}

function mapStateToProps(store) {
    return {
        chats: store.chats.chats,
        group: store.chats.group,
        is_loading: store.chats.is_loading,
    }
}


export default connect(mapStateToProps)(Chats);




