import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default class SessionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: '1', startTime: '10:00', endTime: '12:00', minprice: 45, maxprice: 71.9, place: '6号厅', taps: '国语/3D' },
                { id: '2', startTime: '10:55', endTime: '12:55', minprice: 45, maxprice: 71.9, place: '6号厅', taps: '国语/3D' },
                { id: '3', startTime: '12:00', endTime: '14:00', minprice: 45, maxprice: 71.9, place: '6号厅', taps: '国语/3D' },
                { id: '4', startTime: '16:30', endTime: '18:30', minprice: 45, maxprice: 71.9, place: '6号厅', taps: '国语/3D' },
            ],
            date: [
                '今天 10.08', '明天 10.09', '后天 10.10'
            ],
            selected: '今天 10.08',
            loaded: false
        };
    }
    static defaultProps = {
    }
    componentDidMount() {
        this.setState({ loaded: true })
    }
   
    render() {
        let { date, selected } = this.state
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }
        return (
            <View>
                <View style={styles.line} />
                <View style={styles.datelist}>
                    {date.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={()=>{this.setState({ selected:item})}}>
                                <Text key={index} style={item === selected ? styles.selected_date : styles.date}>{item}</Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderMovie}
                    key={item => item.id}
                />
            </View>
        );
    }
    renderMovie({ item }) {
        return (
            <View>
                <View style={styles.line} />
                <View style={styles.content}>
                    <View>
                        <Text style={styles.startTime}>{item.startTime}</Text>
                        <Text style={styles.endTime}>{item.endTime}结束</Text>
                    </View>
                    <View>
                        <Text style={styles.taps}>{item.taps}</Text>
                        <Text style={styles.place}>{item.place}</Text>
                    </View>
                    <View>
                        <Text style={styles.price}>优惠
                        <Text style={styles.minprice}>{item.minprice}</Text>元</Text>
                        <Text style={styles.maxprice}>{item.maxprice}</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>{alert('购票')}} >
                            <Text style={styles.button}>购票</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        );
    }
    renderLoadingView() {
        return (
            <View style={styles.container}>
                <Text >Loading...</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    datelist: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        height: 40,
    },
    date: {
        marginLeft: 15,
        marginRight: 15,
        color: '#6C6C6C'
    },
    selected_date: {
        marginLeft: 15,
        marginRight: 15,
        color: 'red'
    },
    line: {
        height: 1,
        backgroundColor: '#d0d0d0',
    },
    button: {
        color: 'red',
        borderRadius: 12,
        borderColor: 'red',
        padding: 10,
        borderWidth: 1
    },
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    content: {
        marginBottom: 10,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    startTime: {
        fontSize: 20,
        fontWeight: "bold",
    },
    endTime: {
        marginTop: 5,
        color: '#888888'
    },
    taps: {

    },
    place: {
        marginTop: 7,
        color: '#888888'
    },
    price: {
        color: 'red'
    },
    minprice: {
        fontSize: 20,
    },
    maxprice: {
        color: '#888888',
        textDecorationLine: 'line-through'
    },
    link: {
        height: 1,
        borderColor: 'black',
        //border-top: solid #ACC0D8 1px
    }
});