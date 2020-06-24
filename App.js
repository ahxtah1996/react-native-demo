import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import LoginScreen from './src/screens/login';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <LoginScreen />
      </ScrollView>
    );
  }
}
