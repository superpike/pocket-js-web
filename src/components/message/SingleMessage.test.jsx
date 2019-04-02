import React from 'react';
import { shallow } from 'enzyme';
import SingleMessage from './SingleMessage';

describe('SingleMessage', () => {
  const time = new Date();
  const snapshoot = (message, outputTime) => {
    const wrapper = shallow(<SingleMessage message={message} outputTime={outputTime} />);
    it(`message.message=${message.message}, outpitTime=${outputTime}`, () => {
      expect(wrapper).toMatchSnapshot();
    });
  };

  snapshoot({ message: 'you', author: 'Вы', receiver: 1 }, time);
  snapshoot({ message: 'Clown', author: 'Clown', receiver: 55 }, time);
  snapshoot({ message: 'Clown', author: 'Clown', receiver: 155 }, time);
});
