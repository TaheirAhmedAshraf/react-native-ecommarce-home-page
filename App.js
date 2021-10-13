/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react'
import { StyleSheet } from 'react-native'

// Bottom tab navigation
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './components/BottomTabNavigation';

export default function App() {


  return (
    <NavigationContainer>
      <BottomTabNavigation />
    </NavigationContainer >
  )
}

