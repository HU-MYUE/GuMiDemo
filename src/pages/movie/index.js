import React, { Component } from "react";
import { Image, FlatList, StyleSheet, Text, View, Dimensions, } from "react-native";
import Head from './movielist/head'
import TabList from './movielist/tab';

import { StackActions } from 'react-navigation';

var screenHeight = Dimensions.get('window').height;
var screenWidth = Dimensions.get('window').width;

const tab_cate_select = require('../../assets/tabr/mov-active.png');
const tab_cate = require('../../assets/tabr/mov.png');

export default class Index extends Component {
  // 此处设置 Tab 的名称和一些样式，这里的会覆盖掉配置路由文件的样式，下面会讲
  static navigationOptions = {
    headerTitle: '看片',
    tabBarLabel: '看片',
    tabBarIcon: ({ focused, horizontal, tintColor }) => (
      <Image
        source={focused ? tab_cate_select : tab_cate}
        style={{ width: 30, height: 30 }}
        resizeMode={'contain'}
      />
    )
  };
  componentDidMount() {
    // this.props.navigation.navigate('MovieDetails')
    // this.props.navigation.addListener(
    //   'didFocus',
    //   payload => {
    //     // console.debug('didBlur', payload);
    //     alert('我做到了')
    //   }
    // );
    // const pushAction = StackActions.push({
    //   routeName: 'Tab1',
    //   params: {
    //     // myUserId: 9,
    //   },
    // });
    // alert(this.props.navigation.state.routeName)
    // this.props.navigation.dispatch(pushAction);
  }
  render() {
    return (
      <View style={{ height: screenHeight, width: screenWidth }}>
        <Head />
        <TabList navigation={this.props.navigation}/>
      </View>
    );
  }
}