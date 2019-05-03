import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

class Location extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lat: 35,
            long: -101,
            error: null,
        };
    }

    watchID: ?number = null;
    componentDidMount = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                    initialPosition: JSON.stringify(position),
                    //this.setState({ initialPosition, long, lat });
                });
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

    render() {
        return (
            <>
                <View style={styles.MapContainer}>
                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        showUserLocation={true}
                        loadingEnabled={true}
                        region={{
                            latitude: this.state.lat,
                            longitude: this.state.long,
                            latitudeDelta: 0.05,
                            longitudeDelta: 0.05,
                        }}
                    >
                    </MapView>
                </View>
                <View>
                    <Text>
                        You are: {this.state.lat}
                    </Text>
                </View>
            </>
        );
    }
}

export default Location;

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
