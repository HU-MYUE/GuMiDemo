import React, { Component } from 'react'
import {KeyboardAvoidingView, ScrollView, View, Dimensions} from 'react-native'
import  styles from './style'
import Details from './details'
import Footer from './footer'
import Comment from './comment'

const {height} = Dimensions.get('window')
export default class Index extends Component {


    render() {
        const {item} = this.props.navigation.state.params
        return (
            <KeyboardAvoidingView style={{flex: 1}}>
                <ScrollView style={{height: height}}>
                    <Details item = {item} />
                    <View style={{height:60}} />
                </ScrollView>
                <View style={{height:60, borderTopWidth: 1, borderTopColor: '#BBBBBB',
                    position: 'absolute', bottom: 0, left: 0, right: 0}}>
                    <Footer />
                </View>
            </KeyboardAvoidingView>
        )
    }
}