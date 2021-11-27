import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/OpenAppStack';
import Home from './screens/Home';
import MainContainer from './components/MainContainer';

export default function App() {

  return <Navigator />;

  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28221E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});