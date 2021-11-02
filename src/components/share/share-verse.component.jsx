import React from 'react';
import { Share, View, Button, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

const ShareVerse = ({message}) => {
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
            onPress={onShare}
        >
        <View style={{flex: 1, marginLeft: 20, justifyContent: 'center', alignItems: 'center'}}>
                        <Ionicons name='share-social-sharp' color='black' size={25} />
                        <Text>Share</Text>
        </View>
    </TouchableOpacity>
    );
  };


export default ShareVerse;