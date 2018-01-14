import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import MessagesNavigator from './messages';

const WalletScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Wallet Screen</Text>
  </View>
);


const RootNavigator = TabNavigator(
  {
    MessagesTab: {
      screen: MessagesNavigator,
      navigationOptions: {
        title: 'Messaggi',
      }
    },
    WalletTab: {
      screen: WalletScreen,
      navigationOptions: {
        title: 'Portafoglio',
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      upperCaseLabel: false
    },
    animationEnabled: false,
    swipeEnabled: false,
    lazy: false,
  }
);

export default RootNavigator;