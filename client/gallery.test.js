import React from 'react';

import { shallow } from 'enzyme';
import sinon from 'sinon';

import Grid from './Components/grid'
import Gallery from './gallery'

describe('Gallery Component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Gallery />);

  });

  // it('allows us to set props', () => {
  //   const wrapper = mount(<Foo bar="baz" />);
  //   expect(wrapper.props().bar).to.equal('baz');
  //   wrapper.setProps({ bar: 'foo' });
  //   expect(wrapper.props().bar).to.equal('foo');
  // });

  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = mount((
  //     <Foo onButtonClick={onButtonClick} />
  //   ));
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick.calledOnce).to.equal(true);
  // });
});

// describe('Grid Component', () => {
// 	it('Grid Component should render as expected', () => {
// 		const wrapper = shallow(<Grid />)
// 		expect(wrapper).toMatchSnapshot();
// 	})
// })
