import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { React, Component } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'
/*
 TESTING MAP PAGE, NOT READY FOR PROD

 TODO: 
 Fix styling
 pin user location
 get location dynamically
 set location data to redux store 

*/

class MapBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
      lat: 0,
      long: 0,
    };
}
  watchID:?number = null;
  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        const initialPosition = JSON.stringify(position);
        this.setState({ initialPosition, long, lat });
      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      const lastPosition = JSON.stringify(position);
      this.setState({ lastPosition });
    });
  }
  componentWIllUnmount = () => {
    navigator.geolocation.clearWatch(this.watchID);
  }
  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: this.state.lat,
            longitude: this.state.long,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          >
        </MapView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapBox; 