import {StyleSheet, Platform} from 'react-native';
import {Colors, Fonts} from '../../../Constants';

export default StyleSheet.create({
  boxShadow: {
    borderColor: Colors.vividBlue,
    elevation: 1,
    shadowColor: Colors.vividBlue,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  container: {
    flexDirection: 'column',
  },
  errorText: {
    alignSelf: 'flex-start',
    color: Colors.pastelRed,
    fontSize: 14,
    fontWeight: '400',
    padding: 5,
  },
  textInput: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.steel,
    borderRadius: 2,
    backgroundColor: Colors.snow,
    color: Colors.coal,
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.base : Fonts.typeAndroid.base,
    fontSize: 14,
    height: 36,
    padding: 10,
    width: 200,
  },
});
