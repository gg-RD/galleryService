import React from 'react';

import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import Grid from './grid'
import Gallery from '../gallery'
import Table from './table'

describe('Table Component', () => {
  it('changes state after click', () => {
  	const wrapper = mount(<Gallery />);
  	wrapper.find('.tableComp').simulate('click')
  	expect(wrapper.state().name).toEqual('flyknit')
  });
});