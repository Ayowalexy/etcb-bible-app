import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import COMMENTARY from '../../screens/passage/introduction';
import Matthew from '../introductions/Matthew';
import {Introductions} from '../introductions/common'


const Introduction = ({route}) => {
    const { EnglishName }  = route.params;

    const Book = Introductions[EnglishName]
    return (
        <ScrollView style={{padding: 20}}>
            <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 20, marginBottom: 20}}>
                {EnglishName}
            </Text>
            {/* <Text>{COMMENTARY.introduction}</Text> */}
            <Book />
        </ScrollView>
    )
}

export default Introduction