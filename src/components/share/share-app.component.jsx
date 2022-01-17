import React from 'react';
import { Share, View, Button, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

const ShareApp = ({color}) => {
    const onShare = async () => {
      try {
        const result = await Share.share(
        {
            title: 'End Time Bible App',
            message: "I'm Using the End Time Bible App by www.etcb.com. Download it now to enjoy the best of the scriptures\nhttp:etcb.com",
            url: 'www.google.com'
        },
        {
            dialogTitle: 'Read the Bible. A complete Bible with no verse excluded'
        }
    );
        console.log(result)
        // if (result.action === Share.sharedAction) {
        //   if (result.activityType) {
        //     console.log(result)
        //   } else {
        //     console.log('Shared')
        //   }
        // } 
        
        // else if (result.action === Share.dismissedAction) {
        //   console.log('dismissed')
        // }
      } catch (error) {
        alert(error.message);
      }
    };
    return (
        <TouchableOpacity
            onPress={onShare}
        >
        <View style={{marginBottom: 10, marginLeft: 15}}>
            <View style={{ flexDirection: 'row'}}>
                <View>
                    <Ionicons name='share-social-outline' size={20} color={color} />
                </View>
                <View>
                    <Text style={{fontSize: 19, color, fontWeight: 'bold', marginLeft: 10}}>Share App</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
    );
  };


export default ShareApp;