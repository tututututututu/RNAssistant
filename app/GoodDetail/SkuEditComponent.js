import React, { Component } from 'react';
import {
  Text,
} from 'react-native';


export default class SkuEditComponent extends Component<{}> {
    render() {
        const { params } = this.props.navigation.state;
      return (
        <Text>{params.item.id}</Text>
      );
    }
  }