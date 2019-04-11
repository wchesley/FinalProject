import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'
import { SocialIcon} from 'react-native-elements'
import BackButton from './backButton'
class About extends React.Component {
    render() {
      return (
         
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>About</Text>

          <View  style={{flexDirection:"row"}}>
          <SocialIcon 
            type='facebook'
            />
            <SocialIcon 
            type='twitter'
            />
            <SocialIcon
            type='linkedin'
            />
            </View>
 
        </View>
      
      );
    }
  }
export default About; 