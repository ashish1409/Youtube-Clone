/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Navbar from './src/components/Navbar';
import Tabbar from './src/components/Tabbar';
import MainBody from './src/components/MainBody';

import data from './src/components/Search.json';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resultyt: []
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <Navbar />
        <ScrollView>
          {
            data.items.map((value, i) => {
              return (
                <MainBody key={i} video={value} />
              )
            })
          }


        </ScrollView>
        <Tabbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
