import {Platform} from 'react-native';
import {StyleSheet} from 'react-native';
import {Fonts} from '../../../Constants';

export default StyleSheet.create({
  text: {
    textAlign: 'center',
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.condensed : Fonts.typeAndroid.condensed,
  },
});
