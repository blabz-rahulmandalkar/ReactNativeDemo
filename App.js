import React, { Component } from 'react';
import { Platform, TouchableOpacity, StyleSheet, Text, View, ToastAndroid } from 'react-native';

export default class App extends Component {

  _showToast = (tag) =>{
    if(tag===1){
      ToastAndroid.show('First Column Pressed',1000);
    }else{
      ToastAndroid.show('Second Column Pressed',1000);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={[styles.subContainer, { backgroundColor: '#ede5c5' }]} />
          <View style={[styles.subContainer, { backgroundColor: '#c5e8ed' }]} />
          <View style={[styles.subContainer, { backgroundColor: '#edc5d9' }]} />
        </View>
        <View style={styles.containerOverlay}>
            <TouchableOpacity onPress={()=>{this._showToast(1)}} style={{flex:1, borderRightWidth:1}}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{this._showToast(2)}} style={{flex:3,borderLeftWidth:1}}></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subContainer: {
    flex: 1
  },
  containerOverlay: {
    position: 'absolute',
    left:0,
    right:0,
    top:0,
    bottom:0,
    flexDirection: 'row',
  }
});
