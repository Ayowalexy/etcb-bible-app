import React, {useState, useEffect} from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, useWindowDimensions, Platform, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { setCurrentChapter } from '../../redux/chapter/chapter.actions';
import { NewTestamentBooks } from '../../../Books';
import { styles } from '../old-testament/styles';
import { books } from '../old-testament/bk';


const NewTestament = ({navigation, setCurrentChapterRender, user}) => {
    const [freeBooks, setFreeBooks] = useState(["Genesis", "Jonah", "Mark", "Jude"])
    useEffect(() => {
        if(user.subscriptionStatus.subscribed === true){
            setFreeBooks(books)
        } 
    }, [])

    
    const { width, height } = useWindowDimensions()
    return(
        <ScrollView>
            <View style={styles.PARENT}>
                {
                    NewTestamentBooks.map(book => {
                        return (
                            <TouchableOpacity
                                style={styles.VERSE}
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


export default connect(mapStateToProps, mapDispatchToProps)(NewTestament)