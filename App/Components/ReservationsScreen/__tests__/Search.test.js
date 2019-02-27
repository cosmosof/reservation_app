import React from 'react';
import {shallow} from 'enzyme';
import Search from '../Search';
import {TestHelpers} from '../../../Constants';

const {sampleText} = TestHelpers;

describe('<Search>', () => {
  describe('Structure', () => {
    const renderFn = jest.fn().mockReturnValue(null);
    it('renders correctly', () => {
      const wrapper = shallow(<Search>{renderFn}</Search>);
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('Functionality', () => {
    it('Calls the render props function', () => {
      const renderFn = jest.fn().mockReturnValue(null);
      const wrapper = shallow(<Search>{renderFn}</Search>);
      expect(renderFn.mock.calls.length).toBe(1);
      expect(wrapper.state('text')).toBe('');
    });
    it('sets state correctly', () => {
      const renderFn = jest.fn().mockReturnValue(null);
      const wrapper = shallow(<Search text={sampleText}>{renderFn}</Search>);
      wrapper.setState({text: sampleText});
      expect(wrapper.state('text')).toEqual(sampleText);
    });
    it('onChangeText sets state correctly', () => {
      const renderFn = jest.fn().mockReturnValue(null);
      const wrapper = shallow(<Search text={sampleText}>{renderFn}</Search>);
      wrapper.instance().updateText(sampleText);
      expect(wrapper.state('text')).toBe(sampleText);
    });
  });
});
