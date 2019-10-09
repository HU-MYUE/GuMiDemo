
import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';

import { Tile } from 'react-native-elements';

export default class Still extends Component {

    constructor(props) {
        super(...arguments)
        this.state = {
        }
    }
    render() {
        return (
            <View>
                <Tile
                    imageSrc={require('‪../../../assets/img/stillsmall1.png‪')}
                    title="Lorem ipsum dolor sit amet, consectetur"
                    icon={{ name: 'play-circle', type: 'font-awesome' }} // optional
                    contentContainerStyle={{ height: 70 }}
                >
                    <View
                        style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
                    >
                        <Text>Caption</Text>
                        <Text>Caption</Text>
                    </View>
                </Tile>
            </View>
        )
    }
}