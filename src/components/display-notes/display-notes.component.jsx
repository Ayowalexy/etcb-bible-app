import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux'



const DisplayNotes = ({displayNote}) => {

    const { notes } = displayNote
   
    return (
        <ScrollView>
            <View style={styles.container}>
                {

                    notes.map((note, idx) => (
                        <View style={{marginBottom: 20}} key={idx}>
                            <Text style={styles.headerText}>{note.text}</Text>
                            <Text style={styles.text}>{note.notes}</Text>
                        </View>
                    )) 
                }
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    headerText: {
        fontSize: 19,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 16
    }
})

const mapStateToProps = state => ({
    displayNote: state.note
})

export default connect(mapStateToProps)(DisplayNotes)