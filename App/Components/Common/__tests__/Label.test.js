import React from 'react';
import {shallow} from 'enzyme';
import Label from '../Label';
import {TestHelpers} from '../../../Constants';

const {sampleText} = TestHelpers;

describe('<Label>', () => {
  const Component = <Label />;
  describe('Structure', () => {
    it('renders correctly', () => {
      const wrapper = shallow(Component);
      expect(wrapper).toMatchSnapshot();
    });
    it('renders correctly if styles prop is set', () => {
      const Clone = React.cloneElement(Component, {styles: {backgroundColor: 'red'}});
      const wrapper = shallow(Clone);
      expect(wrapper).toMatchSnapshot();
    });
    it('renders correctly if title prop is set', () => {
      const Clone = React.cloneElement(Component, {title: sampleText});
      const wrapper = shallow(Clone);
      expect(wrapper).toMatchSnapshot();
    });
    it('renders correctly if children prop is set', () => {
      const Clone = React.cloneElement(Component, {children: sampleText});
      const wrapper = shallow(Clone);
      expect(wrapper).toMatchSnapshot();
    });
    it('renders correctly if textStyle prop is set', () => {
      const Clone = React.cloneElement(Component, {textStyle: {backgroundColor: 'blue'}});
      const wrapper = shallow(Clone);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
