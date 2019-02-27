import React from 'react';
import {shallow} from 'enzyme';
import AlertMessage from '../AlertMessage';
import {TestHelpers} from '../../../Constants';

const {sampleText} = TestHelpers;

describe('<AlertMessage>', () => {
  const Component = <AlertMessage title={sampleText} />;
  describe('Structure', () => {
    it('renders correctly', () => {
      const wrapper = shallow(Component);
      expect(wrapper).toMatchSnapshot();
    });
    it('renders correctly if show is false', () => {
      const Clone = React.cloneElement(Component, {show: false});
      const wrapper = shallow(Clone);
      expect(wrapper).toMatchSnapshot();
    });
    it('renders correctly if backgroundColor prop is set', () => {
      const Clone = React.cloneElement(Component, {style: {backgroundColor: 'red'}});
      const wrapper = shallow(Clone);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
