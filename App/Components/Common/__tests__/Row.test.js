import React from 'react';
import {shallow} from 'enzyme';
import Row from '../Row';
import {TestHelpers} from '../../../Constants';

const {sampleText} = TestHelpers;

describe('<Row>', () => {
  const Component = <Row />;
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
    it('renders correctly if style prop is set', () => {
      const Clone = React.cloneElement(Component, {style: {backgroundColor: 'red'}});
      const wrapper = shallow(Clone);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
