import React from 'react';
import {shallow} from 'enzyme';
import Center from '../Center';
import {TestHelpers} from '../../../Constants';

const {sampleText} = TestHelpers;

describe('<Center>', () => {
  const Component = <Center />;
  describe('Structure', () => {
    it('renders correctly', () => {
      const wrapper = shallow(Component);
      expect(wrapper).toMatchSnapshot();
    });
    it('renders correctly if style props is set', () => {
      const Clone = React.cloneElement(Component, {style: {color: 'red'}});
      const wrapper = shallow(Clone);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
