import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import  styles from './style'
import {Avatar} from "react-native-elements";


export default class Index extends Component {
    render() {
        return (
            <View style={{
                height:60,
                paddingLeft: 18,
                paddingRight: 18,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <View style={{
                    flex: 1,
                    paddingTop: 3
                }}>
                    <Avatar
                        size="small"
                        rounded
                        source={{uri: 'https://yanxuan.nosdn.127.net/c7de7e8850dc05df6943a1a39dce2558.jpg?imageView&thumbnail=0x196'}}
                        onPress={() => {
                        }}
                        activeOpacity={0.7}/>
                </View>
                <View style={{
                    flex: 10,
                    marginLeft: 8
                }}>
                    <TextInput
                        multiline={true}
                        placeholder={'来吐槽'}
                        placeholderTextColor={'#a2a2a2'}
                        underlineColorAndroid={'transparent'}
                        style={{
                            width: '100%',
                            backgroundColor: '#dcdcdc',
                            fontSize: 20,
                            color: '#333333',
                            borderRadius: 40,
                            paddingHorizontal: 16,
                            paddingVertical: 0
                        }}
                    />
                </View>
            </View>
        )
    }
}