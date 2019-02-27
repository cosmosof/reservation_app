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
        ...containerStyle,
        ...styles.container,
      }}
    >
      {label}
    </Text>
  );
}

InputLabel.defaultProps = {
  containerStyle: undefined,
  label: undefined,
};
