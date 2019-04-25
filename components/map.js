import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

 const MapBox = ({ lat, long, ...props }) => (
  <View style={styles.MapContainer}>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.map}
      region={{
        latitude: { lat },
        longitude: { long },
        latitudeDelta: 1,
        longitudeDelta: 1,
      }}
    >
    </MapView>
  </View>
)

export default MapBox; 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50
  },
  boldText: {
    fontSize: 30,
    color: 'red',
  },
  MapContainer: {
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