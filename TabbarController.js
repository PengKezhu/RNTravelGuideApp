import React, { Component } from 'react'
import { 
    Platform,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
   } from 'react-native'
import {createAppContainer, createStackNavigator} from 'react-navigation'
import HomeScreen from './HomeScreen';
import Discovery from './Discovery'

export default class TabbarController extends Component {
    static navigationOptions = {
        title: '首页',
    };
    
    constructor (props) {
        super(props);
        this.state = {
          selectedTab : 1,
          hide: false
        }
        this.hideTabbarBar = this.hideTabbarBar.bind(this);
      }

      hideTabbarBar() {
        this.setState({hide : true})
      }
    //hideTabbarCallBack={()=>{}}
      render() {
        return (
          <View style={styles.container}>
            <TabBarIOS   
              style={{width:'100%', height:this.state.hide ? 0 : 50}}        
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
                  <HomeScreen name='Peter'></HomeScreen>
                </TabBarIOS.Item>          
    
                <TabBarIOS.Item
                  systemIcon="bookmarks" //系统图标
                  selected={this.state.selectedTab === 2}
                  onPress={() => {
                  this.setState({
                    selectedTab: 2
                })}}>
                  <Discovery name='Kevin'></Discovery>
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

