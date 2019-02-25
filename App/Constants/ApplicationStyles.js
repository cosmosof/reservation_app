import {Platform} from 'react-native';
import Fonts from './Fonts';
import Colors from './Colors';

const ApplicationStyles = {
  navbarHeader: {
    color: Colors.darkMatBlue2,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.condensed : Fonts.typeAndroid.condensed,
  },
};

export default {
  ApplicationStyles,
};
