import React from 'react';
import propTypes from 'prop-types';
import classes from './MessageListToday.module.css';
import pic from './img/woman-4.png';

const SingleMessage = ({ message, outputTime }) => {
  if (message) {
    let StyleBlock;
    let StyleBlockSms;
    let StyleSuperBlock;
    let StyleTime;
    if (message.receiver === 55 || message.author === 'Вы') {
      StyleBlock = classes.blockMy;
      StyleBlockSms = classes.blockSmsMy;
      StyleSuperBlock = classes.superBlockMy;
      StyleTime = classes.timeMy;
    } else {
      StyleBlock = classes.block;
      StyleBlockSms = classes.blockSms;
      StyleSuperBlock = classes.superBlock;
      StyleTime = classes.time;
    }
    return (
      <div className={StyleSuperBlock}>
        {/* <img className={classes.miniFoto} src="./img/woman-4.png" /> */}
        <div>
          <img className={classes.miniFoto} src={pic} alt="avatar" />
        </div>
        <div className={StyleBlock}>
          <div className={StyleBlockSms}>
            <div className={classes.name}>
              {message.author}
            </div>
            <div className={classes.text}>
              {message.message}
            </div>
          </div>
          <div className={StyleTime}>
            {outputTime.toLocaleTimeString()}
          </div>
        </div>
      </div>
    );
  }
  return null;
};

SingleMessage.propTypes = {
  outputTime: propTypes.instanceOf(Date).isRequired,
  message: propTypes.shape({
    message: propTypes.string.isRequired,
    author: propTypes.string.isRequired,
    receiver: propTypes.number.isRequired,
  }),
};

export default SingleMessage;
