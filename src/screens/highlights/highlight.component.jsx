import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'


const HighLights = ({highlight, bookmark}) => {
    const { verse } = highlight
    return (
        <ScrollView style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:30}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Highlights</Text>
            </View>
            <View style={{marginLeft: 10, marginRight: 10}}>
              {
                   verse.map((element, idx) => {
                    const { EnglishName, currentChapter, verse, verse_number } = element
                    return (
                        <Text key={idx} style={{fontSize: 16, marginTop: 20}}>{`${EnglishName} ${currentChapter}:${verse_number}; ${verse}...`}</Text>
                    )
                })
              }
            </View>
         </ScrollView>
    )
   
}

const mapStateToProps = state => ({
    highlight: state.highlight
})

export default connect(mapStateToProps)(HighLights)