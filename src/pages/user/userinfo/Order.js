import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    Alert,
    FlatList,
    TouchableOpacity
} from 'react-native';

import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MyCustomLeftComponent from './LeftComponent'

// const list = [
//     {
//         orderId: '1',
//         cinemaId: '1',
//         cineName: '中影泰德影城',
//         location: '高新区锦业路',
//         movieId: '1',
//         movieName: '大圣归来',
//         showTime: '2019年09月30日 13:25',
//         pieces: '2',
//         totalPrice: '72.3'
//     },
//     {
//         orderId: '1',
//         cinemaId: '1',
//         cineName: '中影泰德影城',
//         location: '高新区锦业路',
//         movieId: '1',
//         movieName: '我和我的祖国',
//         showTime: '2019-09-30',
//         pieces: '2',
//         totalPrice: '72.3'
//     },
//     {
//         orderId: '1',
//         cinemaId: '1',
//         cineName: '中影泰德影城',
//         location: '高新区锦业路',
//         movieId: '1',
//         movieName: '我和我的祖国',
//         showTime: '2019-09-30',
//         pieces: '2',
//         totalPrice: '72.3'
//     },
//     {
//         orderId: '1',
//         cinemaId: '1',
//         cineName: '中影泰德影城',
//         location: '高新区锦业路',
//         movieId: '1',
//         movieName: '我和我的祖国',
//         showTime: '2019-09-30',
//         pieces: '2',
//         totalPrice: '72.3'
//     },
//     {
//         orderId: '1',
//         cinemaId: '1',
//         cineName: '中影泰德影城',
//         location: '高新区锦业路',
//         movieId: '1',
//         movieName: '我和我的祖国',
//         showTime: '2019-09-30',
//         pieces: '2',
//         totalPrice: '72.3'
//     }
// ]



export default class Order extends Component {
    
    constructor() {
		super(...arguments)
        this.state ={ 
            list: [
                // {
                //     orderId: '1',
                //     cinemaId: '1',
                //     cineName: '中影泰德影城',
                //     location: '高新区锦业路',
                //     movieId: '1',
                //     movieName: '大圣归来',
                //     showTime: '2019年09月30日 13:25',
                //     pieces: '2',
                //     totalPrice: '72.3'
                // },
                // {
                //     orderId: '1',
                //     cinemaId: '1',
                //     cineName: '中影泰德影城',
                //     location: '高新区锦业路',
                //     movieId: '1',
                //     movieName: '我和我的祖国',
                //     showTime: '2019-09-30',
                //     pieces: '2',
                //     totalPrice: '72.3'
                // },
                // {
                //     orderId: '1',
                //     cinemaId: '1',
                //     cineName: '中影泰德影城',
                //     location: '高新区锦业路',
                //     movieId: '1',
                //     movieName: '我和我的祖国',
                //     showTime: '2019-09-30',
                //     pieces: '2',
                //     totalPrice: '72.3'
                // },
                // {
                //     orderId: '1',
                //     cinemaId: '1',
                //     cineName: '中影泰德影城',
                //     location: '高新区锦业路',
                //     movieId: '1',
                //     movieName: '我和我的祖国',
                //     showTime: '2019-09-30',
                //     pieces: '2',
                //     totalPrice: '72.3'
                // },
                // {
                //     orderId: '1',
                //     cinemaId: '1',
                //     cineName: '中影泰德影城',
                //     location: '高新区锦业路',
                //     movieId: '1',
                //     movieName: '我和我的祖国',
                //     showTime: '2019-09-30',
                //     pieces: '2',
                //     totalPrice: '72.3'
                // }
            ]
        }
    }

    componentDidMount(){
        return fetch('http://45.76.105.46:8080/user/order/list?userId=1', {
            method: 'GET',
            // headers: {
            //   Accept: 'application/json',
            //   'Content-Type': 'application/json',
            // },
            // body: JSON.stringify({
            //   firstParam: 'yourValue',
            //   secondParam: 'yourOtherValue',
            // }),
            //body: 'key1=value1&key2=value2',
        })
          .then((response) => response.json())
          .then((responseJson) => {
           console.log(responseJson)
           if(responseJson.status =='200')
           {
            this.setState({
              list: responseJson.result,
            }, function(){
    
            });
           }
          })
          .catch((error) =>{
            console.error(error);
          });
      }







    render() {
        return (
            <View style={styles.container}>
                <Header
                    leftComponent={<MyCustomLeftComponent navigation={this.props.navigation} />}
                    centerComponent={{ text: '我的订单', style: { color: '#fff' } }}
                />
                <ScrollView>
                    <FlatList
                        data={this.state.list}
                        keyExtractor={(item,indx)=>item.orderId}
                        renderItem={({ item,index }) =>
                            <View  key={item.orderId}   style={styles.orders}>
                                <View style={styles.title}>
                                    <Text style={styles.item}>
                                        {item.cineName}
                                    </Text>
                                    <Text style={styles.item1}>
                                        实付款：<Text style={styles.item11}>{item.totalPrice}</Text>元
                                     </Text>
                                </View>

                                <View style={styles.line}>
                                </View>

                                <View style={styles.mid}>
                                    <View style={styles.midImg}>
                                        <Image
                                            style={{ width: 120, height: 180 }}
                                            source={{
                                                uri: 'https://movie.miguvideo.com/mta-service/filmpictrue/230419.jpg'
                                            }}
                                        />
                                    </View>

                                    <View style={styles.midtext}>
                                        <Text style={styles.item2}> {item.movieName}({item.pieces}张)</Text>
                                        <Text style={styles.item3}> {item.showTime}</Text>
                                        <Text style={styles.item4}> 4号厅 8排8座</Text>
                                    </View>
                                </View>

                                <View style={styles.line}>
                                </View>

                                <View style={styles.bot}>
                                    <Text style={styles.item9}>
                                        已出票
                                    </Text>
                                </View>
                            </View>
                        } />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    orders: {
        height: 310,
        backgroundColor: '#FFFFFF',
        marginBottom: 10,

    },
    title: {
        flexDirection: 'row',

    },
    item: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        fontSize: 18,
    },
    item1: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 'auto',
        marginRight: 10,
        fontSize: 18,
    },
    item11: {
        color: '#CC0000',
    },
    line: {
        backgroundColor: '#CCCCCC',
        height: 0.5,
        marginLeft: 10,
        marginRight: 10,
    },
    mid: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
    },
    midImg: {
        marginRight: 20,
    },

    item2: {
        marginBottom: 30,
        fontSize: 23,
    },
    item3: {
        fontSize: 15,
    },
    item4: {
        fontSize: 15,
    },
    bot: {
        marginTop: 10,
        marginBottom: 10,
    },
    item9: {
        marginLeft: 'auto',
        marginRight: 10,
        fontSize: 18,
        color: '#00CC33',
    },
});