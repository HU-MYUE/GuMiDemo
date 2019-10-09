import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
    Image
} from 'react-native';

//获取设备的宽度和高度
var {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');

export default class NaviBar extends Component {
    componentWillMount() {
        //通过属性得知哪个导航按钮是当前的导航也，这个导航按钮将用灰色背景
        this.buttonColors = this.props.naviBarStatus.map(
            function (aNumber) {
                if (aNumber == 0) return 'white';
                return 'red';
            }
        );
    }

    //2个按钮被按下时处理函数
    _naviTab0Pressed() {
        this.props.onNaviBarPress(0);
    }

    _naviTab1Pressed() {
        this.props.onNaviBarPress(1);
    }

    render() {
        return (
            //根View
            <View style={styles.naviRow}>
                <TouchableOpacity onPress={() => { 
                   // alert("进入城市定位页面")
                   this.props.navigation.navigate('CityLocation') 
                     }}>
                    <View style={styles.backIcon}>
                        <Text style={styles.font}>
                            西安
                        </Text>
                        <Image
                            style={styles.showMore}
                            source={require('../../../../assets/CinemaList/show_more_city.png')}
                        />
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={this._naviTab0Pressed.bind(this)}>
                    <View style={[styles.button, { backgroundColor: this.buttonColors[0] }]}>
                        <Text style={styles.textStyle1}>
                            影片
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this._naviTab1Pressed.bind(this)}>
                    <View style={[styles.button, { backgroundColor: this.buttonColors[1] }]}>
                        <Text style={styles.textStyle1}>
                            影院
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { 
                    //alert("进入城市定位页面") 
                    this.props.navigation.navigate('LocationCinema') 
                    }}>
                    <View>
                        <Image
                            style={styles.address}
                            source={require('../../../../assets/CinemaList/address.png')}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { 
                   // alert("进入搜索页面")
                    this.props.navigation.navigate('Search') 
                     }}>
                    <View >
                        <Image
                            style={styles.search}
                            source={require('../../../../assets/CinemaList/search.png')}
                        />

                    </View>

                </TouchableOpacity>
            </View>
        );
    }
}

//样式
const styles = StyleSheet.create({
    naviRow: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'flex-start',
    },

    backIcon: {
        flexDirection: 'row',
        width: 35,
        height: 30,
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        marginRight: 160,

    },

    font: {
        fontSize: 17,
        textAlign: "center",
        top: 4,
    },

    showMore: {
        flexDirection: 'row',
        width: 35,
        height: 30,
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        marginRight: 160,
        top: 0,
    },

    address: {
        flexDirection: 'row',
        width: 40,
        height: 30,
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        marginLeft: 70,
    },

    search: {
        marginTop: 3,
        flexDirection: 'row',
        width: 20,
        height: 20,
        // width: 35,
        // height: 30,
        justifyContent: "flex-end",
        alignItems: 'flex-end',
        marginLeft: 2,
        left:1,
    },


    button: {
        borderStyle: 'solid',
        borderColor: 'red',
        borderWidth: 1,
        width: 70,
        height: 30,
        textAlign: 'center',
        lineHeight: 30,
        color: 'red',
        fontSize: 15,
    },

    textStyle1: {
        fontSize: 20,
        textAlign: 'center',
    }
});