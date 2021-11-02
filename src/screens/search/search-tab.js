import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Search from './search.component'
const Tab = createMaterialTopTabNavigator()


const SearchTab = () => (
    <Tab.Navigator 
        screenOptions={{
            tabBarStyle: {
                height: 0
            }
        }}
    >
        <Tab.Screen name='Seach Tab' component={Search} />
    </Tab.Navigator>
)


export default SearchTab