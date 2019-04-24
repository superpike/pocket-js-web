import React from 'react';
import '../../../setupTests';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import { MenuItem } from './MenuItem';


const props = {
  icon: ' fas fa-user-times',
  text: 'Выйти',
  href: '/auth',
};
describe('render MenuItem', () => {
  it('render correctly MenuItem component', () => {
    const MenuItemComponent = renderer.create(<Router><MenuItem {...props} /></Router>).toJSON();
    expect(MenuItemComponent).toMatchSnapshot();
  });
  it('render with props correctrly (link)', () => {
    const MenuItemComponent = mount(<Router><MenuItem {...props} /></Router>);
    expect(MenuItemComponent.find('a').length).toEqual(1);
  });
  it('render with props correctrly (not link)', () => {
    const propsForDiv = {
      icon: ' fa-user-slash',
      text: 'Черный список',
      href: null,
    };
    const MenuItemComponent = mount(<Router><MenuItem {...propsForDiv} /></Router>);
    expect(MenuItemComponent.find('div').length).toEqual(1);
  });
});
