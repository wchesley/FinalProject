import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

export default class Location extends Component {
    state = {
        initialPosition: 'unknown',
        lastPosition: 'unknown',
        lat: 0,
        long: 0,
    }
    watchID: ?number = null;
    componentWillMount = () => {
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
    componentWillUnmount = () => {
        navigator.geolocation.clearWatch(this.watchID);
    }
    setMapRegion = () => {
        region = {
            latitude: this.state.lat,
            longitude: this.state.long,
            latitudeDelta: 1,
            longitudeDelta: 1,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.boldText}>
                    Initial position:
            </Text>

                <Text>
                    {this.state.initialPosition}
                </Text>

                <Text style={styles.boldText}>
                    Current position:
            </Text>

                <Text>
                    {this.state.lastPosition}
                </Text>
                <View style={styles.container}>
                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        region={this.setMapRegion()}
                    >
                    </MapView>
                </View>
            </View>
        )
    }
}

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
