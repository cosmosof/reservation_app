// @flow

import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Query} from 'react-apollo';
import {RESERVATIONS} from '../../Api/Queries';
import ListCard from '../../Components/ReservationsScreen/ListCard';
import AlertMessage from '../../Components/Common/AlertMessage';

import styles from './Styles/ReservationsListStyles';

type Props = { filter: string, text: string };

export default function ReservationList(props: Props) {
  const {filter, text} = props;
  const {warningContainer, warningText} = styles;

  return (
    <Query
      query={RESERVATIONS}
      variables={{where: {[filter]: text}}}
    >
      {({loading, error, data, fetchMore, networkStatus, refetch}) => {
        const {reservations} = data;
        if (loading) {
          return (
            <View style={warningContainer}>
              <AlertMessage
                show
                title="loading..."
              />
            </View>
          );
        }
        if (error) {
          return (
            <View style={warningContainer}>
              <AlertMessage
                show
                title="An error occured"
              />
            </View>
          );
        }
        if (reservations && reservations.length === 0) {
          return (
            <View style={warningContainer}>
              <Text style={warningText}>Nothing found...</Text>
            </View>
          );
        }

        return (
          <FlatList
            data={reservations}
            keyExtractor={(item, index) => item.id}
            onEndReached={() =>
              fetchMore({
                variables: {
                  skip: reservations.length + 20,
                },
                updateQuery: (prev, {fetchMoreResult}) => {
                  if (!fetchMoreResult) return prev;
                  return Object.assign({}, prev, {
                    reservations: [...prev.reservations, ...fetchMoreResult.reservations],
                  });
                },
              })
            }
            onEndThreshold={0.5}
            onRefresh={() => refetch()}
            refreshing={networkStatus === 4}
            renderItem={({item}) => <ListCard data={item} />}
          />
        );
      }}
    </Query>
  );
}
