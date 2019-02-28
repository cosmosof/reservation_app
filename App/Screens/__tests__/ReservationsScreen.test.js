import React from 'react';
import {shallow} from 'enzyme';
import ReservationsScreen from '../ReservationsScreen';
import {TestHelpers} from '../../Constants';

const {sampleText} = TestHelpers;

describe('<ReservationsScreen>', () => {
  const Component = <ReservationsScreen />;
  describe('Structure', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(Component);
    });
    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });
    it('renders a SafeAreaView', () => {
      expect(wrapper.find('SafeAreaView')).toHaveLength(1);
    });
    it('renders a StickyCard', () => {
      expect(wrapper.find('StickyCard')).toHaveLength(1);
    });
    it('renders two Rows', () => {
      expect(wrapper.find('Row')).toHaveLength(2);
    });
    it('renders a Search', () => {
      expect(wrapper.find('Search')).toHaveLength(1);
    });
    it('renders a Icon', () => {
      expect(wrapper.find('Icon')).toHaveLength(1);
    });
    it('renders a Search', () => {
      expect(wrapper.find('Search')).toHaveLength(1);
    });
    it('renders a Picker', () => {
      expect(wrapper.find('Picker')).toHaveLength(1);
    });
    it('renders a Label', () => {
      expect(wrapper.find('Label')).toHaveLength(1);
    });
    it('renders a Query', () => {
      expect(wrapper.find('Query')).toHaveLength(1);
    });
  });
  describe('Functionality', () => {
    const wrapper = shallow(Component);
    it('renders initial states correctly', () => {
      expect(wrapper.state('filter')).toBe('name');
      expect(wrapper.state('searchText')).toBe('');
    });
    it('sets states correctly', () => {
      wrapper.setState({filter: sampleText});
      wrapper.setState({searchText: sampleText});
      expect(wrapper.state('filter')).toEqual(sampleText);
      expect(wrapper.state('searchText')).toEqual(sampleText);
    });
    it('handleSearch sets state correctly', () => {
      wrapper.instance().handleSearch(sampleText);
      expect(wrapper.state('searchText')).toEqual(sampleText);
    });
    it('handleFilter sets state correctly', () => {
      wrapper.instance().handleFilter(sampleText);
      expect(wrapper.state('filter')).toEqual(sampleText);
    });
    it('handles onPress callback', () => {
      const render = wrapper.dive();
      render.find('Button').forEach((child) => {
        expect(child.simulate('press')).toHaveBeenCalledTimes(1);
      });
    });
  });
});
