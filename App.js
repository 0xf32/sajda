import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, StatusBar, SafeAreaView } from 'react-native';
// navigator.geolocation = require('@react-native-community/geolocation');
import { WebView } from 'react-native-webview';
import map from './map'


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.Container}>

        <WebView source={{ html: map }} style={styles.WebView} />
      </SafeAreaView>
    </>

  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 10,
  },

  WebView: {
    flex: 2,
    height: 500
  },

  ButtonArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});



export default App