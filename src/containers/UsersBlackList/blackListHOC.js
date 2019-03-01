import React, { Component } from 'react';
import { getBlackList, clearToBlackList } from '../../store/actions';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import styles from '../../components/usersList/UsersList.module.css';

const blackListHOC = (WrappedComponent) => {
	class UsersBlackList extends Component {
		componentDidMount(){
			const {items, dispatch} = this.props;
			if (items === null){
				dispatch(getBlackList());
			}

		}

		componentWillUnmount(){
			this.props.dispatch(clearToBlackList());
		}

		renderContent = () => {
			const {items, errorMessage} = this.props;

			if (errorMessage !== null) return <div className = {styles.List}>errorMessage</div>;

			return items === null ? <Spinner/> : <WrappedComponent {...this.props}/>
		};

		render() {
			const {
				props: {
					title,
					usersListToggle
				},
				renderContent
			} = this;

			return (
				<Modal classesNames='UsersList'>
					<div className = {styles.Container}>
						<div className = {styles.Header}>
							{/*<img src = '#' className = {styles.Img} alt = "#"/>*/}
							<h3 className = {styles.Title}>
								{title}
							</h3>
							<div
								className = {styles.CloseBtn}
							 	onClick = {usersListToggle}
							>
								<i className = {styles.Icon + ' fas fa-angle-left'}/>
							</div>
						</div>
						{renderContent()}
					</div>
				</Modal>
			);
		}
	};

	function mapStateToProps(store) {
		return {
			items: store.contacts.blacklist,
			errorMessage: store.contacts.error_message,
		}
	}

	return connect(mapStateToProps)(UsersBlackList)
};

export default blackListHOC;
