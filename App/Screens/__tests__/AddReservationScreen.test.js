import React from 'react';
import {shallow} from 'enzyme';
import AddReservationScreen from '../AddReservationScreen';

describe('<AddReservationScreen>', () => {
  const Component = <AddReservationScreen />;
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
    it('renders a KeyboardAvoidingView', () => {
      expect(wrapper.find('KeyboardAvoidingView')).toHaveLength(1);
    });
    it('renders a Mutation', () => {
      expect(wrapper.find('Mutation')).toHaveLength(1);
    });
  });
  describe('Functionality', () => {
    const wrapper = shallow(Component);
    it('renders initial states correctly', () => {
      expect(wrapper.state('error')).toBe(false);
      expect(wrapper.state('success')).toBe(false);
    });
    it('sets states correctly', () => {
      wrapper.setState({error: true});
      wrapper.setState({success: true});
      wrapper.setState({minDate: 'ISOString'});
      expect(wrapper.state('error')).toBe(true);
      expect(wrapper.state('success')).toBe(true);
      expect(wrapper.state('minDate')).toBe('ISOString');
    });
    it('handleButtonAction default sets state correctly', () => {
      wrapper.instance().handleButtonAction();
      expect(wrapper.state('error')).toBe(true);
      expect(wrapper.state('success')).toBe(true);
    });
    it('handleButtonAction with error sets state correctly', () => {
      wrapper.instance().handleButtonAction('error');
      expect(wrapper.state('error')).toBe(false);
      expect(wrapper.state('success')).toBe(true);
    });
    it('handleButtonAction with success sets state correctly', () => {
      wrapper.instance().handleButtonAction('success');
      expect(wrapper.state('error')).toBe(false);
      expect(wrapper.state('success')).toBe(false);
    });
  });
});
