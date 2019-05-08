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
import { Icon } from 'react-native-elements';
import ScheduleComponent from '../components/scheduleComponent';
import Speakers from '../components/Speakers'
import EventsPage from '../components/EventsPage';
import SpeakerBio from '../components/SpeakerBio';

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
  Speakers: {
    screen: Speakers,
    navigationOptions: ({ navigation }) => ({
      title: "Speakers",
    })
  },
  SpeakerBio: {
    screen: SpeakerBio,
    navigationOptions: ({ navigation}) => ({
      title:"Speaker"
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
  EventsPage: {
    screen: EventsPage,
    navigationOptions: ({ navigation }) => ({
      title: "Event Details"
    })
  },
},
{
  initialRouteName: 'Home',
});

export default stackNav;