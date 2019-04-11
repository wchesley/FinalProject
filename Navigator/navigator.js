import React from "react";
import { View, Text, Dimensions } from "react-native";
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";
import Schedule from '../components/schedule'
import SideMenu from './SideMenu'
import stackNav from './stackNav'


  const drawernav = createDrawerNavigator({
    Item1: {
        screen: stackNav,
      }
    }, {
      contentComponent: SideMenu,
      drawerWidth: Dimensions.get('window').width - 120,  
  });
  
  const AppContainer = createAppContainer(drawernav);

export default AppContainer; 