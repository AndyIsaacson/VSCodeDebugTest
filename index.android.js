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
  View
} from 'react-native';

class vscodedebugtest extends Component {
  useDebuggerStatement() {
    console.log('using debugger')
    debugger
  }

  useBreakpoint() {
    console.log('add a breakpoint here')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={this.useDebuggerStatement}>
          Press here for debugger statement
        </Text>
        <Text style={styles.welcome} onPress={this.useBreakpoint}>
          Press here for breakpoint
        </Text>
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

AppRegistry.registerComponent('vscodedebugtest', () => vscodedebugtest);
