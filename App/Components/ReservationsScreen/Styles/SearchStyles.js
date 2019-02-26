import {StyleSheet, Platform} from 'react-native';
import {Colors, Fonts} from '../../../Constants';

export default StyleSheet.create({
  searchBarContainer: {
    alignItems: 'center',
    backgroundColor: Colors.snow,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
  },
  searchBar: {
    alignItems: 'center',
    backgroundColor: Colors.extraLightGray,
    borderColor: Colors.steel,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    flexDirection: 'row',
    height: 36,
    justifyContent: 'center',
    marginRight: 10,
    paddingLeft: 10,
  },
  textInput: {
    color: Colors.coal,
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.base : Fonts.typeAndroid.base,
    fontSize: Fonts.size.medium,
    height: 40,
    padding: 6,
    width: 220,
  },
});
