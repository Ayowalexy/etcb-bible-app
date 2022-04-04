import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import COMMENTARY from '../../screens/passage/introduction';
import Matthew from '../introductions/Matthew';
// import {Commentaries} from '../introductions/comments'
// import {Introductions} from '../introductions/common'
import {Commentaries} from '../introductions/comment'



const Commentary = ({route}) => {
    const { EnglishName, chapter }  = route.params;

    const Book = Commentaries[`${EnglishName} ${chapter}`]
    return (
        <ScrollView style={{padding: 20}}>            
            <Book />
        </ScrollView>
    )
}

export default Commentary