import React from 'react';
import {TextInput, View, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../Constants';
import styles from './Styles/SearchStyles';

export default class Search extends React.Component {
  state = {
    text: '',
  };
  updateText = (text) => {
    this.setState({text});
  };
  render() {
    const {text} = this.state;
    return (
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBar}>
          <Icon
            color={Colors.charcoal}
            name={Platform.OS == 'ios' ? 'ios-search' : 'md-search'}
            size={20}
          />
          <TextInput
            autoCorrect={false}
            onChangeText={(text) => this.updateText(text)}
            placeholder="search reservations..."
            style={styles.textInput}
            value={text}
          />
        </View>
        {this.props.children(text)}
      </View>
    );
  }
}
