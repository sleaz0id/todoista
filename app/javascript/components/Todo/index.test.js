import React from 'react';
import Todo from '.';
import { mount } from 'enzyme';
import sinon from 'sinon';

const generateDefaultProps = () => ({
  text: 'test',
  completed: false,
  onClick: jest.fn(),
})

describe('<Todo />', () => {
  const defaultProps = generateDefaultProps();

  it ('allows to set props', () => {
    const component = mount(<Todo {...defaultProps} />);
    expect(component.props().completed).toEqual(false);

    component.setProps({ completed: true })
    expect(component.props().completed).toEqual(true);
  });

  it('simulates click events', () => {
    const onClick = sinon.spy();
    defaultProps.onClick = onClick;
    const component = mount(<Todo {...defaultProps} />);

    component.find('div').simulate('click');
    expect(onClick).toHaveProperty('callCount', 1);
  });
})
