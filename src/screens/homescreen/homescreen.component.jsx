import React from 'react';
import type, {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import styles from './homescreen';



import Statistics from '../statistics/statistics.component';
import Profile from '../profile/profile.component';
import Settings from '../settings/settings.component';
import Locate from '../locate/locate.component';
import DrawerTab from '../settings/settings-drawer';




import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons'




const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


export const HomeScreen = () => {
  return (
    // 
    <SafeAreaView style={styles.container}>
      <DrawerTab /> 
      <StatusBar />
    </SafeAreaView>
  );
};


export const HomeTabs = () => (
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconSize;

          if(route.name === 'Home'){
            iconName = focused ? 'home' : 'home-outline'
            iconSize = focused ? 25 : 20
          } 
          // else if (route.name === 'Statistics'){
          //   iconName = focused ? 'md-bar-chart-sharp' : 'md-bar-chart-outline'
          //   iconSize = focused ?  25 : 20
          // } 
          else if (route.name === 'Settings'){
            iconName = focused ? 'ios-settings': 'ios-settings-outline'
            iconSize = focused ?  25 : 20
          } else if (route.name === 'Profile'){
            iconName = focused ? 'md-person' : 'md-person-outline'
            iconSize = focused ?  25 : 20
          }
          return <Ionicons name={iconName} color='#171C24' size={iconSize} />
        }, 
        tabBarActiveTintColor: '#171C24',
        tabBarInactiveTintColor: 'gray'
    })}
    
 >
    <Tab.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
    {/* <Tab.Screen name='Statistics' component={Statistics}  options={{headerShown: false}}/> */}
    <Tab.Screen name='Profile' component={Profile}  options={{headerShown: false}}/>
    <Tab.Screen name='Settings' component={Settings}  options={{headerShown: false}}/>
  </Tab.Navigator>
)




