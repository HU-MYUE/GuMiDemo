import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View
} from 'react-native';
import NaviBar from './NaviBar';
import Banner from './Banner';
import List from './List';
export default class Cinema extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.onNaviBarPress = this.onNaviBarPress.bind(this);
        // 不同的Page,需要修改下面的这个数组, 通过数组控制导航栏条目显示状态
        this.naviStatus = [0, 1];
    }

    onNaviBarPress(aNumber) {
        //不同的page需要修改下面这个switch的处理逻辑
        switch (aNumber) {
            case 0:
                this.props.navigator.replace({
                    name: 'Movie'
                });
                return;
            case 1:
                return;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <NaviBar naviBarStatus={this.naviStatus}
                    onNaviBarPress={this.onNaviBarPress}
                    navigation={this.props.navigation} />
                <View style={styles.whatLeft}>
                    <Banner />
                    <List navigation={this.props.navigation}/>
                </View>
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
        backgroundColor: 'white' //每个界面背景颜色不一样
    }
});