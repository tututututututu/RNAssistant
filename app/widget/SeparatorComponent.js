import React, {Component} from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

export default class SeparatorComponent extends Component<{}> {
    render() {
        return (
            <View
                style={styles.line_separator}
            />
        )
    }
}


const styles = StyleSheet.create({
    line_separator: {
        height: 1,
        backgroundColor: '#cccccc',
    }
});