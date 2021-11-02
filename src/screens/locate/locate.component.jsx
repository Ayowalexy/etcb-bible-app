import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Touchable } from 'react-native'
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
        marginTop: 20,
        marginLeft: 80
        }
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
        marginTop: 20,
        marginLeft: 80
        }
    }}
    >
        <Tab.Screen name='Verse' component={Verses} />
    </Tab.Navigator>
)


export const LocateTab = () => (
    <Tab.Navigator 
        screenOptions={{
            tabBarStyle: {
            width: 200,
            marginTop: 20,
            marginLeft: 80
            }
        }}
       
    >
        <Tab.Screen name='NT' component={NewTestament} />
        <Tab.Screen name='OT' component={OldTestament} />
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