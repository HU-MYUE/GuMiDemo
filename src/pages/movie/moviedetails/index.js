import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

import Video from 'react-native-video';

export default class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isrepert: true
    }
  }

  loadStart() {

  }
  setDuration() {

  }
  setTime() {

  }
  onEnd() {

  }
  videoError() {

  }

  handlePress = () => {
    this.setState({isrepert: false}, () => {
      this.setState({isrepert: true})
    })
  }

  render() {
    return (
      <View style={styles.view}>
        <Text>Hello World!!!!</Text>
        <View style={styles.viewvideo}>
          {/* <View style={styles.viewvideo_control}>
            <View style={styles.viewvideo_control_view1}>
              <Text style={{ color: 'white', fontWeight: '800', fontSize: 18 }}>按钮</Text>
              <Text style={[{ color: 'white'}, {fontWeight: '800', fontSize: 18 }]}>按钮</Text>
            </View>
            <View style={styles.viewvideo_control_view2}>
              <Text style={{ color: 'white', fontWeight: '800', fontSize: 18 }}>按钮</Text>
            </View>
            <View style={styles.viewvideo_control_view3}>
              <Text style={{ color: 'white', fontWeight: '800', fontSize: 18 }}>按钮</Text>
            </View>
          </View> */}
          {this.state.isrepert && <Video
            source={{ uri: "http://vd2.bdstatic.com/mda-jijqav3gnv1ezf9h/sc/mda-jijqav3gnv1ezf9h.mp4" }} // 视频的URL地址，或者本地地址，都可以. 
            // source={require('‪../../../assets/video/videotest.mp4')}
            poster='https://baconmockup.com/300/200/'
            // poster={require('‪../../../assets/img/timg.gif')}
            rate={1.0}                   // 控制暂停/播放，0 代表暂停paused, 1代表播放normal. 
            volume={1.0}                 // 声音的放大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数 
            muted={false}                // true代表静音，默认为false. 
            paused={false}               // true代表暂停，默认为false 
            resizeMode="contain"           // 视频的自适应伸缩铺放行为，
            repeat={false}                // 是否重复播放 
            playInBackground={false}     // 当app转到后台运行的时候，播放是否暂停
            playWhenInactive={false}     // [iOS] Video continues to play when control or notification center are shown. 仅适用于IOS
            onLoadStart={this.loadStart} // 当视频开始加载时的回调函数
            onLoad={this.setDuration}    // 当视频加载完毕时的回调函数
            onProgress={this.setTime}    //  进度控制，每250ms调用一次，以获取视频播放的进度
            onEnd={this.onEnd}           // 当视频播放完毕后的回调函数
            onError={this.videoError}    // 当视频不能加载，或出错后的回调函数
            controls={true}
            style={styles.backgroundVideo}
            ref='video' />}
        </View>
        <Text onPress={this.handlePress}>Hello World!!!!</Text>
      </View>
    );
  }
};
var styles = StyleSheet.create({
  view: {
    backgroundColor: 'green',
    height: 600,
  },
  viewvideo: {
    // flex: 1,
    // flexDirection: "row",
    height: 304,
    backgroundColor: 'red',
  },
  viewvideo_control: {
    // width: 100,
    position: "absolute",
    width: '100%',
    height: 253,
    zIndex: 2,
    flexDirection: 'column'
    // justifyContent: "space-between"

  },
  viewvideo_control_view1: {
    backgroundColor: '#233995',
    opacity: 0.8,
    width: '100%',
    flex: 1
  },
  viewvideo_control_view2: {
    backgroundColor: '#656565',
    opacity: 0.8,
    width: '100%',
    flex: 4
  },
  viewvideo_control_view3: {
    backgroundColor: '#123532',
    opacity: 0.8,
    width: '100%',
    flex: 1
  },
  backgroundVideo: {
    flex: 1,
    // height: 250
  },
});