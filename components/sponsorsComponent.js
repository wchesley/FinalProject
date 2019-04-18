import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native'
import { NavigationActions } from 'react-navigation';
import { ListItem } from 'react-native-elements'

export default class SponsorsComponent extends React.PureComponent {
    render() {
        return (
            <>
                <ListItem
                    title={this.props.Name}
                    subtitle={this.props.Bio} 
                    onPress={() => this.props.navigation.navigate()}/>
            </>
        )
    }
}