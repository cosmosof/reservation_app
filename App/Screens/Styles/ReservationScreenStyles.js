import {StyleSheet, Platform} from 'react-native';
import {Colors, Fonts} from '../../Constants';

export default StyleSheet.create({
  buttonStyle: {
    backgroundColor: Colors.vividBlue,
    borderRadius: 4,
    marginRight: 10,
    width: 100,
  },
  container: {
    backgroundColor: Colors.extraLightGray,
    flex: 1,
  },
  itemStyle: {
    borderTopColor: 'transparent',
    color: Colors.charcoal,
    fontSize: 14,
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.base : Fonts.typeAndroid.base,
    height: 36,
  },
  filterLabel: {
    color: Colors.charcoal,
    marginLeft: 10,
  },
  navbarHeader: {
    color: Colors.darkMatBlue2,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.condensed : Fonts.typeAndroid.condensed,
    paddingLeft: Platform.OS == 'ios' ? 0 : 10,
  },
  pickerStyle: {
    backgroundColor: Colors.extraLightGray,
    borderRadius: 4,
    marginLeft: 10,
    width: 200,
  },
  stickyFilter: {
    marginBottom: 10,
  },
  titleStyle: {
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.condensed : Fonts.typeAndroid.condensed,
    fontSize: 16,
  },
});
