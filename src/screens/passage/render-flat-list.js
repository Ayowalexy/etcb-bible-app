import React, { useState, useRef, useEffect } from 'react'
import { View, Text, ActivityIndicator, FlatList, Dimensions, useWindowDimensions, TouchableOpacity, Modal, Pressable, Platform } from 'react-native'
import EXODUS, { Exodus, Leviticus, Numbers } from './data';
import LinearGradientComponent from '../../components/linear-gradient/linear-gradient.component';
import { connect } from 'react-redux'
import { setData } from '../../redux/books/books.actions';
import Books from '../../../Books'
import styles from './passage'
import  VerseComponent  from './scroll-passage';
import ShareVerse from '../../components/share/share-verse.component';
import CopyVerse from '../../components/verse-copy/verse-copy.component';
import PromptsModal from '../../components/modal/prompts-modal.component';
import { setBookMark, resetBookmark } from '../../redux/bookmark/bookmark.action';
import { setHighlight, resetHighlight } from '../../redux/highlight/highlight.actions';
import Ionicons from '@expo/vector-icons/Ionicons';
// import  Commentary from '../../commentary.component/commentary.component'

let bookmarks = []
let verse;
let num;
let noteVerse;



const RenderVerse = ({item, style, details,clearBook, fontColor, navigation, fontSize, EnglishName, HebrewName, clear, currentChapter, hightlight, bookmark}) =>{
    const { width, height } = useWindowDimensions();
    const [modal, setModal] = useState(false)
    const [backgroundColor, setBackgroundColor] = useState('')
    const [number, setNumber] = useState(null)

  console.log(item.part)
    return (
        <View style={

            {
               
            width,
            backgroundColor: style.setStyle.backgroundColor, 
            marginLeft: 0}}> 
            {/* <PromptsModal setModal={setModal} modal={modal} bookmarks={bookmarks} verse={verse}/>         */}


            <Modal
                animationType='fade'
                visible={modal}
                transparent={true}
                onRequestClose={() => {
                    bookmarks = bookmarks.splice()
                    setModal(!modal)

                }
            }
            >
<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <View style={{width: 270,backgroundColor: 'white', height: Platform.OS === 'ios' ? 250 :  200, 
    borderColor: 'black', borderStyle: 'solid', borderWidth: 2}}>
        <View style={{flex: 1, marginLeft: 15, flexDirection: 'row', flexWrap: 'wrap', marginTop: -70}}>
            <TouchableOpacity
                onPress={() => {
                                
                                    //bookmark([])
                                    // clearBook(...bookmarks)
                                    bookmark(bookmarks.pop())
                                        setModal(!modal)
                                }
                            }
            >
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View>
                        <Ionicons name='bookmark' color='black' size={25} />
                </View>
                    <View>
                        <Text>Bookmark</Text>
                    </View>
                </View>
            </TouchableOpacity>

            
            <ShareVerse message={verse} />
            
            <CopyVerse verse={verse} setModal={setModal} />
                
                
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Notes', {
                        verse: noteVerse
                    })
                    setModal(!modal)
                }}
            
            >
                <View style={{flex: 1, marginLeft: 25, justifyContent: 'center', alignItems: 'center'}}>
                    <Ionicons name='book' color='black' size={25} />
                    <Text>Note</Text>
                </View>
            </TouchableOpacity>
           
        </View>
        <View>
            <View style={{marginTop: -80}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold'}}>Highlight</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Pressable
                        onPress={() => {
                            setBackgroundColor('red')
                            setNumber(num)
                            setModal(false)
                        }
                    }
                    >
                        <View style={{width: 20, height: 20, borderRadius: 20, backgroundColor: 'red'}}></View>
                    </Pressable>
                    <Pressable
                           onPress={() => {
                            setBackgroundColor('yellow')
                            setNumber(num)
                            setModal(false)
                        }
                    }
                    >
                        <View style={{width: 20, height: 20, borderRadius: 20, backgroundColor: 'yellow'}}></View>
                    </Pressable>
                    <Pressable
                           onPress={() => {
                            setBackgroundColor('green')
                            setNumber(num)
                            setModal(false)
                        }
                    }
                    >
                        <View style={{width: 20, height: 20, borderRadius: 20, backgroundColor: 'green'}}></View>
                    </Pressable>
                    <Pressable
                          onPress={() => {
                            setBackgroundColor('purple')
                            setNumber(num)
                            setModal(false)
                        }
                    }
                    >
                        <View style={{width: 20, height: 20, borderRadius: 20, backgroundColor: 'purple'}}></View>
                    </Pressable>
                    <Pressable
                         onPress={() => {
                            setBackgroundColor('teal')
                            setNumber(num)
                            setModal(false)
                        }
                    }
                    >
                        <View style={{width: 20, height: 20, borderRadius: 20, backgroundColor: 'teal'}}></View>
                    </Pressable>
                    <Pressable
                         onPress={() => {
                            setBackgroundColor('white')
                            setNumber(num)
                            setModal(false)
                        }
                    }
                    >
                        <View style={{width: 20, borderColor: 'black', borderWidth: 1, borderStyle: 'solid', height: 20, borderRadius: 20, backgroundColor: 'white'}}></View>
                    </Pressable>
                </View>
            </View>
            
        </View>
        {
                Platform.OS == 'ios' ?
                <View style={{alignSelf: 'center'}}>

                    <TouchableOpacity
                        onPress={() => {
                            setModal(false)
                        }}
                    >
                        <Ionicons name='close' size={35} color='black' />
                    </TouchableOpacity>
                   
                </View>
                : null
            }
    </View>
</View>
</Modal>

                <LinearGradientComponent 
                    EnglishName={EnglishName} 
                    HebrewName={HebrewName} 
                    currentChapter={item.chapter}
                    navigation={navigation}
                />
              
                   
                        
            {
                
                        item.chapter_verses.map((chap, idx) => {
                            

                            return (
                            
                        // item.chapter_verses.map((chap, idx) => (
                            <View>
                            
                            <TouchableOpacity
                                style={{backgroundColor: chap.verse_Number === number ?  backgroundColor : ''}}
                                key={chap.verse_Number}
                                activeOpacity={0.6}
                                //onPress={() => }

                                onLongPress={() => {
                                    bookmarks.push({verse: chap.verse, 
                                        verse_number: chap.verse_Number,
                                        EnglishName: EnglishName,
                                        chapter: currentChapter
                                    })

                                    noteVerse = `${EnglishName} ${currentChapter}:${chap.verse_Number}`
                                    verse = `${EnglishName} ${currentChapter}:${chap.verse_Number}  ${chap.verse}`
                                    
                                    
                                    hightlight({
                                        EnglishName: EnglishName,
                                        currentChapter: currentChapter, 
                                        verse_number: chap.verse_Number,
                                        verse: chap.verse
                                    })
                            
                                    num = chap.verse_Number
                                    setModal(!modal)
                                    }
                                }
                                
                            >
                                <VerseComponent 
                                    verse_Number={chap.verse_Number}
                                    verse={chap.verse}
                                    fontSize={fontSize} 
                                    fontColor={fontColor} 
                                    heading={chap.header}
                                    refer={chap.ref}
                                    msg={chap.msg || null}
                                    comment={chap.comment}
                                    part={item.part || 'OT'}
                                    verse_color={chap.verse_color}
                                    color={item.color}
                                    colored={item.colored || null}
                                    
                                    
                                    // before_verse={chap.before_verse}
                                    // GOD_SAID={chap.GOD_SAID}
                                    // after_verse={chap.after_verse}
                                />
                        
                        
                        </TouchableOpacity>
                        </View>
                        )}) 
            }

         
        </View>
    )
}

const mapDispatchToProps = dispatch => ({
    hightlight: verse => dispatch(setHighlight(verse)),
    bookmark: book => dispatch(setBookMark(book)),
    clear: dispatch(resetHighlight()),
    clearBook: book=> dispatch(resetBookmark(book))
})

const mapStateToProps = state => ({
    style: state.style,
    fontColor: state.book.fontColor || 'black'
})

export default connect(mapStateToProps, mapDispatchToProps)(RenderVerse)