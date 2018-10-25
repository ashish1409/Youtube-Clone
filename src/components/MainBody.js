import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class MainBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        let video = this.props.video;
        debugger;
        return (
            <View style={styles.container}>

                <View>
                    <Image source={{ uri: video.snippet.thumbnails.medium.url }} style={{ height: 200, borderRadius: 0 }} />
                    <View style={styles.txtContainer}>
                        <Image source={{ uri: video.snippet.thumbnails.medium.url }} style={styles.profilePic}></Image>
                        <View style={styles.innerContainer}>
                            <Text style={styles.videoTitle}>{video.snippet.title}</Text>
                            <Text style={styles.videoStats}>{video.snippet.channelTitle} - 5K views</Text>
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#000'
    },
    txtContainer: {
        marginLeft: 10,
        paddingRight: 20,
        flexDirection: 'row',
        paddingTop: 15
    },
    videoTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
        marginRight: 4,
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#fff'
    },
    innerContainer: {
        marginLeft: 10,
        padding: 5,

    },
    videoStats: {
        fontSize: 12,
        color: '#fff',
        marginTop: 5
    }
});