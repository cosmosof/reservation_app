// @flow

import * as React from 'react';
import {Text, TextInput, View} from 'react-native';

import styles from './Styles/InputStyles';

type Props = {
  error?: boolean,
  inputStyles?: Object,
  label?: string,
  name?: string,
  onChange: Function,
  onTouch: Function,
  styles: Object,
  value?: string,
};

type State = {
  boxShadow: Object | null,
};

export default class Input extends React.Component<Props, State> {
  static defaultProps: Object;
  constructor(props: Object) {
    super(props);
    this.state = {
      boxShadow: null,
    };
  }
  handleChange = (value: string) => {
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
    const {error, inputStyles, label, value} = this.props;
    const {container, errorText, textInput} = styles;
    return (
      <View style={container}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          maxLength={600}
          testID="TextInput"
          onBlur={this.handleTouch}
          onChangeText={this.handleChange}
          onFocus={() => this.textInputonFocusStyleHandle()}
          placeholder={label}
          returnKeyType="next"
          style={[textInput, inputStyles, boxShadow]}
          underlineColorAndroid="transparent"
          value={value}
        />
        {error && <Text style={errorText}>{error}</Text>}
      </View>
    );
  }
}

Input.defaultProps = {
  error: false,
  inputStyles: undefined,
  label: undefined,
  name: undefined,
  value: undefined,
};
