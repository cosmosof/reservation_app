// @flow

import React from 'react';
import {Text} from 'react-native';

import styles from './Styles/LabelStyles';

type Props = {
  children?: string,
  title?: string,
  textStyle?: Object,
  styles?: Object,
};

export default function Label(props: Props) {
  const {textStyle, title, children} = props;
  const {text} = styles;

  return (
    <Text
      style={[text, textStyle]}
    >
      {title||children||''}
    </Text>
  );
}

Label.defaultProps = {
  children: undefined,
  styles: undefined,
  textStyle: undefined,
  title: undefined,
};
