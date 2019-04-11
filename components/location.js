import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'

export default class Location extends Component {
    state = {
        initialPosition: 'unknown',
        lastPosition: 'unknown',
        lat: 0,
        long: 0,
    }
    watchID: ?number = null;
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
    componentWillUnmount = () => {
        navigator.geolocation.clearWatch(this.watchID);
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
    }
})