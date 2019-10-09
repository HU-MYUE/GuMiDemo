import React, {Component} from "react";
import { DeviceEventEmitter } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import List from './list';
import Recommend from './recommend'
import Video from './video'
export default class TabList extends Component {
  componentDidMount(){
    //收到监听
    this.listener = DeviceEventEmitter.addListener('通知名称', (message) => {
      //收到监听后想做的事情
      // alert(message);  //监听
      this.props.navigation.navigate('MovieDetails')
      })
  }
  componentWillUnmount() {
    //移除监听
    if (this.listener) {
      this.listener.remove();
    }
  }
  render() {
      return (
          <Tab />
      );
  }
}
  const TabContent = createMaterialTopTabNavigator (
    {
      ListTab: {
        screen: List,
        navigationOptions: {
          tabBarLabel: '片库',
        }
      },
      RecommendTab: {
        screen: Recommend,
        navigationOptions: {
            tabBarLabel: '看片推荐',
        }
      },
      VideoTab: {
        screen: Video,
        navigationOptions: {
            tabBarLabel: '小视频',
        }
      },
  },
    {
      initialRouteName: 'ListTab',
      swipeEnabled: true,
      animationEnabled: true,
      lazy: false,
      tabBarPosition:'top',
      tabBarOptions: {
        activeTintColor: 'red',
        labelStyle: {
          fontSize: 15,
          color: 'black'
        },
        style: {
          backgroundColor: 'white',
        },
      }
    }
)

const Tab = createAppContainer(TabContent);

// module.exports = Tab

