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
  import {Ionicons, Fontisto} from '@expo/vector-icons'
  import styles from './homescreen';
  import { connect } from 'react-redux'
import { setToken, delToken } from '../../redux/token/token.actions';
import { API_URL } from '../../components/payment-screen/api-fetch';
import { Colors } from '../../assets/Colors';
import ModalDaily from '../../components/Daily/DailyVerse';
import ShareVerse from '../../components/share/share-verse.component';

  

  const HomeScreenShared = ({navigation, expotoken = '', setNewToken, deleteToken}) => {


    // deleteToken()
    console.log(expotoken, '========')

    const [returnedData, setreturnedData] = useState('')
    const [dailyModal, setDailyModal] = useState(true)
     
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
          <ModalDaily 
             navigation={navigation} 
             modalVisible={dailyModal} 
             setModalVisible={setDailyModal}  
          />
        
    {/* <View style={styles.DAILY_VERSE_PARENT}>
        <View style={styles.DAILY_VERSE}>
            <Text>Your word is a lamp unto my feet and a light unto my path <Text>{"\n"}</Text></Text>
            <Text>Psalms 19:4(ETB)</Text>
        </View>
    </View> */}
     <View 
            style={[styles.PREVIEW_PARENT, {marginBottom: 20}]}>
                <View style={styles.PARENT}>
                    <Text style={[styles.PREVIEW, {fontSize: 30}]}>ETB</Text>
                    <Text style={{color: Colors.PRIMARY}}>Translation</Text>
                </View>
        </View>
        <View 
            style={styles.NEW_CONTAINER}
        >
            {
                [
                    {
                        name: "Bible",
                        navigate: "Locate",
                        icon: "book"
                    },
                    {
                        name: "Compare",
                        navigate: "Compare",
                        icon: "open"
                    },
                    {
                        name: "Search",
                        navigate: "Search",
                        icon: "search"
                    },
                    {
                        name: "History",
                        navigate: "History",
                        icon: "reload-circle"
                    },
                    {
                        name: "Favourites",
                        navigate: "Bookmarks",
                        icon: "heart"
                    },
                    {
                        name: "Preview",
                        navigate: "Preview",
                        icon: "navigate-sharp"
                    },

            ].map((element, idx) => {
                return (
                            <TouchableOpacity
                            key={idx}
                                onPress={() => navigation.navigate(`${element.navigate}`)}
                                activeOpacity={0.7}
                                style={styles.BOX}
                            >
                                    <View style={styles.INNER_BOX}>
                                        {
                                            element.name == 'Compare'
                                            ?
                                            <Fontisto name='arrow-swap' color='white' size={17} />
                                            :
                                            <Ionicons name={element.icon} color='white' size={17} />
                                        }
                                    </View>
                                    <View>
                                        <Text
                                            style={styles.TEXT}
                                        >{element.name}</Text>
                                    </View>
                        </TouchableOpacity>
                )
            })
            }
        </View>
        <TouchableOpacity 
            style={{
                width: "100%",
                height: 80,
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View 
                style={{
                    width: "68%",
                    height: 80,
                    display: "flex",
                    justifyContent: 'center',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                }}>
                    <TouchableOpacity 
                    onPress={() => navigation.navigate('Sponsor')}
                    style={{
                        backgroundColor: Colors.SECONDARY,
                        display: "flex",
                        height: 80,
                        marginRight: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 20,
                        flexGrow: 2,
                        borderWidth: 3,
                        borderColor: '#E39121'
                    }}>
                        <Text style={styles.PREVIEW}>SPONSOR {"\n"}<Text style={{
                            fontSize:15
                        }}>A Bible</Text></Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => setDailyModal(!dailyModal)}
                    style={{
                        backgroundColor: Colors.SECONDARY,
                        display: "flex",
                        height: 80,
                        flexGrow: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 20,
                        borderWidth: 3,
                        borderColor: '#E39121'
                    }}>
                        <Text style={{fontWeight: 'bold', color: Colors.PRIMARY}}>Word of {"\n"}The Day</Text>
                    </TouchableOpacity>
                </View>
        </TouchableOpacity>
        

        




         {/* <TouchableOpacity 
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
        </TouchableOpacity> */}
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