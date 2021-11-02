import React, {useState} from 'react'
import { Text, View, Modal, Pressable, Button } from 'react-native'
import HomeScreenShared from '../homescreen/homescreen-shared.component';
import Settings from './settings.component';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator()


export const ModalRender = () => {
   const [modal, setModal] = useState(true)
   return(
    <Modal
    style={{width: 100, height: 100,backgroundColor: 'red'}}
    animationType='fade'
    visible={modal}
    transparent={false}
    onRequestClose={() => setModal(!modal)}
>
    <Button 
        title='CLOSE MODAL'
        onPress={() => setModal(!modal)}
    />
</Modal>

)
   }

const CustomContent = (props) => {

    return(
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
                <DrawerItem label='Font Size' onPress={() => {
                   console.log('k')
                    return <ModalRender />
                }} />
        </DrawerContentScrollView>
    )
}

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

const FontSettings = () => {
    const [modal, setModal] = useState(false)
    return(

    <View>
        
        <View>
            <Pressable
                onPress={() => setModal(true)}
            >
                <Text>Font Size</Text>
            </Pressable>
        </View>
    </View>
   
)
    }

const FontColor = () => (
    <View>
        <Text>Font Color</Text>
    </View>
)


const RedLetter = () => (
    <View>
        <Text>Red Letter</Text>
    </View>
)

const ShareApp = () => (
    <View>
        <Text>Share App</Text>
    </View>
)
const Stats = () => (
    <View>
        <Text>Statistics</Text>
    </View>
)

const DrawerTab = () => (
    <Drawer.Navigator 
    initialRouteName='Home tab'
     drawerContent={(props) => <CustomContent {...props} />}
    >
        <Drawer.Screen name='Home tab' component={HomeScreenShared} options={{headerShown: false}}/>
        {/* <Drawer.Screen name='Font Size' component={FontSettings} />
        <Drawer.Screen name='Font Color' component={FontColor} />
        <Drawer.Screen name='Red Letter' component={RedLetter} />
        <Drawer.Screen name='Share App' component={ShareApp} />
        <Drawer.Screen name='Statistics' component={Stats} /> */}
    </Drawer.Navigator>
)


export default DrawerTab