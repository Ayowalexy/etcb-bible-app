import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import COMMENTARY from '../../screens/passage/introduction';


const Introduction = () => {
    return (
        <ScrollView style={{padding: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 20, marginBottom: 20}}>{COMMENTARY.EnglishName} || {COMMENTARY.HebrewName }</Text>
            <Text>{COMMENTARY.introduction}</Text>
        </ScrollView>
    )
}

export default Introduction