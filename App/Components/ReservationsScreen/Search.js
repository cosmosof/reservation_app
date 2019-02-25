import React from 'react'
import { Text, View, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { SearchBar, Button } from 'react-native-elements'
import {Colors, Fonts} from '../../Constants'
import styles from './Styles/SearchStyles'

export default class Search extends React.Component {
  state = {
    search: '',
  }
  updateSearch = search => {
    this.setState({ search })
  }
  render() {
    const { search, searchText } = this.state
    return (
      <View style={styles.searchBarContainer}>
        <SearchBar
          round
          placeholder="search reservations..."
          onChangeText={this.updateSearch}
          value={search}
          containerStyle={{
            flex: 0.8,
            backgroundColor: '#fff',
            borderTopColor: 'transparent',
            borderBottomColor: 'transparent',
          }}
          inputContainerStyle={{ backgroundColor: Colors.extraLightGray }}
          inputStyle={{ fontSize: 14, fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.base : Fonts.typeAndroid.base}}
        />
        {this.props.children(search)}
      </View>
    )
  }
}
