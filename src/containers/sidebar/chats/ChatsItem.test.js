import React from 'react';
import '../../../../setupTests';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';

import ChatsItem from './ChatsItem';

describe('render ChatsItem', () => {
  it('render correctly ChatsItem component', () => {
    const ChatsItemComponent = renderer.create(<Router><ChatsItem /></Router>).toJSON();
    expect(ChatsItemComponent).toMatchSnapshot();
  });
  it('render with props correctrly', () => {
    const props = {
      id: '5ca0c0eb9839f35abe9d4836',
      preview: 'some text',
    };
    const ChatsItemComponent = mount(<Router><ChatsItem {...props} /></Router>);
    expect(ChatsItemComponent.find('.Block').length).toEqual(1);
  });
});
