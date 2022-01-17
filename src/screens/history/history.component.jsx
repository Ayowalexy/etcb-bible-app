import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Pressable, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { deleteText } from '../../redux/search/search.action';
import Ionicons from '@expo/vector-icons/Ionicons'


const History = ({search, deleteText}) => {

    

    const { text } = search

    console.log(text)
    //console.log(text[0].search, 'text')
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Your Search History</Text>
            {
                text.length ?
                text.map((value, idx) => (
                    <View style={styles.parent} key={idx}>
                        <View>
                            <Text style={styles.text}>{value.search}</Text>
                        </View>
                        <View>
                            <Pressable
                                // onPress={() => deleteText(value.search)}
                            >
                                <Ionicons name='trash' size={20} color='black' />
                            </Pressable>   
                        </View>
                       
                    </View>
                )) : 
                <Text style={styles.text}>No Search</Text>
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
       padding: 30
    },
    text: {
        fontWeight: '300',
        fontSize: 17
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    parent: {
        marginBottom: 40,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

const mapStateToProps = state => ({
    search: state.history
})

const mapDispatchToProps = dispatch => ({
    deleteText: text => dispatch(deleteText(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(History)