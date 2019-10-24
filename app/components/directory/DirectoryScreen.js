import React from 'react';
import { StyleSheet, View, ScrollView, Dimensions, Platform } from 'react-native';
import NewDirectoryComponent from './NewDirectoryComponent';

export default class DirectoryScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <ScrollView>
          <View style={[styles.contentContainer,{marginTop: 10}]}>
            <NewDirectoryComponent onPress={() => navigate('CategoryScreen', {title: 'Smartphones'})} background={require('../../photos/food_banks.png')} directoryLabel={'Smartphones'}/>
          </View>
          <View style={styles.contentContainer}>
            <NewDirectoryComponent onPress={() => navigate('CategoryScreen', {title: 'Cameras'})} background={require('../../photos/free_food_pantries.png')} directoryLabel={'Cameras'}/>
          </View>
          <View style={styles.contentContainer}>
            <NewDirectoryComponent onPress={() => navigate('CategoryScreen', {title: 'Audio Players'})} background={require('../../photos/free_fruit.png')} directoryLabel={'Audio Players'}/>
          </View>
          <View style={styles.contentContainer}>
            <NewDirectoryComponent onPress={() => navigate('CategoryScreen', {title: 'Display Devices'})} background={require('../../photos/free_veg.png')} directoryLabel={'Display Devices'}/>
          </View>
          <View style={styles.contentContainer}>
            <NewDirectoryComponent onPress={() => navigate('CategoryScreen', {title: 'GPS Navigation devices'})} background={require('../../photos/free_fish_heads.png')} directoryLabel={'GPS Navigation devices'}/>
          </View>
          <View style={styles.contentContainer}>
            <NewDirectoryComponent onPress={() => navigate('CategoryScreen', {title: 'Computer'})} background={require('../../photos/food_organisation.png')} directoryLabel={'Computer'}/>
          </View>
          <View style={styles.contentContainer}>
            <NewDirectoryComponent onPress={() => navigate('CategoryScreen', {title: 'Transmitters'})} background={require('../../photos/cheap_eats.png')} directoryLabel={'Transmitters'}/>
          </View>
          <View style={styles.contentContainer}>
            <NewDirectoryComponent onPress={() => navigate('CategoryScreen', {title: 'Radars'})} background={require('../../photos/free_soup_kitchens.png')} directoryLabel={'Radars'}/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'stretch',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderBottomColor: '#000',
    padding: 10,
  },
});
