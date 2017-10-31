import React, { Component } from 'react';
import {
  Text,
} from 'react-native';


export default class StatisticsComponent extends Component<{}> {
  render() {
    return (
      <Text>StatisticsComponent</Text>
    );
  }
}


StatisticsComponent.navigationOptions = ({navigation}) => {

    return {
        header: null,
        headerBackTitle: null,
    };

};