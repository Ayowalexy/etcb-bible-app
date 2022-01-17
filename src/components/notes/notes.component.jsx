import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { setNote } from '../../redux/notes/notes.action';


const Notes = ({route, setNote, navigation}) => {

    const { verse } = route.params

    const [note, onSetNote] = useState('')
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Notes</Text>

            <TextInput 
                style={styles.input}
                multiline
                onChangeText={onSetNote}
                placeholder='Type Notes Here'
                value={note}
                textAlignVertical='top'
            />

            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                    setNote({
                        text: verse,
                        notes: note
                    })

                    if(note){
                        navigation.navigate('Passage')
                    }
                }}
            >
                <View style={styles.submit}>
                    <Text style={styles.text}>Add Note</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 200,
        width: 300,
        padding: 20,
        borderWidth: 1
    },
    submit: {
        flex: 0.25,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        backgroundColor: 'black'
    },
    text: {
        color: 'white'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})


const mapDispatchToProps = dispatch => ({
    setNote: note => dispatch(setNote(note))
})

export default connect(null, mapDispatchToProps)(Notes)