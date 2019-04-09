/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow } from 'enzyme';

import App from '../client/src/components/App.jsx';
import LeftArrow from '../client/src/components/LeftArrow.jsx';
import RightArrow from '../client/src/components/RightArrow.jsx';
import Slide from '../client/src/components/Slide.jsx';
import Thumbnail from '../client/src/components/Thumbnail.jsx';

describe('Component Test Suite', () => {
  it('App should exist', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('LeftArrow should exist', () => {
    const wrapper = shallow(<LeftArrow />);
    expect(wrapper.exists()).toBe(true);
  });

  it('RightArrow should exist', () => {
    const wrapper = shallow(<RightArrow />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Slide should exist', () => {
    const wrapper = shallow(<Slide />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Thumbnail should exist', () => {
    const wrapper = shallow(<Thumbnail />);
    expect(wrapper.exists()).toBe(true);
  });
});
