import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'
import { SocialIcon} from 'react-native-elements'
import BackButton from './backButton'
class Sponsors extends React.Component {
    render() {
      return (
         
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Sponsors</Text>

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
export default Sponsors; 