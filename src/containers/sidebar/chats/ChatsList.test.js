import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { ChatsList } from './ChatsList';
// import undecorated component -
// Note the curly braces: grab the named export instead of default export

const props = [
  {
    id: '5ca0c0eb9839f35abe9d4836',
    preview: 'some text',
  },
  {
    id: '5ca0c0eb9839f35abe9d4837',
    preview: 'another text',
  },
];
describe('render ChatsList', () => {
  it('render correctly ChatsList component', () => {
    const ChatsListComponent = renderer.create(<ChatsList />).toJSON();
    expect(ChatsListComponent).toMatchSnapshot();
  });
  it('render correctly Chats items', () => {
    const wrapper = shallow(<ChatsList chats={props} />);
    expect(wrapper.at(0).find('ChatsItem')).toHaveLength(2);
  });
});

describe('invoking the "handleClicks" method from component instance', () => {
  it('click_count should be 1 by default and updated after the second invoking', () => {
    const wrapper = shallow(<ChatsList chats={props} />);
    const instance = wrapper.instance();
    expect(instance.click_count).toBe(1);
    instance.clickTimeout = 200;
    instance.handleClicks();
    expect(instance.click_count).toBe(2);
  });
});
