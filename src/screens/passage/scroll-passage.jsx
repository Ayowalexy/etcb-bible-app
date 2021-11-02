import React, { useState} from 'react'
import { View, Text, ScrollView, Modal, TouchableOpacity, Pressable, useWindowDimensions } from 'react-native'
import styles from './passage'
import DATABASE from '../../../database'
import { connect } from 'react-redux'
import { setCurrentBook } from '../../redux/books/books.actions';
import { setBookMark } from '../../redux/bookmark/bookmark.action';
import PromptsModal from '../../components/modal/prompts-modal.component'
import ShareVerse from '../../components/share/share-verse.component';
import CopyVerse from '../../components/verse-copy/verse-copy.component';
import { setHighlight } from '../../redux/highlight/highlight.actions';
import Ionicons from '@expo/vector-icons/Ionicons'




export const VerseComponent = ({verse_Number, verse, fontSize, fontColor}) => {

    const { width } = useWindowDimensions()
    return (
    <View style={{flex: 1, marginTop: 20, flexDirection: 'row',  width}}>
        <Text style={[styles.chapter_number, {fontSize: fontSize}]}>{verse_Number}</Text>
        <Text style={[styles.chapter_verse, {fontSize: fontSize, color: fontColor}]}>{verse}</Text>
    </View>
)
    }


const arr = [1, 2, 3, 4,5]

let bookmarks = []
let verse;
let num;

const ScrollPassage = ({currentBook, bookmark, fontSize, fontColor, hightlight}) => {

    const [modal, setModal] = useState(false)
    const [backgroundColor, setBackgroundColor] = useState('')
    const [number, setNumber] = useState(null)
    const { currentChapter = 1, EnglishName } = currentBook
    

    let value;

    DATABASE.find(book => {
        if(book.EnglishName === EnglishName){           
            book.chapters.find(chapterLoop => {
               
                if(chapterLoop.chapter === currentChapter){
                     value = chapterLoop.chapter_verses

                }
            })
        }
    })

  

  
  if(!modal) {
      bookmarks = bookmarks.splice()
  }
    
        return(
            <ScrollView>
                
                        <View>
                            <View>
                                {
                                    value.map(chapter => (
                                        <TouchableOpacity
                                            style={{backgroundColor: chapter.verse_Number === number ?  backgroundColor : ''}}
                                            key={chapter.verse_Number}
                                            activeOpacity={0.6}
                                            //onPress={() => }

                                            onLongPress={() => {
                                                bookmarks.push({verse: chapter.verse, 
                                                    verse_number: chapter.verse_Number,
                                                    EnglishName: EnglishName,
                                                    chapter: currentChapter
                                                })

                                                verse = `${EnglishName} ${currentChapter}:${chapter.verse_Number}  ${chapter.verse}`
                                                hightlight({
                                                    EnglishName: EnglishName,
                                                    currentChapter: currentChapter, 
                                                    verse_number: chapter.verse_Number,
                                                    verse: chapter.verse
                                                })
                                           
                                                num = chapter.verse_Number
                                                setModal(!modal)
                                                }
                                            }
                                            
                                        >
                                        
                                           
                                                    <VerseComponent 
                                                    verse_Number={chapter.verse_Number}
                                                    verse={chapter.verse}
                                                    fontSize={fontSize} 
                                                    fontColor={fontColor} 
                                                    
                                                    
                                                    />
                                              
                                           
                                        </TouchableOpacity>
                                        )
                                    )    
                                }
                            </View>
                            
                            
                        </View>
            </ScrollView>
        )
  }

const mapDispatchToProp = dispatch => ({
    setCurrentBook: book => dispatch(setCurrentBook(book)),
    bookmark: book => dispatch(setBookMark(book)),
    hightlight: verse => dispatch(setHighlight(verse))
})


const mapStateToProps = state => ({
    currentBook: state.book.setCurrentBook,
})

export default connect(mapStateToProps, mapDispatchToProp)(ScrollPassage)