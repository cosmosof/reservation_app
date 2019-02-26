import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './Styles/InputLabelStyles';

export default (InputLabel = ({containerStyle, label}) => {
  return (
    <Text
      style={{
        ...containerStyle,
        ...styles.container,
      }}
    >
      {label}
    </Text>
  );
});

InputLabel.propTypes = {
  containerStyle: PropTypes.object,
  label: PropTypes.string.isRequired,
};
