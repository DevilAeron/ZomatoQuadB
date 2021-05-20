import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home'
import Goout from './src/screens/Goout'
import Pro from './src/screens/Pro'
import Donate from './src/screens/Donate'
import ActionBarImage from './src/screens/ActionBarImage'
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#7027c3', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 5}}
    >
      <Tab.Screen
        name="Order"
        component={Home}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({ color }) => (
            <Icon name="fast-food-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Go Out"
        component={Goout}
        options={{
          tabBarLabel: 'Go Out',
          tabBarIcon: ({ color }) => (
            <Icon name="restaurant" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Pro"
        component={Pro}
        options={{
          tabBarLabel: 'Pro',
          tabBarIcon: ({ color }) => (
            <Icon name="ribbon-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Donate"
        component={Donate}
        options={{
          tabBarLabel: 'Donate',
          tabBarIcon: ({ color }) => (
            <Icon name="cash-outline" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(148, 141, 179)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

const App = () => {

  return (
    <NavigationContainer theme={MyTheme} >
      <Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
      >
        <Stack.Screen
          name="QuadB Zomato"
          component={MyTabs}
          options={{
            headerStyle: {
              backgroundColor: '#7027c3',
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
              height: 70,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              textAlign: "center",
              flex: 1,
              fontSize: 20,
              padding: 50
            },
            headerTitle: props => <ActionBarImage title='      QuadB Zomato' />,

          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
