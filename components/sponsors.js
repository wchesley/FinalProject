import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet, Image, FlatList, Linking } from 'react-native'
import { Tile } from 'react-native-elements'
import firebase from 'react-native-firebase'
import { SocialIcon } from 'react-native-elements'


const list =
  {
    ISCAP_bio: 'ISCAP is a non-profit corporation governed by a board of directors who in partnership with EDSIG help organize and manage two conferences, EDSIGCON and CONISAR, and three journals, JISE, ISEDJ and JISAR.',
    ISCAP_uri: 'http://www.iscap.info/#about',
    EDSIG_bio: "EDSIG's board of directors is responsible for the scholarly vision and content of EDSIGCON, CONISAR, ISEDJ and JISAR",
    EDSIG_uri: 'http://www.aitp-edsig.org/',
    //icon: './img/logo-edsig.png',
     
  }
  
class Sponsors extends React.Component {
  constructor() {
    super();
    //this.ref = firebase.firestore().collection('Sponsors','Speakers');
    //this.unsubscribe = null;
    this.state = {
      // loading: true,
      // sponsorsData: [],
    }
  }
  /*
  handleClick = url => {
    Linking.canOpenURL(url).then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log("Don't know how to open URI: " + url);
        }
      });
    };
  */

  render() {
    return (
      <>

        <Tile
          imageSrc={require('./img/logo-iscap.png')}
          title={'Information Systems & Computing Academic Professionals, Inc.'}
          //onPress={this.handleClick(list.ISCAP_uri)}
        >
          <View>
            <Text>{list.ISCAP_bio}
</Text>
          </View>
        </Tile>
        <Tile
          imageSrc={require('./img/logo-edsig.png')}
          title={'Education Special Interest Group of AITP'}
          //onPress={this.handleClick(list.EDSIG_uri)}
        >
          <View>
            <Text>{list.EDSIG_bio}
</Text>
          </View>
        </Tile>
        

      </>
    );
  }
}

export default (Sponsors);




