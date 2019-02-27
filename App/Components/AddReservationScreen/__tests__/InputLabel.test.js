import React from 'react';
import {shallow} from 'enzyme';
import InputLabel from '../InputLabel';
import {TestHelpers} from '../../../Constants';

const {sampleText} = TestHelpers;

describe('<InputLabel>', () => {
  const Component = <InputLabel />;
  describe('Structure', () => {
    it('renders correctly', () => {
      const wrapper = shallow(Component);
      expect(wrapper).toMatchSnapshot();
    });
    it('renders correctly if containerStyle prop is set', () => {
      const Clone = React.cloneElement(Component, {containerStyle: {color: 'red'}});
      const wrapper = shallow(Clone);
      expect(wrapper).toMatchSnapshot();
    });
    it('renders correctly if title prop is set', () => {
      const Clone = React.cloneElement(Component, {label: sampleText});
      const wrapper = shallow(Clone);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
