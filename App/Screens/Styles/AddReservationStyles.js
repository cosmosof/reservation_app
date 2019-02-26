import {StyleSheet, Platform} from 'react-native';
import {Colors, Fonts} from '../../Constants';

export default StyleSheet.create({
  border: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.steel,
    borderRadius: 2,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: Colors.vividBlue,
    borderColor: Colors.lighterMatBlue,
    borderRadius: 4,
    height: 40,
    marginBottom: 40,
    width: 130,
  },
  buttonTitleStyle: {
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.condensed : Fonts.typeAndroid.condensed,
    fontSize: 16,
  },
  container: {
    backgroundColor: Colors.extraLightGray,
    paddingTop: 10,
    flex: 1,
  },
  dateInput: {
    backgroundColor: 'white',
    borderRadius: 5,
    borderColor: 'transparent',
  },
  dateText: {
    color: Colors.coal,
    textAlign: 'left',
  },
  disabled: {
    backgroundColor: Colors.disabledBackground,
  },
  errorText: {
    alignSelf: 'flex-start',
    color: Colors.pastelRed,
    fontSize: 14,
    fontWeight: '400',
    padding: 5,
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  inputStyle: {
    height: 40,
    width: 220,
  },
  KeyboardAvoidingViewContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  navbarHeader: {
    color: Colors.darkMatBlue2,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.condensed : Fonts.typeAndroid.condensed,
    paddingLeft: Platform.OS == 'ios' ? 0 : 10,
  },
  placeholderText: {
    color: Colors.disabledTextColor,
  },
  row: {
    backgroundColor: 'transparent',
  },
});
