// @flow

import React from 'react';
import {Text, StyleSheet} from 'react-native';

import styles from './Styles/LabelStyles';

type Props = {
  children?: string,
  title?: string,
  textStyle?: number | Object | Array<number>,
  styles?: number | Object | Array<number>,
};

export default function Label(props: Props) {
  const {textStyle, title, children} = props;
  const {text} = styles;

  return (
    <Text
      style={StyleSheet.flatten([text, textStyle])}
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
