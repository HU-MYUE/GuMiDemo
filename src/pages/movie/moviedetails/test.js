import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

// import {TabNavigator,StackNavigator} from 'react-navigation';

import Index from './index';

export default class Test extends Component {

  onPressLearnMore(){
    alert('点击了')
    // this.props.navigator.push({
    //   component: Index,
    //   })
      // this.props.navigation('Index', { name: 'Index' })
  }

  render() {
    return (
      <View style={styles.View}>
        <Text style={styles.Text}>Hello, world!</Text>
        <Button
          style={styles.Button}
          onPress={this.onPressLearnMore}
          title="点击开始冒险之旅！"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
// const App = StackNavigator({
//   Test: {
//     screen: Test,
//     navigationOptions: {
//       header: null // 无标题栏
//     }
//   }
// });
// module.exports = App;

const styles = StyleSheet.create({
  View: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  },
  Text: {
      fontSize: 40
  },
  Button: {
      width: 200,
      height: 500
  }
})

