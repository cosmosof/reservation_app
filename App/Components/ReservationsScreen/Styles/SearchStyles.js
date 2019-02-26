import {StyleSheet, Platform} from 'react-native';
import {Colors, Fonts} from '../../../Constants';

export default StyleSheet.create({
  textInput: {
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.base : Fonts.typeAndroid.base,
    fontSize: Fonts.size.medium,
    height: 40,
    color: Colors.coal,
    width: 220,
    padding: 6,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.snow,
    flex: 1,
    justifyContent: 'center',
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: Colors.extraLightGray,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.steel,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
    height: 36,
    paddingLeft: 10,
    marginRight: 10,
  },
});
