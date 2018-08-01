import React from 'react';

import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Grid from './Components/grid'
import Gallery from './gallery'
import Table from './Components/table'


describe('Gallery Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Gallery />);
  });
  //check if Gallery is a component by giving it prop
  it('allows us to set props', () => {
    const wrapper = mount(<Gallery bar="baz" />);
    expect(wrapper.props().bar).toEqual('baz');
    wrapper.setProps({ bar: 'foo' });
    expect(wrapper.props().bar).toEqual('foo');
  });

  it('has child component', () => {
    const wrapper = mount(<Gallery />);
    const table = wrapper.find(Table).find('#secondImg');
    table.simulate('click')
    console.log(wrapper.state());
    //console.log(wrapper.state())
  });

});


