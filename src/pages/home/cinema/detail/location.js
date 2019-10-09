import React, { Component } from "react";

import { StyleSheet, View } from "react-native";

import { Header } from 'react-native-elements';
import Map from './map'

export default class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  static defaultProps = {
    info: {
      'cineName': "中影泰德影城",
      'location': "高新区锦业路丈八二路绿地缤纷",
      'longitude': '108.883874',
      'latitude': '34.193106',
    }
  };
  render() {
    return (
      <View style={styles.content}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: '影院位置', style: { color: '#fff' } }}
        />
        <Map info={this.props.info}/>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "steelblue"
  },
  content: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "skyblue"
  }
});