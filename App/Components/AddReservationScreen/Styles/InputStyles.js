import {StyleSheet, Platform} from 'react-native';
import {Colors, Fonts} from '../../../Constants';

export default StyleSheet.create({
  boxShadow: {
    borderColor: Colors.vividBlue,
    shadowColor: Colors.vividBlue,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 1,
  },
  container: {
    flexDirection: 'column',
  },
  errorText: {
    color: Colors.pastelRed,
    fontSize: 14,
    fontWeight: '400',
    padding: 5,
    alignSelf: 'flex-start',
  },
  textInput: {
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.base : Fonts.typeAndroid.base,
    fontSize: 14,
    height: 36,
    color: Colors.coal,
    padding: 10,
    width: 200,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.steel,
    borderRadius: 2,
    backgroundColor: Colors.snow,
  },
});
