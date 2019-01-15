import React, { Component } from 'react'
import {
   Text,
   StyleSheet,
    View,
    WebView
   } from 'react-native'



export default class WebController extends Component {



  render() {
    return (
      <View style = {styles.container}>
        {/* <WebView style = {styles.container} source={{uri : this.props.navigation.getParam('url')}} startInLoadingState={true}>
        </WebView> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor: 'gray'
  }
});