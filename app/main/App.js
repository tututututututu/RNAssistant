/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
} from 'react-navigation';

import SelectComponent from '../SelectComponent.js'
import BillingComponent from '../BillingComponent.js'
import HistoryComponent from '../HistoryComponent.js'
import StatisticsComponent from '../StatisticsComponent.js'
import MyComponent from '../MyComponent.js'
import TabItemComponent from '../main/TabItemComponent.js'
import SkuEditComponent from '../GoodDetail/SkuEditComponent.js'



export class App extends Component<{}> {
  render() {
    return (
      <Navigator />
    );
  }
}

const MainTab = TabNavigator(
  {
    SelectTab: {
      screen: SelectComponent,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '选款',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabItemComponent
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../../imgs/main/app_select_false.png')}
            selectedImage={require('../../imgs/main/app_select_true.png')}
          />
        )
      }),
    },

    BillingTab: {
      screen: BillingComponent,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '本单',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabItemComponent
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../../imgs/main/app_billing_false.png')}
            selectedImage={require('../../imgs/main/app_billing_true.png')}
          />
        )
      }),
    },

    HistoryTab: {
      screen: HistoryComponent,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '历史',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabItemComponent
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../../imgs/main/app_history_false.png')}
            selectedImage={require('../../imgs/main/app_history_true.png')}
          />
        )
      }),
    },

    StatisticsTab: {
      screen: StatisticsComponent,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '统计',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabItemComponent
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../../imgs/main/app_tongji_false.png')}
            selectedImage={require('../../imgs/main/app_tongji_true.png')}
          />
        )
      }),
    },

    MyTab: {
      screen: MyComponent,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: '我的',
        tabBarIcon: ({ focused, tintColor }) => (
          <TabItemComponent
            tintColor={tintColor}
            focused={focused}
            normalImage={require('../../imgs/main/app_mine_false.png')}
            selectedImage={require('../../imgs/main/app_mine_true.png')}
          />
        )
      }),
    },
  },

  {
    header: null,
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: true,
    backBehavior: 'none',

    tabBarOptions: {
      activeTintColor: '#06c1ae',
      inactiveTintColor: '#979797',
      style: { backgroundColor: '#ffffff', },
      labelStyle: {
        fontSize: 0, // 文字大小0 不显示文字
      },
    }

  }
);


export default Navigator = StackNavigator(

  {
    Tab: { screen: MainTab },
    SkuEditComponent: { screen: SkuEditComponent },
  },

  {
    navigationOptions: {
      header: null,
      headerBackTitle: null,
      headerTintColor: '#333333',
      showIcon: true,
      swipeEnabled: true,
      animationEnabled: false,
    },

    mode: 'card',
    onTransitionStart: () => { console.log('导航栏切换开始'); },  // 回调
    onTransitionEnd: () => { console.log('导航栏切换结束'); }  // 回调
  });


