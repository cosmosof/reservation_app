import {StyleSheet, Platform} from 'react-native';
import {Colors, Fonts} from '../../Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.extraLightGray,
  },
  itemStyle: {
    borderTopColor: 'transparent',
    height: 36,
    color: Colors.charcoal,
    fontSize: 14,
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.base : Fonts.typeAndroid.base,
  },
  titleStyle: {
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.condensed : Fonts.typeAndroid.condensed,
    fontSize: 16,
  },
  buttonStyle: {
    backgroundColor: Colors.vividBlue,
    width: 100,
    marginRight: 10,
    borderRadius: 4
  },
  pickerStyle: {
    width: 200,
    backgroundColor: Colors.extraLightGray,
    marginLeft: 10,
    borderRadius: 4,
  },
  stickyFilter: {
    marginBottom: 10,
  },
  filterLabel: {
    marginLeft: 10,
    color: Colors.charcoal,
  },
  navbarHeader: {
    color: Colors.darkMatBlue2,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.condensed : Fonts.typeAndroid.condensed,
  },
});
