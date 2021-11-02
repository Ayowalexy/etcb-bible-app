import React from 'react'
import { Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator()


const Home = () => (
    <View>
        <Text>Home Drawer</Text>
    </View>
)
const Page = () => (
    <View>
        <Text>Page Drawer</Text>
    </View>
)

const DrawerTab = () => (
    <Drawer.Navigator>
        <Drawer.Screen name='Home Drawer' component={Home} />
        <Drawer.Screen name='Page Drawer' component={Page} />
    </Drawer.Navigator>
)

const Statistics = () => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Statistics</Text>
        {/* <DrawerTab /> */}
    </View>
)

export default Statistics