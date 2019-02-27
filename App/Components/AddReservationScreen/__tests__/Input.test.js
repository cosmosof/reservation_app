import React from 'react';
import {shallow} from 'enzyme';
import Input from '../Input';
import {TestHelpers} from '../../../Constants';

const {noop, sampleText} = TestHelpers;

describe('<Input>', () => {
  const Component = (<Input
    onChange={noop}
    onTouch={noop}
  />);
  describe('Structure', () => {
    it('renders correctly', () => {
      const wrapper = shallow(Component);
      expect(wrapper).toMatchSnapshot();
    });
    it('renders correctly if label prop is set', () => {
      const Clone = React.cloneElement(Component, {label: sampleText});
      const wrapper = shallow(Clone);
      expect(wrapper.instance().props.label).toEqual(sampleText);
    });
    it('renders correctly if name prop is set', () => {
      const Clone = React.cloneElement(Component, {name: sampleText});
      const wrapper = shallow(Clone);
      expect(wrapper.instance().props.name).toEqual(sampleText);
    });
    it('renders correctly if inputStyles prop is set', () => {
      const Clone = React.cloneElement(Component, {inputStyles: {backgroundColor: 'blue'}});
      const wrapper = shallow(Clone);
      expect(wrapper.instance().props.inputStyles).toEqual({backgroundColor: 'blue'});
    });
    it('renders correctly if value prop is set', () => {
      const Clone = React.cloneElement(Component, {value: sampleText});
      const wrapper = shallow(Clone);
      expect(wrapper.instance().props.value).toEqual(sampleText);
    });
  });
  describe('Functionality', () => {
    it('sets state correctly', () => {
      const wrapper = shallow(Component);
      wrapper.setState({boxShadow: {borderColor: 'red'}});
      expect(wrapper.state('boxShadow')).toEqual({borderColor: 'red'});
    });
  });
});
