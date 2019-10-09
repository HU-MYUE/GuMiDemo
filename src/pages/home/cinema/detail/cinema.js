import React, { Component } from "react";

import { StyleSheet, View, ActivityIndicator} from "react-native";
import { Header } from 'react-native-elements';
import Info from './info'
import Display from './display'
export default class Cinema extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      data: { }
    };
  }
  static defaultProps = {

  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('http://45.76.105.46:8080/cinema/detail?cinemaId=1')
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData)
        if(responseData.status==='200'){
          this.setState({
            data: responseData.result,
            loaded: true
          });
        }
        else{
          alert('请求失败')
        }     
      });
  }
  
  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    
    return (
      <View style={styles.content}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: '影院位置', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Info info={this.state.data} />
        <Display movieList={this.state.data.movieList} />
      </View>
    );
  }
  renderLoadingView() {
    return (
      <ActivityIndicator size="large" color="#0000ff" style={styles.container}/>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
  }
});