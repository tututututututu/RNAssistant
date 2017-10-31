import React, {Component} from 'react';
import {
    Text,
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';

import SkuEditComponent from './GoodDetail/SkuEditComponent.js'


export default class BillingComponent extends Component<{}> {
    render() {
        return (
            <Text
                onPress={() => {
                    this.props.navigation.navigate('SkuEditComponent', {'name': "rowData"})
                }}
            >BillingComponent</Text>
        );
    }
}

BillingComponent.navigationOptions = ({navigation}) => {

    return {
        header: null,
        headerBackTitle: null,
    };

};