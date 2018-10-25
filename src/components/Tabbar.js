import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
export default class TabBar extends Component {
    render() {
        return (
            <View style={styles.tabbar}>
                <TouchableOpacity style={styles.container}>
                    <Icon name="home" size={25}></Icon>
                    <Text style={styles.myTxt}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <Icon name="whatshot" size={25}></Icon>
                    <Text style={styles.myTxt}>WhatsHot</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.container}>
                    <Icon name="subscriptions" size={25}></Icon>
                    <Text style={styles.myTxt}>Subscriptions</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.container}>
                    <Icon name="add-alert" size={25}></Icon>
                    <Text style={styles.myTxt}>Add Alert</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.container}>
                    <Icon name="folder" size={25}></Icon>
                    <Text style={styles.myTxt}>Folder</Text>
                </TouchableOpacity>


            </View>
        );
    }
}
const styles = StyleSheet.create({
    tabbar: {
        backgroundColor: '#fff',
        height: 60,
        borderTopWidth: 2,
        borderColor: '#e5e5e5',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    myTxt: {
        fontSize: 14,
        textAlign: 'center',
        paddingTop: 2,
        color: 'rgba(0,0,0,0.6 )'
    }
});
