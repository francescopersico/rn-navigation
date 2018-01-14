import React from 'react';
import { View, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';

const MessagesScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Messages Screen</Text>
  </View>
);

const DeadlinesScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Deadlines Screen</Text>
  </View>
);

const MessagesNavigator = TabNavigator(
  {
    All: {
      screen: MessagesScreen,
      navigationOptions: {
        title: 'Tutti',
      }
    },
    Deadlines: {
      screen: DeadlinesScreen,
      navigationOptions: {
        title: 'Scadenze',
      }
    }
  },
  {
    lazy: false,
    swipeEnabled: true,
    animationEnabled: true
  }
)

export default MessagesNavigator;