import React from 'react';
import {shallow} from 'enzyme';
import Input from '../Input';
import {TestHelpers, Colors} from '../../../Constants';

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
    it('textInputonFocusStyleHandle sets state correctly', () => {
      const Clone = React.cloneElement(Component);
      const wrapper = shallow(Clone);
      wrapper.instance().textInputonFocusStyleHandle(sampleText);
      expect(wrapper.state('boxShadow')).toEqual({
        borderColor: Colors.vividBlue,
        elevation: 1,
        shadowColor: Colors.vividBlue,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 3,
      });
    });
    it('handleTouch sets state correctly', () => {
      const Clone = React.cloneElement(Component);
      const wrapper = shallow(Clone);
      wrapper.instance().handleTouch();
      expect(wrapper.state('boxShadow')).toBe(null);
    });
    it('calls onChangeText as expected when typing', () => {
      const Clone = React.cloneElement(Component);
      const wrapper = shallow(Clone);
      const render = wrapper.dive();
      render.find('TextInput').forEach((child) => {
        child.simulate('ChangeText');
      });
    });
  });
});
