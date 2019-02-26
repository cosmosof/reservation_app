import {StyleSheet, Platform} from 'react-native';
import {Colors, Fonts} from '../../../Constants';

export default StyleSheet.create({
  container: {
    maxHeight: 40,
    padding: 8,
    backgroundColor: 'gray',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.condensed : Fonts.typeAndroid.condensed,
  },
  disabledStyle: {
    backgroundColor: Colors.disabledBackground,
  },
});
