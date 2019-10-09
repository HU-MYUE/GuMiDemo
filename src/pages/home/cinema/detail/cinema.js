import React, { Component } from "react";

import { StyleSheet, View, ActivityIndicator,Text} from "react-native";
import { Header } from 'react-native-elements';
import Info from './info'
import Display from './display'
import MyCustomLeftComponent from '../../../user/userinfo/LeftComponent'


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
    let cinemaId = this.props.navigation.state.params.cinemaId;
    this.fetchData(cinemaId);
  }

  fetchData(cinemaId) {
    fetch('http://45.76.105.46:8080/cinema/detail?cinemaId='+cinemaId)
      .then(response => response.json())
      .then(responseData => {
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
      <View >
        <Header
          leftComponent={<MyCustomLeftComponent navigation={this.props.navigation} />}
          centerComponent={{ text: '影院位置', style: { color: '#fff' } }}
          //rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <Info info={this.state.data} navigation={this.props.navigation}/>
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
  }
});