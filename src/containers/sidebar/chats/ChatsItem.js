import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './ChatsItem.module.css';

const ChatsItem = props => (
    <div id="ChatsItem" className={styles.Block} onClick={() => props.handleClicks(props.id)}>
        <NavLink to={`/chats/${props.id}`}>
            <div className={styles.Item}>
                <div className={styles.Img}>
                    <img src="http://simsontraining.com/wp-content/uploads/2015/03/testimonial_icon-60x60.png" className={styles.Icon} alt="group_icon" />
                </div>
                <div className={styles.Chat}>
                    {/* <div className={styles.Title}>
                        {props.name}
                    </div> */}
                    <div className={styles.Text}>
                        {props.preview}
                    </div>
                </div>
                {/* <div className={styles.Unread}>
                    {props.unread}
                </div> */}
                {/* <div className={styles.Time}>
                    {props.time}
                </div> */}
                {/* <div className={styles.Mark}>
                </div> */}
            </div>
        </NavLink>
    </div>
);

export default ChatsItem;
