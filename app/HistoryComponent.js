import React, {Component} from 'react';
import {
    Text,
} from 'react-native';


export default class HistoryComponent extends Component<{}> {
    render() {
        return (
            <Text>HistoryComponent</Text>
        );
    }
}

HistoryComponent.navigationOptions = ({navigation}) => {

    return {
        header: null,
        headerBackTitle: null,
    };

};