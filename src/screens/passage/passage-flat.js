import React from 'react'
import { View, Text, FlatList } from 'react-native'
import ScrollPassage from './scroll-passage'
import EXODUS from './data';
import FlatListRender from './flat-list-render';



const PassageFlat = ({navigation}) => {
    return (
        <FlatList 
            data={EXODUS}
            renderItem={({item}) => <FlatListRender item={item} navigation={navigation}/>}
            keyExtractor={(item) => item.id}
           
        />

    )
}

export default PassageFlat