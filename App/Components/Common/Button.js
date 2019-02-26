// @flow

import React from 'react';
import {TouchableHighlight, Text} from 'react-native';
import styles from './Styles/ButtonStyles';

type Props = {
  onPress: Function,
  children?: string,
  disabled?: boolean,
  styles?: Object,
  textStyle?: Object,
  buttonStyle?: Object,
  title?: string,
};

export default function Button(props: Props) {
  const {container, disabledStyle, text} = styles;
  const {buttonStyle, children, onPress, textStyle, title, disabled} = props;

  return (
    <TouchableHighlight
      disabled={disabled}
      onPress={onPress}
      style={[container, buttonStyle, disabled && disabledStyle]}
      underlayColor="transparent"
    >
      <Text style={[text, textStyle]}>{children || title || ''}</Text>
    </TouchableHighlight>
  );
}

Button.defaultProps = {
  buttonStyle: undefined,
  children: undefined,
  disabled: false,
  styles: undefined,
  textStyle: undefined,
  title: undefined,
};
