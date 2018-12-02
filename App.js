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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

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
      <View style={styles.container}>
        <TabBarIOS   
          style={{width:'100%', height:50}}        
          tintColor = "red"       // 被选中标签颜色
          translucent={true}    // TabBarIOS不需要半透明效果
        >
            <TabBarIOS.Item
              systemIcon="contacts" //系统图标
              selected={this.state.selectedTab === 1}
              onPress={() => {
              this.setState({
                selectedTab: 1
              })}}>
                <HomeScreen></HomeScreen>
            </TabBarIOS.Item>          

            <TabBarIOS.Item
              systemIcon="bookmarks" //系统图标
              selected={this.state.selectedTab === 2}
              onPress={() => {
              this.setState({
                selectedTab: 2
            })}}>
              <View style={{width:100,height:100}}><Text style={{textAlign:'center'}}>第一页</Text></View>
            </TabBarIOS.Item>

            <TabBarIOS.Item
              systemIcon="favorites" //系统图标
              selected={this.state.selectedTab === 3}
              onPress={() => {
              this.setState({
                selectedTab: 3
            })}}>
              <View style={styles.welcome}><Text style={{textAlign:'center'}}>第一页</Text></View>
            </TabBarIOS.Item>

          </TabBarIOS>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
