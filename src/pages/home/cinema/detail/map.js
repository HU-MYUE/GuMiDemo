import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { MapView, Marker } from "react-native-amap3d";


export default class Map extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MapView style={styles.map}
        coordinate={{
          latitude: Number(this.props.info.latitude),
          longitude: Number(this.props.info.longitude),
        }}
        zoomLevel={18}
        tilt={0}
        showsIndoorMap
      >
        <Marker
          active
          title={this.props.info.cineName}
          color='red'
          description={this.props.info.location}
          coordinate={{
            latitude: Number(this.props.info.latitude),
            longitude: Number(this.props.info.longitude),
          }}
        />
      </MapView>
    )
  }
}
const styles = StyleSheet.create({
  map: {
    flex: 1,
  }
})