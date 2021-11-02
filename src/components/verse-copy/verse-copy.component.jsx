import React, { useState } from 'react'
import * as Clipboard from 'expo-clipboard'
import Ionicons from '@expo/vector-icons/Ionicons'
import { View, Text, TouchableOpacity } from 'react-native'

const CopyVerse = ({verse, setModal}) => {
    const copyToClipboard = () => {
        Clipboard.setString(verse)
    }

    return (
        <TouchableOpacity
            onPress={copyToClipboard}
            onPressOut={() => setModal(false)}
        >
            <View style={{flex: 1, marginLeft: 20, justifyContent: 'center', alignItems: 'center'}}>
                <Ionicons name='md-copy' color='black' size={25} />
                <Text>Copy</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CopyVerse