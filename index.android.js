/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
var Intercom = require('react-native-intercom');

class intercomPOC extends Component {

  constructor(props) {
    super(props);
    this._updateIntercom = this._updateIntercom.bind(this);
    this._updateIntercomEvent = this._updateIntercomEvent.bind(this);
  }

  componentDidMount() {
  
  }

  _updateIntercom() {
    console.log('registering user');
    Intercom.registerIdentifiedUser({ userId: 'reacttest' })
      .then(() => {
        console.log('registerIdentifiedUser done');

        return Intercom.updateUser({
            email: 'email',
            name: 'name',
        });
      })
      .catch((err) => {
          console.log('registerIdentifiedUser ERROR', err);
      });
  }

  _updateIntercomEvent() { 
    Intercom.logEvent('viewed_screen');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
        <TouchableHighlight
        onPress={this._updateIntercom}
        style={styles.button}>
          <Text>
            Register User
          </Text>
        </TouchableHighlight>

        <TouchableHighlight
        onPress={this._updateIntercomEvent}
        style={styles.button}>
          <Text>
            Log Event
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: 'lavender',
    marginTop: 5,
    height: 30,
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 2,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('intercomPOC', () => intercomPOC);
