import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native'
import { NavigationActions } from 'react-navigation';
import { Tile } from 'react-native-elements'
import { thisTypeAnnotation } from '@babel/types';

export default class SponsorsComponent extends React.PureComponent {
    render() {
        return (
            <>
                <Tile
                    //imageSrc={require(this.props.iconRef.toString())}
                    title={this.props.name}
                    //subtitle={this.props.bio} 
                    //onPress={() => this.props.navigation.navigate()}
                    >
                    <View>
                        <Text>{this.props.bio}</Text>
                        <Text>{this.props.iconRef}</Text>
                    </View>
                    </Tile>
            </>
        )
    }
}