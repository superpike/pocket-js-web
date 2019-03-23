import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './ChatsItem.module.css';

export default class ChatsItem extends Component {
  render() {
    // const ChatsItem = (props)  => {
    return (
      <div className={styles.Block} onClick={() => this.props.handleClicks(this.props.id)}>
        <NavLink to={`/chats/${this.props.id}`}>
          <div className={styles.Item}>
            <div className={styles.Img}>
              <img src='http://simsontraining.com/wp-content/uploads/2015/03/testimonial_icon-60x60.png' className={styles.Icon} alt="group_icon" />
            </div>

            <div className={styles.Chat}>
              <div className={styles.Title}>
                {this.props.name}
              </div>
              <div className={styles.Text}>
                {this.props.preview}
              </div>
            </div>
            <div className={styles.Unread}>
              {this.props.unread}
            </div>
            <div className={styles.Time}>
              {this.props.time}
            </div>
            <div className={styles.Mark}>
              {/* props.mark */}
            </div>
          </div>
        </NavLink>
      </div>
    );
  }
}
// export default ChatsItem;
