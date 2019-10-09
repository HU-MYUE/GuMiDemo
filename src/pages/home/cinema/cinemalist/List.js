import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Alter } from 'react-native';

export default class List extends Component {

  _extraUniqueKey(item, index) {
    return "index" + index + item;
  }
  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  componentDidMount() {
    return fetch('http://45.76.105.46:8080/cinema/list')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("111" + JSON.stringify(responseJson))
        if (responseJson.status === "200") {
          console.log('success', responseJson.msg)
          this.setState({
            isLoading: false,
            dataSource: responseJson.result,
          }, function () {

          });
        } else {
          console.log('failed', responseJson.msg)
        }

      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View >
        <FlatList
          data={this.state.dataSource}
          keyExtractor={this._extraUniqueKey}
          renderItem={({ item, key }) =>

            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('CineMa', { cinemaId: item.cinemaId })
            }} underlayColor="white">

              <View key={key} style={styles.cinema}>

                <View style={styles.viewdetail}>
                  <Text style={styles.cineName} >{item.cineName}</Text>
                  <Text style={styles.miniprice}>￥{item.miniprice}元起</Text>
                </View>

                <View style={styles.viewdetail}>
                  {item.location.length > 23 ? <Text style={styles.location}>
                    {item.location.substring(0, 23)}...</Text> : <Text style={styles.location}>{item.location}</Text>}
                </View>

                <View style={styles.viewdetail1}>
                  {item.label.map((index, key) =>
                    <Text key={key} style={styles.label}> {index}</Text>
                  )}
                </View>

              </View>
            </TouchableOpacity>

          }
        />
      </View>
    );
  }
}

var styles = StyleSheet.create({
  cinema: {
    marginTop: 2,
    marginBottom: 2,
    borderBottomWidth: 1,
    marginLeft: 6,
    borderBottomColor: '#e7e7e7',
  },

  viewdetail: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 10,
  },

  viewdetail1: {
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 100,
  },

  cineName: {
    textAlign: "left",
    color: '#666',
    fontSize: 16,
  },

  miniprice: {
    textAlign: "right",
    color: 'red',
    fontSize: 13,
    marginRight: 9,
  },

  location: {
    color: '#666',
    fontSize: 14,
    textAlign: "left",
  },

  cinemaDistance: {
    color: '#666',
    fontSize: 10,
    textAlign: "right",
  },

  label: {
    borderRadius: 8,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    margin: 3,
    backgroundColor: "#d0d0d0",
    color: 'white',
    fontSize: 12
  }

});