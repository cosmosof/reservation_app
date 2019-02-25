// @flow

import * as React from 'react';
import {View} from 'react-native';

import styles from './Styles/StickyRowStyles';

type Props = { style?: Object, children?: React.Node };

export default function StickyRow(props: Props) {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
}
