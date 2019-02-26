import {StyleSheet, Platform} from 'react-native';
import {Colors, Fonts} from '../../../Constants';

export default StyleSheet.create({
  container: {
    padding: 30,
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: Colors.steel,
    backgroundColor: Colors.snow,
    borderWidth: 1,
    flex: 1,
    flexDirection: 'column',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.condensed : Fonts.typeAndroid.condensed,
    alignItems: 'flex-end',
    color: Colors.darkMatBlue2,
  },
  label: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.base : Fonts.typeAndroid.base,
    alignItems: 'flex-start',
    color: Colors.darkMatBlue2,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.lighterMatBlue,
    padding: 5,
  },
  oddRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
});
