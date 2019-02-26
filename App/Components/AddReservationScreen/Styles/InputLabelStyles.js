import {StyleSheet, Platform} from 'react-native';
import {Colors, Fonts} from '../../../Constants';

export default StyleSheet.create({
  container: {
    color: Colors.vividBlue,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.condensed : Fonts.typeAndroid.condensed,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    width: 90,
  },
});
