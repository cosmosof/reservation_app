import {StyleSheet, Platform} from 'react-native';
import {Colors, Fonts, ApplicationStyles} from '../../Constants';

export default StyleSheet.create({
  ...ApplicationStyles.navbarHeader,
  border: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.steel,
    borderRadius: 2,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.extraLightGray,
    paddingTop: 10,
  },
  KeyboardAvoidingViewContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  inputColumn:{
    flexDirection: 'column',
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
  },
  inputStyle: {
    width: 220,
    height: 40,
  },
  errorText: {
    color: Colors.pastelRed,
    fontSize: 14,
    fontWeight: '400',
    padding: 5,
    alignSelf: 'flex-start',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: Colors.vividBlue,
    borderColor: Colors.lighterMatBlue,
    marginBottom: 40,
    height: 40,
    width: 120,
    borderRadius: 4,
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
  navbarHeader: {
    color: Colors.darkMatBlue2,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.condensed : Fonts.typeAndroid.condensed,
  },
});
