import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, ScrollView, Button} from 'react-native';
import CardTextComponent from '../others/CardTextComponent';


export default class ForumScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      newPost: '',
    });
  }

  render() {
    const data = [
      {imageUrl: require('../../photos/camera.jpg'), title: 'Cannon Camera 60D', date: '05/12/2019', notes: 'Your notes will appear here...'},
      {imageUrl: require('../../photos/camera.jpg'), title: 'Cannon Camera 60D', date: '05/12/2019', notes: 'Your notes will appear here...'},
      {imageUrl: require('../../photos/camera.jpg'), title: 'Cannon Camera 60D', date: '05/12/2019', notes: 'Your notes will appear here...'},
      {imageUrl: require('../../photos/camera.jpg'), title: 'Cannon Camera 60D', date: '05/12/2019', notes: 'Your notes will appear here...'},
      {imageUrl: require('../../photos/camera.jpg'), title: 'Cannon Camera 60D', date: '05/12/2019', notes: 'Your notes will appear here...'},
      {imageUrl: require('../../photos/camera.jpg'), title: 'Cannon Camera 60D', date: '05/12/2019', notes: 'Your notes will appear here...'},
      {imageUrl: require('../../photos/camera.jpg'), title: 'Cannon Camera 60D', date: '05/12/2019', notes: 'Your notes will appear here...'},
      {imageUrl: require('../../photos/camera.jpg'), title: 'Cannon Camera 60D', date: '05/12/2019', notes: 'Your notes will appear here...'},
      {imageUrl: require('../../photos/camera.jpg'), title: 'Cannon Camera 60D', date: '05/12/2019', notes: 'Your notes will appear here...'},
      {imageUrl: require('../../photos/camera.jpg'), title: 'Cannon Camera 60D', date: '05/12/2019', notes: 'Your notes will appear here...'},
      {imageUrl: require('../../photos/camera.jpg'), title: 'Cannon Camera 60D', date: '05/12/2019', notes: 'Your notes will appear here...'},
      {imageUrl: require('../../photos/camera.jpg'), title: 'Cannon Camera 60D', date: '05/12/2019', notes: 'Your notes will appear here...'},
      {imageUrl: require('../../photos/camera.jpg'), title: 'Cannon Camera 60D', date: '05/12/2019', notes: 'Your notes will appear here...'},
    ]
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.statusContainer}>
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => navigate('NewListingScreen')}
              title="Add a Purchase"
              color="#8200d8"
              accessibilityLabel="Share your post"
            />
          </View>
        </View>
        <View style={styles.container}>
          <CardTextComponent data={data} navigation={this.props.navigation} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusContainer: {
    flex: 0,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#adadad'
  },
  buttonContainer: {
    width: '50%',
    alignSelf: 'center',
    borderWidth: 3,
    borderRadius: 10,
    borderColor: '#b2a100'
  },
  textInput: {
    textAlignVertical: "top",
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#b2a100',
    height: 100,
    fontSize: 20,
    padding: 10,
    margin: 5,
  },
});
