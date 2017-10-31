import React, { Component } from 'react';
import {
  Text,
} from 'react-native';


export default class MyComponent extends Component<{}> {
    render() {
      return (
        <Text>MyComponent</Text>
      );
    }
  }


MyComponent.navigationOptions = ({navigation}) => {

    return {
        header: null,
        headerBackTitle: null,
    };

};
