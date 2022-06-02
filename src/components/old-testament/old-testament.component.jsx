import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, ScrollView, useWindowDimensions, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { setCurrentChapter } from '../../redux/chapter/chapter.actions';
// import Books from '../../../Books';
import { OldTestamenBooks } from '../../../Books';
import { Colors } from '../../assets/Colors';
import {styles} from './styles'
import { books } from './bk'


const OldTestament = ({navigation, setCurrentChapterRender, user}) => {

    const { width, height } = useWindowDimensions()
    const [freeBooks, setFreeBooks] = useState(["Genesis", "Jonah", "Mark", "Jude"])
    const [faded, setFaded] = useState(false)
    
 
    return(
        <ScrollView>
           <View style={styles.PARENT}>
                {
                    OldTestamenBooks.map(book => {
                            
                        return (
                            <TouchableOpacity
                                style={[styles.VERSE]}
                                key={book.id}
                                onPress={() => {
                                    navigation.navigate('Chapters')
                                    setCurrentChapterRender({
                                        EnglishName: book.EnglishName,
                                        chapters: book.chapters
                                    })
                                }}
                            >
                                <View>
                                    <Text style={styles.VERSE_01}>{book.EnglishName}</Text>
                                    <Text style={styles.VERSE_02}>{book.HebrewName}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
           </View>
           
        </ScrollView>
    )
        }


        

const mapDispatchToProps = dispatch => ({
    setCurrentChapterRender: chapter => dispatch(setCurrentChapter(chapter))

})

const mapStateToProps = state => ({
    user: state.user.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(OldTestament)