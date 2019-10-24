import React, { Component } from "react";
import {Keyboard, Text, ScrollView, StyleSheet, View, Dimensions, Platform, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Button, TouchableOpacity} from 'react-native';


const appId = "1047121222092614"

export default class LoginScreen extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Text style={styles.logoText}>Save Info</Text>
              <TextInput placeholder="First Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
              <TextInput placeholder="Last Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
              <TextInput placeholder="Phone number" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
              <TextInput placeholder="Email address" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
              <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true}/>
              <View style={styles.loginButton}>
                <Button
                  onPress={() => this.onLoginPress(navigate('FoodListingsScreen'))}
                  title="Sign up"
                  color={Platform.OS === 'ios' ? '#ffffff' : '#3399ff'}
                />
              </View>
              <TouchableOpacity onPress={() => navigate('TermsAndConditionsScreen')} style={styles.termsConditionsContainers}>
                <Text style={{color: 'grey'}}>Terms and conditions</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      </ScrollView>
    );
  }

  componentDidMount() {
  }

  onLoginPress() {

  }

}



const styles = StyleSheet.create({
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "800",
    color: 'black',
    marginTop: Dimensions.get('window').height/15,
    marginBottom: Dimensions.get('window').height/20,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginHorizontal: Dimensions.get('window').width/10,
    marginVertical: 10,

  },
  loginButton: {
    backgroundColor: Platform.OS === 'ios' ? '#3897f1' : 'rgba(0,0,0,0)',
    borderRadius: 5,
    height: 45,
    marginHorizontal: Dimensions.get('window').width/10,
    marginTop: 20
  },
  termsConditionsContainers:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: "2%",
  },
});
