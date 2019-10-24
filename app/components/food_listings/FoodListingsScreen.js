import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, TouchableOpacity, Button, Platform } from 'react-native';
import FilterHeaderComponent from '../others/FilterHeaderComponent';
import CardImageComponent from '../others/CardImageComponent';


export default class FoodListingsScreen extends Component<Props> {

  render() {
    const data = [
      {title: 'Cannon EOS 60D', imageSource: require('../../photos/camera.jpg'), userName: 'Alex', price: 'Free', distance: '10 miles'},
      {title: 'Samsung Galaxy S10', imageSource: require('../../photos/s10.jpg'), userName: 'Emma', price: '$3', distance: '3 miles'},
      {title: 'Windows 10', imageSource: require('../../photos/windows10.jpg'), userName: 'Kevin', price: 'Free', distance: '14 miles'},
      {title: 'Cannon EOS 60D', imageSource: require('../../photos/camera.jpg'), userName: 'Alex', price: 'Free', distance: '10 miles'},
      {title: 'Samsung Galaxy S10', imageSource: require('../../photos/s10.jpg'), userName: 'Emma', price: '$3', distance: '3 miles'},
      {title: 'Windows 10', imageSource: require('../../photos/windows10.jpg'), userName: 'Kevin', price: 'Free', distance: '14 miles'},
      {title: 'Cannon EOS 60D', imageSource: require('../../photos/camera.jpg'), userName: 'Alex', price: 'Free', distance: '10 miles'},
      {title: 'Samsung Galaxy S10', imageSource: require('../../photos/s10.jpg'), userName: 'Emma', price: '$3', distance: '3 miles'},
      {title: 'Windows 10', imageSource: require('../../photos/windows10.jpg'), userName: 'Kevin', price: 'Free', distance: '14 miles'},
      {title: 'Cannon EOS 60D', imageSource: require('../../photos/camera.jpg'), userName: 'Alex', price: 'Free', distance: '10 miles'},
      {title: 'Samsung Galaxy S10', imageSource: require('../../photos/s10.jpg'), userName: 'Emma', price: '$3', distance: '3 miles'},
      {title: 'Windows 10', imageSource: require('../../photos/windows10.jpg'), userName: 'Kevin', price: 'Free', distance: '14 miles'},
      {title: 'Cannon EOS 60D', imageSource: require('../../photos/camera.jpg'), userName: 'Alex', price: 'Free', distance: '10 miles'},
      {title: 'Samsung Galaxy S10', imageSource: require('../../photos/s10.jpg'), userName: 'Emma', price: '$3', distance: '3 miles'},
      {title: 'Windows 10', imageSource: require('../../photos/windows10.jpg'), userName: 'Kevin', price: 'Free', distance: '14 miles'},
    ]
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <FilterHeaderComponent navigation={this.props.navigation} isDirectory={false}/>
        </View>

        <ScrollView style={styles.contentContainer} contentContainerStyle={styles.scrollviewContainer}>

          <View style={styles.itemsContainer}>
            <Text style={styles.titleText}>Frequently Used</Text>
            <CardImageComponent data={data} navigation={this.props.navigation} viewRequired={'horizontalScroll'}/>
          </View>

          <View style={styles.itemsContainer}>
            <Text style={styles.titleText}>Recently Stored</Text>
            <CardImageComponent data={data} navigation={this.props.navigation} viewRequired={'horizontalScroll'}/>
          </View>

          <View style={styles.itemsContainer}>
            <Text style={styles.titleText}>All Products</Text>
            <CardImageComponent data={data} navigation={this.props.navigation} viewRequired={'big'}/>
          </View>

        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollviewContainer: {
    flexGrow: 1,
  },
  header: {
    flex: 0.2,
    padding: 5,
  },
  contentContainer: {
    flex: 0.8,
  },
  itemsContainer: {
    flex: 1,
    marginVertical: 20,
  },
  titleText: {
    fontSize: 25,
    marginBottom: 10,
    textAlign: 'center'
  },
});
