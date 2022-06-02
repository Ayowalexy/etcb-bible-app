import React from 'react';
import { Share, View, Button, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'
import { Colors } from '../../assets/Colors';

const ShareDaily = ({message, setModalVisible}) => {
    const onShare = async () => {
      try {
        const result = await Share.share(
        {
            title: 'End Time Bible App',
            message: message,
        },
        {
            dialogTitle: 'Read the Bible. A complete Bible with no verse excluded'
        }
    );
      } catch (error) {
        alert(error.message);
      }
    };
    return (
        <TouchableOpacity
        onPress={() => {
            onShare()
            setModalVisible(false)
        }}
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            width: 120,
            margin: 10,
            backgroundColor: Colors.TEXT,
            
        }}
    >
        <Text style={{
            color: Colors.PRIMARY,
            fontWeight: 'bold'
        }}>SHARE</Text>
    </TouchableOpacity>
    );
  };


export default ShareDaily;