/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react'
import { StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Bottom tab navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

// Pages
import HomeScreen from './screens/HomeScreen'
import MenuScreen from './screens/MenuScreen'
import CartScreen from './screens/CartScreen'
import UserScreen from './screens/UserScreen'


export default function App() {


  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={
          {
            tabBarStyle: { backgroundColor: "#e8e8e8", },
            headerStyle: { backgroundColor: "#e8e8e8" }
          }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons name="home" color={focused ? "#D75E35" : color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            tabBarLabel: 'Menu',
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons name="widgets" color={focused ? "#D75E35" : color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarLabel: 'Cart',
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons name="cart" color={focused ? "#D75E35" : color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={UserScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size, focused }) => (
              <MaterialCommunityIcons name="account" color={focused ? "#D75E35" : color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer >
  )
}

const styles = StyleSheet.create({

})
