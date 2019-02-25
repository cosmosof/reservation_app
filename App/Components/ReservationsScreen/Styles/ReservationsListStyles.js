import { StyleSheet, Platform } from 'react-native'
import { Colors, Fonts } from '../../../Constants'

export default StyleSheet.create({
    warningContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    warningText: {
        fontFamily: Platform.OS == 'ios' ? Fonts.typeIOS.condensed : Fonts.typeAndroid.condensed,
        color: Colors.charcoal,
        fontSize: 16
    }
})
