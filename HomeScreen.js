import React, { Component } from 'react'
import {
   Text,
   View,
   StyleSheet,
   TouchableOpacity,
   FlatList,
   Image,
   Dimensions,
   } from 'react-native'
import {
    createStackNavigator,
    createAppContainer
  } from "react-navigation";

import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import PageControl from 'react-native-page-control';

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      weather : null,
      banners : [],
      bannerCurrentPage : 0
    }
    this._listHeader = this._listHeader.bind(this);
  }

  componentWillMount() {
    //绑定方法
    this.props.navigation.setParams({weaterInfo: this.state.weather});
  }

  //自定义导航栏
  static navigationOptions = ({navigation, screenProps}) => {
    const params = navigation.state.params || {};
    let navi = {
      header: <LinearGradient colors={['#00ffff', '#4a86e8']} style={{height: 64, width:'100%'}} start={{x:0, y:0}} end={{x:1,y:1}}>
                  <Text style={{position:'absolute', left:40, top: 35, color:'white'}}>{params.weaterInfo}</Text>
              </LinearGradient>,}
    return navi;
  };

  componentDidMount() {
    fetch('http://47.93.151.92/hlw-local/weather/getWeather.json?placeId=10010&time=2018-12-02')
    .then((response) =>{
      // alert(response.json());
      return response.json()
    }).then((json)=>{
      let todayWeather = json.data.weatherList[0];
      this.props.navigation.setParams({weaterInfo : todayWeather.nowTem + '℃ ' + todayWeather.wea})
      this.setState({weather : json});
    });

    fetch('http://47.93.151.92/hlw-local/rec/homeCarousel.json?placeId=10010&status=1')
    .then((response) => response.json())
    .then((json) => {
        let date = new Date();
        let hours = date.getHours()
        // alert(JSON.stringify(json));
        var banners;
        if (hours < 9) {
          banners = json.data[0].早;
        } else if (hours < 17) {
          banners = json.data[1].中;
        } else {
          banners = json.data[2].晚;
        }
        this.setState({banners : banners})
        // alert(this.state.banners);
    } )
  }

_listHeader() {
  var array = [];
  let windowWidth = Dimensions.get('window').width;
  let pageControlWidth = 10 * this.state.banners.length;
  for (let index = 0; index < this.state.banners.length; index++) {
    const element = this.state.banners[index];
    array.push(<Image source={{uri : element.img}} style={{width: windowWidth, aspectRatio:1.3}}></Image>)
  }
    
  return (<View style={styles.headerContainer}>
    <ScrollView style={{flex : 1}} horizontal={true} style={{flexDirection:'row'}} pagingEnabled={true} onScroll={(event)=>{
      this.setState({bannerCurrentPage : event.nativeEvent.contentOffset.x / windowWidth})
      // alert(event.nativeEvent.contentOffset)
  }}>
        {array}
    </ScrollView>
    <PageControl 
      numberOfPages={this.state.banners.length} 
      hidesForSinglePage={true}
      currentPageIndicatorTintColor='red'
      style={{position: 'absolute', width: pageControlWidth, height: 10, left:(windowWidth - pageControlWidth)/2, bottom: 10}}
      currentPage={this.state.bannerCurrentPage}
    ></PageControl>
  </View>)
}
//this.state.banners.length ? this._listHeader() : 
  render() {
    return (
      <View style={styles.container}>
        <FlatList ListHeaderComponent={this.state.banners.length ? this._listHeader() : null} automaticallyAdjustContentInsets={false} >

        </FlatList>
      </View>
    )
  }
}

const HomeContainer = createStackNavigator({
    Home : {
        screen : HomeScreen,
        headerTitle : '123',
    }
  });

  const styles = StyleSheet.create({
    headerContainer : {
      width: '100%',
      aspectRatio : 1.3,
    },
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
    linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });

export default createAppContainer(HomeContainer)
