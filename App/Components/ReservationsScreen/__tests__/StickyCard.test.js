import React from 'react';
import {shallow} from 'enzyme';
import StickyCard from '../StickyCard';
import {TestHelpers} from '../../../Constants';

const {sampleText} = TestHelpers;

describe('<StickyCard>', () => {
  const Component = <StickyCard />;
  describe('Structure', () => {
    it('renders correctly', () => {
      const wrapper = shallow(Component);
      expect(wrapper).toMatchSnapshot();
    });
    it('renders correctly if children prop is set', () => {
      const Clone = React.cloneElement(Component, {children: sampleText});
      const wrapper = shallow(Clone);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
