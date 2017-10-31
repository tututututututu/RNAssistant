import {
    StyleSheet,
} from 'react-native';
import '../color/colors.js'

var containnerStyle = StyleSheet.create({
        base_bg_style: {
            backgroundColor: globalColor.base_bg,
        },

        base_bg_row_style: [
            containnerStyle.base_bg_style,
            {
                flexDirection: 'row',
            }
        ],

        base_bg_column_style: [
            containnerStyle.base_bg_style,
            {
                flexDirection: 'column',
            }
        ],
        common_item_style: {
            flexDirection: 'row',
            paddingLeft: 16,
            height: 40,
            paddingRight: 16,
        },
    }
);