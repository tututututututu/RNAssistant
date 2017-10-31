import {
    StyleSheet,
} from 'react-native';
import '../color/colors.js'

var widgetStyle = StyleSheet.create({
        text_style: {
            textColor: globalColor.base_font,
            fontSize: 14,
            alignSelf: 'center',
        },

        text_input_style: {
            textColor: globalColor.base_font,
            fontSize: 13,
            paddingTop: 0,
            paddingBottom: 0,
            paddingLeft: 32,
            paddingRight: 16,
            textAlignVertical: 'top',
        }
    }
);