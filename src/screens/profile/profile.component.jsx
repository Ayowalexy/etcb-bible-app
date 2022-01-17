import { Text, View, Image, Button, ScrollView, TouchableOpacity, Platform, StatusBar, Pressable } from 'react-native'
import React, {useState, useEffect} from 'react'
import * as ImagePicker from 'expo-image-picker'
import styles from './profile.styles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { connect } from 'react-redux'

const Profile = ({bookmark, hightlight, navigation, note}) => {
    const [image, setImage] = useState(null)
     const {verse} = hightlight
    
    const { book} = bookmark

    const { notes } = note

    console.log(notes)
   

    const pickImage = async () => {
        let response = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [3, 3],
            quality: 1
        })

        if(!response.cancelled){
            setImage(response.uri)
        }
    }
    return(
        <ScrollView style={styles.container}>
            <View style={{marginTop: Platform.OS === 'ios'? 40 : StatusBar.currentHeight}}>
                <View style={styles.user}>
                    {
                        image ?  <Image source={{uri: image}} style={styles.image} /> :
                        <Ionicons name='md-person' size={105} color='white' />
                    }
                   
                    <TouchableOpacity
                        onPress={pickImage}
                        style={styles.camera}
                    >
                        <Ionicons name='camera' size={40} color='white' />
                    </TouchableOpacity>
                </View>


                <View style={styles.icons}>
                    <View style={styles.icon_nested}>
                        <Ionicons name='notifications' color='black' size={25} />
                        <View style={styles.text}>
                            <Text style={styles.text_nested}>Notification</Text>
                            <Text style={{fontSize: 14}}>You have three emails and a plan to start this week</Text>
                        </View>
                    </View>

                    
                    <View style={styles.icon_nested}>
                        <Ionicons name='bookmarks' color='black' size={25} />
                        <Pressable
                            onPress={() => book.length ? navigation.navigate('Bookmarks') : ''}
                        >
                            <View  style={styles.text}>
                                <Text style={styles.text_nested}>Bookmarks</Text>
                                
                                {
                                    book.length ? book.map((element, idx) => {
                                        return (
                                          
                                            <Text key={idx} style={{fontSize: 14}}>{`${element.EnglishName} ${element.chapter}:${element.verse_number}`}</Text>
                                         
                                        )
                                    }) : <Text style={{fontSize: 14}}>No bookmarks  available</Text>

                                }
                            </View>
                        </Pressable>
                    </View>


                    <View style={styles.icon_nested}>
                        <Ionicons name='ios-pencil-sharp' color='black' size={25} />
                        <View  style={styles.text}>

                            <Pressable
                                onPress={() => verse ? navigation.navigate('Highlight') : ''}
                            >
                                <Text style={styles.text_nested}>Highlights</Text>
                                {
                                    verse ? 
                                        verse.map((element, idx) => {
                                            const { EnglishName, currentChapter, verse, verse_number } = element
                                            return (
                                                <Text key={idx} style={{fontSize: 14}}>{`${EnglishName} ${currentChapter}:${verse_number}; ${verse.slice(0, 40)}...`}</Text>
                                            )
                                        })
                                    : <Text>No Highlights Available</Text>
                                    
                                }
                            </Pressable>
                            
                           
                        </View>
                    </View>

                    <Pressable
                        onPress={() => notes ? navigation.navigate('Display Notes') : '' }
                    >
                        <View style={styles.icon_nested}>
                            <Ionicons name='md-book' color='black' size={25} />
                            <View  style={styles.text}>
                                <Text style={styles.text_nested}>Notes</Text>

                                { 
                                    notes ? 
                                    notes.map((element, idx) => (
                                        <View key={idx} style={{flex: 1, flexDirection: 'row'}}>
                                            <Text>{element.text}</Text>
                                            <Text>{element.notes.slice(0, 40)}...</Text>
                                        </View>
                                    )) :  <Text style={{fontSize: 14}}>No note taken yet</Text>

                                
                                }
                            
                            </View>
                        </View>
                    </Pressable>

                    <Pressable
                        onPress={() => navigation.navigate('Donate')}
                    >
                        
                        <View style={styles.icon_nested}>
                            <Ionicons name='heart' color='black' size={25} />
                            <View  style={styles.text}>
                                <Text style={styles.text_nested}>Donate</Text>
                                <Text style={{fontSize: 14}}>Give to those that need, click to donate to whichever amount to the 
                                    population that needs it
                                </Text>
                            </View>
                        </View>
                    </Pressable>


                    {/* <View style={styles.icon_nested}>
                        <Ionicons name='ios-information-circle' color='black' size={25} />
                        <View style={styles.text}>
                            <Text style={styles.text_nested}>About</Text>
                            <Text style={{fontSize: 14}}>Know more about ETB Bible</Text>
                        </View>
                    </View> */}


                </View>

             </View>
        </ScrollView>
    )
}

const mapStateToProps = state => ({
    bookmark: state.bookmark,
    hightlight: state.highlight,
    note: state.note
})

export default connect(mapStateToProps)(Profile)