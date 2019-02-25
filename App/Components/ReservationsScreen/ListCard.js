// @flow

import React from 'react';
import {Text, View} from 'react-native';
import styles from './Styles/ListCardStyles';

type Props = { data: Object };

export default function ListCard(props: Props) {
  return (
    <View
      key={props.data.id}
      style={styles.container}
    >

      <View style={styles.oddRow}>
        <Text style={styles.label}>Guest name </Text>
        <Text style={styles.value}> {props.data.name} </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Hotel name </Text>
        <Text style={styles.value}> {props.data.hotelName} </Text>
      </View>
      <View style={styles.oddRow}>
        <Text style={styles.label}>Arrival date</Text>
        <Text style={styles.value}> {props.data.arrivalDate} </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Departure date</Text>
        <Text style={styles.value}> {props.data.departureDate} </Text>
      </View>

    </View>
  );
}
