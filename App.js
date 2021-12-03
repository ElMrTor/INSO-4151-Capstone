import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './routes/OpenAppStack';
// import {StripeProvider} from '@stripe/stripe-react-native';

export default function App() {
 
// const [publishableKey, setPublishableKey] = useState('');


  return(
    // <StripeProvider publishableKey={publishableKey}>
    <Navigator />
  // </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28221E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});