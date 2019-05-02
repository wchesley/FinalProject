import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, TouchableOpacity
} from 'react-native';

import { createStackNavigator } from 'react-navigation';
import HomeScreen from "../components/NavBar";
import Schedule from "../components/schedule";
import About from "../components/about";
import sponsors from "../components/sponsors";
import Location from '../components/location'
import SpeakerBio from '../components/SpeakerBio'
import { Icon } from 'react-native-elements';
import ScheduleComponent from '../components/scheduleComponent';

const stackNav = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Edsigcon 2019!",
      headerLeft: (<TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon name='menu' />
      </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 15 }
    })
  },
  Schedule: {
    screen: Schedule,
    navigationOptions: ({ navigation }) => ({
      title: "Schedule",
    })
  },
  ScheduleComponent: {
    screen: ScheduleComponent,
    navigationOptions: ({ navigation }) => ({
      title: "Schedule",
    })
    },
  Sponsors: {
    screen: sponsors,
    navigationOptions: ({ navigation }) => ({
      title: "Sponsors",
    })
  },
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => ({
      title: "About",
    })
  },
  Map: {
    screen: Location,
    navigationOptions: ({ navigation }) => ({
      title: "Map",
    })
  },
  SpeakerBio: {
    screen: SpeakerBio,
    navigationOptions: ({ navigation }) => ({
      title: "Speaker"
    })
  }
},
{
  initialRouteName: 'Home',
});

export default stackNav;