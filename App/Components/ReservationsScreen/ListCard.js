// @flow

import * as React from 'react';
import {Text, View} from 'react-native';
import styles from './Styles/ListCardStyles';

type Props = { data: Object, styles: Object };

export default function ListCard(props: Props) {
  const {container, value, label, oddRow, row} = styles;
  const {name, id, hotelName, arrivalDate, departureDate} = props.data;
  return (
    <View
      key={id}
      style={container}
    >
      <View style={oddRow}>
        <Text style={label}>Guest name </Text>
        <Text style={value}> {name} </Text>
      </View>
      <View style={row}>
        <Text style={label}>Hotel name </Text>
        <Text style={value}> {hotelName} </Text>
      </View>
      <View style={oddRow}>
        <Text style={label}>Arrival date</Text>
        <Text style={value}> {arrivalDate} </Text>
      </View>
      <View style={row}>
        <Text style={label}>Departure date</Text>
        <Text style={value}> {departureDate} </Text>
      </View>
    </View>
  );
}
