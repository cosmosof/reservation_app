import {StyleSheet, Platform} from 'react-native';
import {Colors, Fonts} from '../../../Constants';

export default StyleSheet.create({
  container: {
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.condensed :  Fonts.typeAndroid.condensed,
        color: Colors.vividBlue,
        width: 90,
        fontSize: 14,
        fontWeight: "500",
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10
  }
});
