import React from 'react';
import {Picker, SafeAreaView, FlatList} from 'react-native';
import {Button} from 'react-native-elements';
import {Query} from 'react-apollo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Search from '../Components/ReservationsScreen/Search';
import StickyCard from '../Components/ReservationsScreen/StickyCard';
import StickyRow from '../Components/ReservationsScreen/StickyRow';
import Label from '../Components/Common/Label';
import {ListFilters, Colors} from '../Constants';
import {RESERVATIONS} from '../Api/Queries';
import AlertMessage from '../Components/Common/AlertMessage';
import ListCard from '../Components/ReservationsScreen/ListCard';
import Center from '../Components/ReservationsScreen/Center';

import styles from './Styles/ReservationScreenStyles';

export default class ReservationsScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Label
      textStyle={styles.navbarHeader}
      title="Reservations"
                 />,
  };
  state = {filter: 'name'};
  handleFilter = (filter) => {
    this.setState({filter});
  };
  handleSearch = (search) => {
    this.setState({searchText: search});
  };
  render() {
    const {searchText, filter} = this.state;
    const {
      container,
      buttonStyle,
      pickerStyle,
      titleStyle,
      itemStyle,
      buttonContainer,
      stickyFilter,
      filterLabel,
    } = styles;
    return (
      <SafeAreaView style={container}>
        <StickyCard>
          <StickyRow>
            <Search>
              {(search) => (
                <Button
                  buttonStyle={buttonStyle}
                  containerStyle={buttonContainer}
                  onPress={() => this.handleSearch(search)}
                  title="Search"
                  titleStyle={titleStyle}
                />
              )}
            </Search>
          </StickyRow>
          <StickyRow style={stickyFilter}>
            <Icon
              color={Colors.charcoal}
              name="filter-list"
              size={24}
            />
            <Label
              textStyle={filterLabel}
              title="filter"
            />
            <Picker
              itemStyle={itemStyle}
              onValueChange={this.handleFilter}
              selectedValue={filter}
              style={pickerStyle}
            >
              {ListFilters.map((item) => (
                <Picker.Item
                  key={item.index}
                  label={item.name}
                  value={item.value}
                />
              ))}
            </Picker>
          </StickyRow>
        </StickyCard>
        <Query
          query={RESERVATIONS}
          variables={{where: {[filter]: searchText}}}
        >
          {({loading, error, data, fetchMore, networkStatus, refetch}) => {
            const {reservations} = data;
            if (loading) {
              return (
                <Center>
                  <AlertMessage
                    show
                    title="loading..."
                  />
                </Center>
              );
            }
            if (error) {
              return (
                <Center>
                  <AlertMessage
                    show
                    title="An error occured"
                  />
                </Center>
              );
            }
            if (reservations && reservations.length === 0) {
              return (
                <Center>
                  <AlertMessage
                    show
                    title="Nothing found..."
                  />
                </Center>
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
      </SafeAreaView>
    );
  }
}
