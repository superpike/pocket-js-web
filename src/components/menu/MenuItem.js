import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { logoutUser } from '../../store/actions';
import { connect } from 'react-redux';

import styles from './MenuItem.module.css';

export class MenuItem extends Component {

	onClick = (text) => {
		if(text === 'Выйти'){
			this.props.dispatch(logoutUser());
		}else if(text === 'Черный список'){
			this.props.usersListToggle();
		}
	}

	render() {
		let item = (this.props.href === null) ? (
			<div className={styles.Item} onClick={() => {this.onClick(this.props.text)}}>
				<i className={styles.Icon + this.props.icon} />
				<p className={styles.Text}>{this.props.text}</p>
			</div>
		) :
			<Link to={this.props.href} className={styles.Item} onClick={() => {this.onClick(this.props.text)}}>
				<i className={styles.Icon + this.props.icon} />
				<p className={styles.Text}>{this.props.text}</p>
			</Link>
		return (
			<>
				{item}
			</>
		)
	}
}

export default connect()(MenuItem);

