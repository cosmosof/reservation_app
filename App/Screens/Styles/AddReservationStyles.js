import {StyleSheet, Platform} from 'react-native';
import {Colors, Fonts, ApplicationStyles} from '../../Constants';

export default StyleSheet.create({
  ...ApplicationStyles.navbarHeader,
  container: {
    flex: 1,
    backgroundColor: Colors.extraLightGray,
    paddingTop: 10,
  },
  KeyboardAvoidingViewContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
  },
  errorText: {
    color: Colors.pastelRed,
    fontSize: 12,
    fontWeight: '400',
    paddingBottom: 10,
    alignSelf: 'center',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: Colors.vividBlue,
    borderColor: Colors.lighterMatBlue,
    marginBottom: 40,
    height: 40,
    width: 120,
  },
  buttonTitleStyle: {
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.condensed : Fonts.typeAndroid.condensed,
    fontSize: 16,
  },
  dateInput: {
    borderRadius: 5,
    borderColor: 'transparent',
    backgroundColor: 'white',
  },
  disabled: {
    backgroundColor: Colors.disabledBackground,
  },
  placeholderText: {
    color: Colors.disabledTextColor,
  },
  dateText: {
    color: Colors.coal,
    textAlign: 'left',
  },
  buttonbackgroundColor: {
    backgroundColor: Colors.vividBlue,
  },
  navbarHeader: {
    color: Colors.darkMatBlue2,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.condensed : Fonts.typeAndroid.condensed,
  },
});
