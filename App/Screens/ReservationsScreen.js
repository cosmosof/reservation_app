import React from 'react';
import {Picker, SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Search from '../Components/ReservationsScreen/Search';
import StickyCard from '../Components/ReservationsScreen/StickyCard';
import StickyRow from '../Components/ReservationsScreen/StickyRow';
import Label from '../Components/Common/Label';
import ReservationsList from '../Components/ReservationsScreen/ReservationsList';
import {ListFilters, Colors} from '../Constants';

import styles from './Styles/ReservationScreenStyles';

export default class ReservationsScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Label title="Reservations" textStyle={styles.navbarHeader} />,
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
        <ReservationsList
          filter={filter}
          text={searchText}
        />
      </SafeAreaView>
    );
  }
}
