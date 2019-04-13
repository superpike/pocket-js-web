import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import GroupProfile from '../profiles/GroupProfile';

const defaultProps = {
  description: 'test group 1',
  name: 'group 1',
};

let component, node;

describe('GroupProfile test Component', () => {
  // простой тест на наличие тега h2 и наличие у него класса GroupName
  it('there is tag h2 and he has the class GroupName', () => {
    component = shallow(
      <GroupProfile profile={defaultProps} />
    );
    node = component.find('h2');
    expect(node.length).toEqual(1);
    expect(node.hasClass('GroupName')).toBeTruthy();
  });
  
  // проверка, что в тег h2 передалось имя группы из props
  it('group name from props, is transmitted in tag h2', () => {
    component = shallow(
      <GroupProfile profile={defaultProps} />
    );
    node = component.find('h2');
    expect(node.text()).toBe('group 1');
    console.log(node.debug());
  });

  // проверка, что в тег p, второй по счету, передалось описание группы из props (пока не работает)
  it('description group from props, is transmitted in tag p', ()=>{
    component = shallow(
      <GroupProfile profile={defaultProps} />
    );
  expect(component.contains( <p className="StatusText">test group 1</p>) ).toEqual(true);
  });
});

describe('GroupProfile test with mock function and snapshot', () => {
  // проверка, что компонент отрендерился корректно
  it('should render correctly', () => {
    const component = shallow(
      <GroupProfile profile={defaultProps} />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  // имитация нажатия на кнопку, когда в props передается метод getInviteCode()
  it('should click on method getInviteCode() on the button', ()=>{
    const mockFunc = jest.fn();
    const wrapper = shallow(
      <GroupProfile getInviteCode = {mockFunc} profile={defaultProps} />
    );
    wrapper.find('button').at(3).simulate('click');
    expect(mockFunc).toHaveBeenCalled();
  });
  
  // имитация нажатия на кнопку, когда в props передается метод profileToggle()
  it('should click on method profileToggle() on the button', ()=>{
    const mockFunc = jest.fn();
    const wrapper = shallow(
      <GroupProfile profileToggle = {mockFunc} profile={defaultProps} />
    );
    wrapper.find('button').at(5).simulate('click');
    expect(mockFunc).toHaveBeenCalled();
  });
});