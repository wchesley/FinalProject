import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet, Button, Linking } from 'react-native'
import { SocialIcon } from 'react-native-elements'
import OpenURLButton from '../Navigator/openExtURL';

const google = 'https://www.google.com'
class About extends React.Component {
  render() {
    return (
      <>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingLeft: 35, paddingRight:35 }}>
          <Text>Peer-reviewed conferences focusing on Information Systems & Computing Education and Information Systems Applied Research inviting scholarly work including research papers, case studies, abstracts and workshop/panel proposals.</Text>
        </View>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text style={{padding:1}}>Find us on Social Media!</Text>
        
        <View style={{ flexDirection: "row"}}>
          
          <OpenURLButton type='facebook' url={'https://www.facebook.com/groups/edsig/'} />
          <OpenURLButton type='twitter' url={'https://twitter.com/edsigcon'} />
          <OpenURLButton type='linkedin' url={'https://www.linkedin.com/groups/8655139'} />
        </View>
        </View>
      </>



    );
  }
}
export default About; 