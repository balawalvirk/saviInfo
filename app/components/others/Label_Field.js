import React, {Component} from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';


export default class Label_Field extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = ({
      fieldValue: '',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{this.props.label}</Text>
        </View>
        <View style={styles.fieldContainer}>
          <TextInput
            placeholder={this.props.placeholder}
            style={[styles.textInput, {height: this.props.textInputHeight}]}
            multiline = {true}
            numberOfLines = {this.props.noOfLines}
            onChangeText={(fieldValue) => this.setState({fieldValue})}
            value={this.state.fieldValue}
            ref={'fieldValue'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  labelContainer: {
    flex: 0.35,
  },
  fieldContainer: {
    flex: 0.7,
  },
  textInput: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#adadad',
    textAlignVertical: "top",
    fontSize: 20,
    // minHeight: 50, //... For dynamic height
//    maxHeight: 200,
  },
  labelText: {
    padding: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
