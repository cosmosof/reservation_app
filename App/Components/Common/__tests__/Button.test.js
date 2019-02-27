import React from 'react';
import {shallow} from 'enzyme';
import Button from '../Button';
import {TestHelpers} from '../../../Constants';

const {noop, sampleText} = TestHelpers;

describe('<Button>', () => {
  const Component = <Button onPress={noop}>{sampleText}</Button>;
  describe('Structure', () => {
    it('renders correctly', () => {
      const wrapper = shallow(Component);
      expect(wrapper).toMatchSnapshot();
    });
    it('renders correctly if title prop is set', () => {
      const Clone = React.cloneElement(Component, {title: sampleText});
      const wrapper = shallow(Clone);
      expect(wrapper).toMatchSnapshot();
    });
    it('renders correctly if buttonStyle prop is set', () => {
      const Clone = React.cloneElement(Component, {buttonStyle: {backgroundColor: 'red'}});
      const wrapper = shallow(Clone);
      expect(wrapper).toMatchSnapshot();
    });
    it('renders correctly if styles prop is set', () => {
      const Clone = React.cloneElement(Component, {styles: {backgroundColor: 'blue'}});
      const wrapper = shallow(Clone);
      expect(wrapper).toMatchSnapshot();
    });
    it('renders correctly if textStyle prop is set', () => {
      const Clone = React.cloneElement(Component, {textStyle: {fontSize: 16}});
      const wrapper = shallow(Clone);
      expect(wrapper).toMatchSnapshot();
    });

    it('renders correctly if disabled prop is set true', () => {
      const Clone = React.cloneElement(Component, {disabled: true});
      const wrapper = shallow(Clone);
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('Functionality', () => {
    it('handles onPress callback', () => {
      const onPressAgent = jest.fn();
      const Clone = React.cloneElement(Component, {onPress: onPressAgent});
      const wrapper = shallow(Clone);
      wrapper.simulate('press');
      expect(onPressAgent).toHaveBeenCalledTimes(1);
    });
  });
});
