/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import NavBar from './components/NavBar';
import AppContainer from './Navigator/navigator'
import { Provider } from 'react-redux'
import { store } from './redux/app-redux'
//import Location from './components/location'

const App = () => {
  return (
    <Provider store={store}>
      <>
        <AppContainer />
      </>
    </Provider>
  )
}

export default App; 