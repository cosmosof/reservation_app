import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import TabBarIcon from '../Components/Navigation/TabBarIcon';
import TabBarLabel from '../Components/Navigation/TabBarLabel';
import ReservationsScreen from '../Screens/ReservationsScreen';
import AddReservationScreen from '../Screens/AddReservationScreen';

const ReservationsStack = createStackNavigator({
  Reservations: ReservationsScreen,
});

ReservationsStack.navigationOptions = {
  tabBarLabel: ({focused}) => (<TabBarLabel
    focused={focused}
    title="Reservations"
  />),
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-list${focused ? '-box' : ''}` : 'md-list'}
    />
  ),
};

const AddReservationStack = createStackNavigator({
  AddReservation: AddReservationScreen,
});

AddReservationStack.navigationOptions = {
  tabBarLabel: ({focused}) => (<TabBarLabel
    focused={focused}
    title="Add Reservation"
  />),
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-add${focused ? '-circle' : ''}` : 'md-add'}
    />
  ),
};

export default createBottomTabNavigator({
  ReservationsStack,
  AddReservationStack,
});
