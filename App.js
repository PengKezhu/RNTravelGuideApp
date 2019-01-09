/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
} from 'react-native';
import {
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import HomeScreen from './HomeScreen'
import TabbarController from './TabbarController'

type Props = {};
export default class App extends Component<Props> {
  constructor (props) {
    super(props);
    this.state = {
      selectedTab : 1
    }
  }

  render() {
    return (
        <TabbarController/>
    );
  }
}

