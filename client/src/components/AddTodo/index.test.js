import React from 'react';
import AddTodo from '.';
import configureStore from 'redux-mock-store';
const mockStore = configureStore();
import renderer from 'react-test-renderer';

const createExampleProps = () => ({
  dispatch: jest.fn(),
  store: mockStore(),
});

describe('<AddTodo />', () => {
  it('renders properly', () => {
    const exampleProps = createExampleProps();

    expect(renderer.create(<AddTodo {...exampleProps} />).toJSON()).toMatchSnapshot();
  })
})
