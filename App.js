import React from 'react';
import {NavigationContainer} from '@react-navigation/native';import MainStack from './assets/Components/Stacks/MainStack';
import { StyleSheet, Text, View } from 'react-native';
export default function App() {
  return (
<NavigationContainer>
<MainStack />
</NavigationContainer>
);
}    

      

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
