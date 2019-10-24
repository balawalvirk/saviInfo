import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import FilterHeaderComponent from '../others/FilterHeaderComponent';
import CardImageComponent from '../others/CardImageComponent';


export default class CategoryScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      directory: ''
    });
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
    };
  };

  componentDidMount(){
    this.setState({directory: this.props.navigation.state.params.title});
  }

  render() {
    const data = [{title: 'Sony Camera X21', imageSource: require('../../photos/camera2.jpeg'), userName: 'Alex', price: 'Free', distance: '10 miles'},
    {title: 'iPhone X10', imageSource: require('../../photos/iphone.png'), userName: 'Emma', price: '$3', distance: '3 miles'},
    {title: 'Windows Laptop', imageSource: require('../../photos/windows.jpg'), userName: 'Kevin', price: 'Free', distance: '14 miles'},
    {title: 'Cannon EOS 60D', imageSource: require('../../photos/camera.jpg'), userName: 'Alex', price: 'Free', distance: '10 miles'},
    {title: 'Sony Camera X21', imageSource: require('../../photos/camera2.jpeg'), userName: 'Alex', price: 'Free', distance: '10 miles'},
    {title: 'iPhone X10', imageSource: require('../../photos/iphone.png'), userName: 'Emma', price: '$3', distance: '3 miles'},
    {title: 'Windows Laptop', imageSource: require('../../photos/windows.jpg'), userName: 'Kevin', price: 'Free', distance: '14 miles'},
    {title: 'Cannon EOS 60D', imageSource: require('../../photos/camera.jpg'), userName: 'Alex', price: 'Free', distance: '10 miles'},
    {title: 'Sony Camera X21', imageSource: require('../../photos/camera2.jpeg'), userName: 'Alex', price: 'Free', distance: '10 miles'},
    {title: 'iPhone X10', imageSource: require('../../photos/iphone.png'), userName: 'Emma', price: '$3', distance: '3 miles'},
    {title: 'Windows Laptop', imageSource: require('../../photos/windows.jpg'), userName: 'Kevin', price: 'Free', distance: '14 miles'},
    {title: 'Cannon EOS 60D', imageSource: require('../../photos/camera.jpg'), userName: 'Alex', price: 'Free', distance: '10 miles'},
  ]
    if(this.state.directory.includes('Smartphones'))
    {
      data.push(
        {title: 'Sony Camera X21', imageSource: require('../../photos/camera2.jpeg'), userName: 'Alex', price: 'Free', distance: '10 miles'},
        {title: 'iPhone X10', imageSource: require('../../photos/iphone.png'), userName: 'Emma', price: '$3', distance: '3 miles'},
        {title: 'Windows Laptop', imageSource: require('../../photos/windows.jpg'), userName: 'Kevin', price: 'Free', distance: '14 miles'},
        {title: 'Cannon EOS 60D', imageSource: require('../../photos/camera.jpg'), userName: 'Alex', price: 'Free', distance: '10 miles'},
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <FilterHeaderComponent navigation={this.props.navigation} viewRequired={'row'}/>
        </View>
        <View style={styles.listContainer}>
          <CardImageComponent data={data} navigation={this.props.navigation} viewRequired={'row'}/>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.15,
    padding: 5,
  },
  listContainer: {
    flex: 0.88,
    marginTop: 10,
  },
});
