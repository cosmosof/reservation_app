// @flow

import * as React from 'react';
import {View} from 'react-native';

import styles from './Styles/StickyCardStyles';

type Props = { children?: React.Node };

export default function StickyCard(props: Props) {
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  );
}
