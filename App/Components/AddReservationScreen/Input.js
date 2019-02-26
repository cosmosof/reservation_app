import React from 'react';
import {Text, TextInput, View} from 'react-native';

import styles from './Styles/InputStyles';

export default class InputSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxShadow: null,
    };
  }
  handleChange = (value) => {
    this.props.onChange(this.props.name, value);
  };

  handleTouch = () => {
    this.setState({boxShadow: null});
    this.props.onTouch(this.props.name);
  };
  textInputonFocusStyleHandle() {
    this.setState({boxShadow: styles.boxShadow});
  }
  render() {
    const {boxShadow} = this.state;
    const {error, inputStyles, label} = this.props;
    const {container, errorText, textInput} = styles;
    return (
      <View style={container}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          maxLength={600}
          onBlur={this.handleTouch}
          onChangeText={this.handleChange}
          onFocus={() => this.textInputonFocusStyleHandle()}
          placeholder={label}
          returnKeyType="next"
          style={[textInput, inputStyles, boxShadow]}
          underlineColorAndroid="transparent"
        />
        {error && <Text style={errorText}>{error}</Text>}
      </View>
    );
  }
}
