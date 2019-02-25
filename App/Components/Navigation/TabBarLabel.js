// @flow

import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Colors} from '../../Constants';

import styles from './Styles/TabBarLabelStyles';

type Props = {
  focused: boolean,
  title: string,
  textStyle?: number | Object | Array<number>,
  styles?: number | Object | Array<number>,
};

export default function TabBarLabel(props: Props) {
  const {textStyle, title} = props;
  const {text} = styles;

  return (
    <Text
      style={StyleSheet.flatten([text, textStyle, {color: props.focused ? Colors.vividBlue : Colors.tabIconDefault}])}
    >
      {title}
    </Text>
  );
}

TabBarLabel.defaultProps = {
  styles: undefined,
  textStyle: undefined,
};
