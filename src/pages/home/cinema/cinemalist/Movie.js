import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text
} from 'react-native';

import NaviBar from './NaviBar';

export default class Movie extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.onNaviBarPress = this.onNaviBarPress.bind(this);
        // 不同的Page,需要修改下面的这个数组, 通过数组控制导航栏条目显示状态
        this.naviStatus = [1, 0];
    }

    onNaviBarPress(aNumber) {
        //不同的page需要修改下面这个switch的处理逻辑
        switch (aNumber) {
            case 0:
                return;
            case 1:
                //通过replace切换
                this.props.navigator.replace({
                    name: 'Cinema'
                });
                return;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <NaviBar naviBarStatus={this.naviStatus}
                    onNaviBarPress={this.onNaviBarPress} />
                <View style={styles.whatLeft} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    whatLeft: {  // 组件定义了一个上边框
        flex: 1,
        borderTopWidth: 1,
        borderColor: 'black',
        backgroundColor: 'orange' //每个界面背景颜色不一样
    }
});