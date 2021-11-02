import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native'
import { connect } from 'react-redux'
import Ionicons from '@expo/vector-icons/Ionicons'


const History = (search) => {

    const { text } = search.search
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Your Search History</Text>
            {
                text ?
                text.map((value, idx) => (
                    <TouchableOpacity style={styles.parent} key={idx}>
                        <View>
                            <Text style={styles.text}>{value.search}</Text>
                        </View>
                        <View>
                            <Ionicons name='trash' size={20} color='black' />
                        </View>
                       
                    </TouchableOpacity>
                )) : 
                <Text style={styles.text}>No Search</Text>
            }
        </View>
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

export default connect(mapStateToProps)(History)