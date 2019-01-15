import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Discovery extends Component {

    componentWillMount() {
        alert(this.props.name)
    }

  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent + {this.props.name} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
    }
})
