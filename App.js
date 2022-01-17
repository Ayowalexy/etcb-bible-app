import 'react-native-gesture-handler';
/**
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type, {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Platform
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {HomeScreen, HomeTabs} from './src/screens/homescreen/homescreen.component'


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'
import {store, persistor} from './src/redux/store';
import Locate, {
    LocateTab,
    ChapterRender,
    VerseRender
} from './src/screens/locate/locate.component';
import Search from './src/screens/search/search.component'
import SearchTab from './src/screens/search/search-tab'
import SearchResult from './src/screens/search/search-result.component';
import DrawerTab, { ModalRender } from './src/screens/settings/settings-drawer';
import Premium from './src/screens/premium/premium.component'
import Compare from './src/screens/compare/compare.component';
import Bookmarks from './src/screens/bookmarks/boomarks.component'
import Highlights from './src/screens/highlights/highlight.component'
import { PersistGate } from 'redux-persist/integration/react'
import Donate from './src/screens/donate/donate.component';
import Ap from './src/push-notification/push-notification';
import Notes from './src/components/notes/notes.component';
import DisplayNotes from './src/components/display-notes/display-notes.component'
import History from './src/screens/history/history.component';
import FlatListRender from './src/screens/passage/flat-list-render' 
import PassageFlat from './src/screens/passage/passage-flat';
import Introduction from './src/components/commentary.component.jsx/introduction.component';
import Commentary from './src/components/commentary.component.jsx/commentary.component';
 console.disableYellowBox = true;



const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()



const App = () => {
  return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <NavigationContainer>
              <Stack.Navigator mode='modal'>
                  
                  <Stack.Screen name='Home Page' component={HomeTabs} options={{headerShown: false}}/>
                  <Stack.Screen name='HomeScreen' component={HomeScreen} />
                  <Stack.Screen name='Passage' component={PassageFlat} options={{headerShown: Platform.OS === 'ios'? true : false}} />
                  <Stack.Screen name='Locate' component={LocateTab} options={{headerShown: Platform.OS === 'ios'? true : false
                }} />
                  <Stack.Screen name='Chapters' component={ChapterRender} options={{headerShown: Platform.OS === 'ios'? true : false}} />
                  <Stack.Screen name='Verses' component={VerseRender} options={{headerShown: Platform.OS === 'ios'? true : false}} />
                  <Stack.Screen name='Search' component={SearchTab} options={{headerShown: Platform.OS === 'ios'? true : false}} />
                  <Stack.Screen name='Search Result' component={SearchResult} options={{headerShown: Platform.OS === 'ios'? true : false}} />
                  <Stack.Screen name='modal' component={ModalRender} />
                  <Stack.Screen name='Drawer' component={DrawerTab} options={{headerShown: Platform.OS === 'ios'? true : false}} />
                  <Stack.Screen name='Premium' component={Premium} options={{headerShown: true}} />
                  <Stack.Screen name='Compare' component={Compare} options={{headerShown: true}} />
                  <Stack.Screen name='Highlight' component={Highlights} options={{headerShown: Platform.OS === 'ios'? true : false}} />
                  <Stack.Screen name='Bookmarks' component={Bookmarks} options={{headerShown: Platform.OS === 'ios'? true : false}} />
                  <Stack.Screen name='Donate' component={Ap} options={{headerShown: Platform.OS === 'ios'? true : false}} />
                  <Stack.Screen name='Notes' component={Notes} options={{headerShown: true}} />
                  <Stack.Screen name='Display Notes' component={DisplayNotes}options={{headerShown: Platform.OS === 'ios'? true : false}} />
                  <Stack.Screen name='History' component={History} options={{headerShown: Platform.OS === 'ios'? true : false}} />
                  <Stack.Screen name='Introduction' component={Introduction} options={{headerShown: Platform.OS === 'ios'? true : false}} />
                  <Stack.Screen name='Commentary' component={Commentary} options={{headerShown: Platform.OS === 'ios'? true : false}} />
                 
              </Stack.Navigator>
            </NavigationContainer> 
          </PersistGate>
        </Provider>
    
  );
};



export default App;

