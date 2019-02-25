// @flow

import * as React from 'react';
import {View} from 'react-native';

import styles from './Styles/CenterStyles';

type Props = { style?: Object, children?: React.Node };

export default function Center(props: Props) {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
}
