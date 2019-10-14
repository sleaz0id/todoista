import React from 'react';
import App from '.';
import { shallow } from 'enzyme';

describe('<App />', () => {
  it('renders properly', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  })
})
