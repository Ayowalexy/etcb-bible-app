import React from 'react'
import { View, Text, StyleSheet, ScrollView,Dimensions, TouchableOpacity, Touchable, Platform, StatusBar } from 'react-native'
import LinearGradientComponent from '../../components/linear-gradient/linear-gradient.component';
import Books from '../../../Books';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { connect } from 'react-redux'
import { setCurrentChapter } from '../../redux/chapter/chapter.actions';
import Chapters from '../../components/chapters/chapters.component'
import OldTestament from '../../components/old-testament/old-testament.component'
import Verses from '../../components/verses/verses.component';
import NewTestament from '../../components/new-testament/new-testament.component'


const Tab = createMaterialTopTabNavigator()


export const ChapterRender = () => (
    <Tab.Navigator
    screenOptions={{
        tabBarStyle: {
        width: 200,
        height: 0,
        marginTop: Platform.OS === 'ios'? 100 : StatusBar.currentHeight,
        marginLeft: (Dimensions.get('window').width - 200) / 2,
        },
       
    }}
    >
        <Tab.Screen name='Chapter'component={Chapters} />
    </Tab.Navigator>
)

export const VerseRender = () => (
    <Tab.Navigator
    screenOptions={{
        tabBarStyle: {
        width: 200,
        marginTop: Platform.OS === 'ios'? 100 : StatusBar.currentHeight,
        marginLeft: 80,
        height: 0
        },
        tabBarShowLabel: true
    }}
    
    >
        <Tab.Screen name='Verse' component={Verses}  />
    </Tab.Navigator>
)


export const LocateTab = () => (
    <Tab.Navigator 
        screenOptions={{
            tabBarStyle: {
            marginLeft: (Dimensions.get('window').width - 200) / 2,
            marginTop: 20,
            width: 200
            }
        }}
       
    >
        <Tab.Screen name='ETB BIBLE OT' component={OldTestament} />
        <Tab.Screen name='ETB BIBLE NT' component={NewTestament} />
    
    </Tab.Navigator>
)

const Locate = () => (
    <View >
        <LinearGradientComponent EnglishName={'Exodus'} HebrewName={'Shemot'} currentChapter={2} />
        <LocateTab />
   </View>
)




// const mapStateToProps = state => ({
//     setCurrentBook: state.book.setCurrentChapter
// })

// connect(mapStateToProps)(Chapters)

 export default Locate