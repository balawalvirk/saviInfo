import React, {Component} from 'react';
import {StyleSheet, Modal, Text, SafeAreaView, TouchableHighlight, View, Alert, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      visible: false,
    });
  }

  setModalVisible(visible) {
    this.setState({visible: visible});
  }

  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={() => this.setState({ visible: true })}>
        <View style={styles.container}>
          <Icon name={this.props.iconName} color={'#8200d8'} size={35}/>
        </View>
        <View style={styles.container}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.visible}>
            <SafeAreaView style={styles.modalOuterContentContainer}>
              <View style={[styles.modalInnerContentContainer, {flex: this.props._flex}]}>
                <TouchableOpacity style={styles.close} onPress={() => {
                    this.setModalVisible(!this.state.visible);
                  }}>
                  <Icon name="close" color={'#8200d8'} size={35}/>
                </TouchableOpacity>
                <View style={styles.filterContent}>
                  {this.props.modalContent}
                </View>
              </View>
            </SafeAreaView>
          </Modal>
        </View>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  labelContainer: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
  modalOuterContentContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalInnerContentContainer:{
//    flex: 0.5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#8200d8',
    backgroundColor: '#ffffff',
  },
  close: {
    alignItems: "flex-end",
    padding: 10,
  },
  filterContent: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    marginVertical: 5,
  },
})
