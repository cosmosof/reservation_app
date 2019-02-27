// @flow

import * as React from 'react';
import {Text} from 'react-native';

import styles from './Styles/InputLabelStyles';

  type Props = {
    containerStyle?: Object,
    label?: string,
    styles: Object,
  };

export default function InputLabel(props: Props) {
  const {containerStyle, label} = props;
  return (
    <Text
      style={{
        ...styles.container,
        ...containerStyle,
      }}
    >
      {label}
    </Text>
  );
}

InputLabel.defaultProps = {
  containerStyle: undefined,
  label: 'add a label',
};
