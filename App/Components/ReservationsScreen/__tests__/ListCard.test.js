import React from 'react';
import {shallow} from 'enzyme';
import ListCard from '../ListCard';
import {TestHelpers} from '../../../Constants';

const {sampleText} = TestHelpers;

describe('<ListCard>', () => {
  const Component = <ListCard />;
  describe('Structure', () => {
    it('renders correctly if data props is set', () => {
      const Clone = React.cloneElement(Component, {data: {name: sampleText}});
      const wrapper = shallow(Clone);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
