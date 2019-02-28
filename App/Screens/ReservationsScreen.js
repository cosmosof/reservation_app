import React from 'react';
import {FlatList, Picker, SafeAreaView} from 'react-native';
import {Query} from 'react-apollo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AlertMessage from '../Components/Common/AlertMessage';
import Button from '../Components/Common/Button';
import Center from '../Components/ReservationsScreen/Center';
import ListCard from '../Components/ReservationsScreen/ListCard';
import Label from '../Components/Common/Label';
import Search from '../Components/ReservationsScreen/Search';
import StickyCard from '../Components/ReservationsScreen/StickyCard';
import Row from '../Components/Common/Row';
import {ListFilters, Colors} from '../Constants';
import {RESERVATIONS} from '../Api/Queries';

import styles from './Styles/ReservationScreenStyles';

type Props = {};

type State = {
  filter: string,
  searchText: string,
};

export default class ReservationsScreen extends React.Component<Props, State> {
  static navigationOptions = {
    headerTitle: <Label
      textStyle={styles.navbarHeader}
      title="Reservations"
                 />,
  };
  constructor(props: Object) {
    super(props);
    this.state = {filter: 'name', searchText: ''};
  }
  handleFilter = (filter) => {
    this.setState({filter});
  };
  handleSearch = (searchText) => {
    this.setState({searchText});
  };
  render() {
    const {searchText, filter} = this.state;
    const {buttonStyle, container, filterLabel, itemStyle, pickerStyle, titleStyle, stickyFilter} = styles;
    const variables = searchText === '' ? {where: {}} : {where: {[filter]: searchText}};
    return (
      <SafeAreaView style={container}>
        <StickyCard>
          <Row>
            <Search>
              {(text) => (
                <Button
                  buttonStyle={buttonStyle}
                  onPress={() => this.handleSearch(text)}
                  textStyle={titleStyle}
                  title="Search"
                />
              )}
            </Search>
          </Row>
          <Row style={stickyFilter}>
            <Icon
              color={Colors.charcoal}
              name="filter-list"
              size={24}
            />
            <Label
              textStyle={filterLabel}
              title="search"
            />
            <Picker
              itemStyle={itemStyle}
              onValueChange={this.handleFilter}
              selectedValue={filter}
              style={pickerStyle}
            >
              {ListFilters.map(({index, name, value}) => (
                <Picker.Item
                  key={index}
                  label={name}
                  value={value}
                />
              ))}
            </Picker>
          </Row>
        </StickyCard>
        <Query
          query={RESERVATIONS}
          variables={variables}
        >
          {({loading, error, data, fetchMore, networkStatus, refetch}) => {
            const {reservations} = data;
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
                keyExtractor={(item) => item.id}
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
