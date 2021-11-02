import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Pressable } from 'react-native'
import styles from '../../screens/passage/passage'
import  ModalRender from '../modal/modal.component'
import Ionicons from '@expo/vector-icons/Ionicons';


const LinearGradientComponent = ({EnglishName, HebrewName, currentChapter, navigation}) => {

    const [modal, setModal] = useState(false)

        return(
            <View> 
                <LinearGradient
                                colors={['#171C24', '#fff']}
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                style={styles.linearGradient}

                            >
                                <ModalRender modal={modal} setModal={setModal} />
                                <View style={[styles.container_second]}>
                                    <Pressable 
                                        onPress={() => navigation.navigate('Locate')}
                                    style={styles.text_propmt}>
                                        <View>
                                            <Text style={styles.bible_book}>{`${EnglishName} ${currentChapter}`}</Text>
                                            <Text style={styles.hebrewName}>{HebrewName}</Text>
                                        </View>
                                        <View>
                                            <Ionicons name='ios-caret-down' color='white' size={20} />
                                        </View>
                                    </Pressable>

                                    <View style={styles.menu}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                setModal(!modal)
                                            }
                                        }
                                        >
                                            <View>
                                                <Text style={styles.font_settings}>
                                                    Aa
                                                </Text>
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={() => navigation.navigate('Search')}
                                        >
                                            <View>
                                                <Ionicons name='search' color='black' size={20} />
                                            </View>
                                        </TouchableOpacity>
                                        
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate('Settings')}
                                        >
                                            <View>
                                                <Ionicons name='settings-outline' color='black' size={20} />
                                            </View>
                                        </TouchableOpacity>
                                        
                                    </View>
                                </View>
                            </LinearGradient>
            </View>
            
            
        )
}

export default LinearGradientComponent