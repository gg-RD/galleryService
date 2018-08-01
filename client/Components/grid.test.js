import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Grid from './grid'
import sinon from 'sinon'
import styled from 'styled-components';
import renderer from 'react-test-renderer'

export const Img = styled.img `
	  border-style: none;
	  padding: 5px;
	  height: 350px;
	  width: 250px;
`


describe('Grid Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Grid />);
  });

  it()
});