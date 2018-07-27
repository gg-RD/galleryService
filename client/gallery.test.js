import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Grid from './Components/grid'
//import Gallery from './gallery'

describe('Grid Component', () => {
	it('Grid Component should render as expected', () => {
		const wrapper = shallow(<Grid />)
		expect(wrapper).toMatchSnapshot();
	})
})

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});