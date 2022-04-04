import React, {useEffect, useState} from 'react'
import * as Notifications from 'expo-notifications';

import axios from 'axios'
import {
    Text,
    useColorScheme,
    TouchableOpacity,
    View,
    Platform,
    Image
  } from 'react-native';
  import Ionicons from '@expo/vector-icons/Ionicons'
  import styles from './homescreen';
  import { connect } from 'react-redux'
import { setToken, delToken } from '../../redux/token/token.actions';
import { API_URL } from '../../components/payment-screen/api-fetch';

  

  const HomeScreenShared = ({navigation, expotoken = '', setNewToken, deleteToken}) => {


    // deleteToken()
    console.log(expotoken, '========')

    const [returnedData, setreturnedData] = useState('')
    useEffect(() => {
        (async () => {
            if(expotoken.length === 0){
                
                let token;
                if (true) {
                const { status: existingStatus } = await Notifications.getPermissionsAsync();
                let finalStatus = existingStatus;
                if (existingStatus !== 'granted') {
                    const { status } = await Notifications.requestPermissionsAsync();
                    finalStatus = status;
                }
                if (finalStatus !== 'granted') {
                    alert('Failed to get push token for push notification!');
                    return;
                }
                token = (await Notifications.getExpoPushTokenAsync()).data;
                console.log(token);
                } else {
                alert('Must use physical device for Push Notifications');
                }
            
                if (Platform.OS === 'android') {
                Notifications.setNotificationChannelAsync('default', {
                    name: 'default',
                    importance: Notifications.AndroidImportance.MAX,
                    vibrationPattern: [0, 250, 250, 250],
                    lightColor: '#FF231F7C',
                });
                }

                const response = await axios.post(`${API_URL}/set-push-token/`, {
                    token: token
                })
                .then(res => {
                    setreturnedData(res.data);
                }).catch(e => {
                    console.log(e)
                })

                setNewToken(token)
            
                return token; 
            } else {
                return
            }
        })()
    }, [expotoken])

  return(
      <View style={styles.container}>
          {/* <TouchableOpacity 
            activeOpacity={0.8}
            style={styles.box}
            onPress={() => navigation.navigate('Passage')}
        
        > 
            <View style={styles.box_inner}>
                <View>
                    <Ionicons name='book' color='#171C24' size={35} />
              </View>
              <View><Text style={styles.box_text}>Read</Text></View>
            </View>
        </TouchableOpacity > */}
         <TouchableOpacity 
          activeOpacity={0.8}
          style={styles.box}
          onPress={() => navigation.navigate('Locate')}  
          
        >
          
            <View style={styles.box_inner}>
                <View>
                   <Ionicons name='checkbox-sharp' color='#171C24' size={35} />
              </View>
              <View>
                <Text style={styles.box_text}>Locate</Text>
              </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
            activeOpacity={0.8}
            style={styles.box}
            onPress={() => navigation.navigate('Search')}
        >
            <View style={styles.box_inner}>
                <View>
                   <Ionicons name='documents' color='#171C24' size={35} />
              </View>
              <View>
                <Text style={styles.box_text}>Search</Text>
              </View>
            </View>
        </TouchableOpacity>
       
        <TouchableOpacity 
            activeOpacity={0.8}
            style={styles.box}
            onPress={() => {
                navigation.navigate('History')
            }}
        >
            <View style={styles.box_inner}>
                <View>
                    <Ionicons name='md-locate' color='#171C24' size={35} />
              </View>
              <View>
                  <Text style={styles.box_text}>History</Text>
              </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
            activeOpacity={0.8}
            style={styles.box}
            onPress={() => navigation.navigate('Compare')}
        >
            <View style={styles.box_inner}>
                <View>
                    <Ionicons name='ios-calendar' color='#171C24' size={35} />
              </View>
              <View>
                <Text style={styles.box_text}>Compare</Text>
              </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
            activeOpacity={0.8}
            style={[styles.box, { flexGrow: 0.8}]}
            onPress={() => navigation.navigate('Premium')}      
        >
            <View style={[styles.box_inner, { alignSelf: 'center'}]}>
                <View>
                    <Ionicons name='star' color='#171C24' size={35} />
              </View>
              <View>
                  <Text style={[styles.box_text, { marginLeft: -20}]}>Premium</Text>
              </View>
            </View>
        </TouchableOpacity>
      </View>
  )
}

  const mapStateToProps = state => ({
    expotoken: state.token.token
  })

  const mapDispatchToProps = dispatch => ({
      setNewToken: token => dispatch(setToken(token)),
      deleteToken: () => dispatch(delToken())
  })

  export default connect(mapStateToProps, mapDispatchToProps)(HomeScreenShared)