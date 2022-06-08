import React, { useState, useEffect, useRef } from 'react'
import { View, Text,Pressable, FlatList, ScrollView, Animated, useWindowDimensions,Dimensions,Modal, TouchableOpacity } from 'react-native'
import ScrollPassage from './scroll-passage'
import EXODUS from './data';
import FlatListRender from './flat-list-render';
import { connect  } from 'react-redux';
import {BibleBooks} from './data';
import {Ionicons,MaterialCommunityIcons} from '@expo/vector-icons';
import { Colors } from '../../assets/Colors';
import { ModalRender } from '../settings/settings-drawer';
import ShareVerse from '../../components/share/share-verse.component';
import CopyVerse from '../../components/verse-copy/verse-copy.component';
import {styles} from './styles';
import { resetHighlight, setHighlight } from '../../redux/highlight/highlight.actions';
import { resetBookmark, setBookMark } from '../../redux/bookmark/bookmark.action';
import ModalPrompt from '../../components/Modal-Prompt/Modal_Prompt';


let bookmarks = []
let verse;
let num;
let noteVerse;

const freeBooks = ["Genesis", "Jonah", "Mark", "Jude"]

const PassageFlat = ({navigation, NextBook, fontColor, fontSize, hightlight, bookmark, user}) => {
    const [currentBook, setCurrentBook] = useState([])
    const [backgroundColor, setBackgroundColor] = useState('')
    const [number, setNumber] = useState(null)
    const [currentChapter, setCurrentChapter] = useState(0)
    const book = BibleBooks[NextBook.EnglishName]
    const [modal, setModal] = useState(false)
    const [trialModal, setTrialModal] = useState(false);
    const [modal_1, setModal_1] = useState(false)



    const ref = useRef();

    const translate = useRef(new Animated.Value(0)).current;
    const translateHeader = useRef(new Animated.Value(0)).current;

    const translateIn = () => {
        Animated.timing(translate, {
        toValue: 100,
        duration: 300,
        useNativeDriver: true
        }).start();
    };

    const translateOut = () => {
        Animated.timing(translate, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
        }).start();
    };

    const translateInHeader = () => {
        Animated.timing(translateHeader, {
        toValue: -100,
        duration: 300,
        useNativeDriver: true
        }).start();
    };
    const translateOutHeader = () => {
        Animated.timing(translateHeader, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
        }).start();
    };
   

    
    const refCont = useRef(null); 
    useEffect(() => {
            if(user.currentUser.subscriptionStatus.subscribed){
                setTrialModal(false)
            }else if((freeBooks.includes(NextBook.EnglishName)) && (user.currentUser.subscriptionStatus.subscribed === false)){
                setTrialModal(true)
                console.log('============000=================')

            }else {
                setTrialModal(false)
            }
            const matchingBook = book.find(element => element.chapter === NextBook.currentChapter)
            setCurrentBook(matchingBook)
            setCurrentChapter(NextBook.currentChapter)
        
        
        // refCont.current.scrollToIndex({animated: true, index: })




    }, [])

      let offset = 0;

     const ref_1 = useRef(null);
     
     const [index, setIndex] = useState(0)

     
    return (
        <View>





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

                <View 
                    style={{
                        display: 'flex',
                        width: '100%',
                        height: Dimensions.get('window').height,
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <View
                        style={{
                            borderWidth: 2,
                            display: 'flex',
                        justifyContent: 'space-around',
                        alignContent: 'center',
                        alignItems: 'center',
                            width: 300,
                            height: 100,
                            backgroundColor: '#fff'
                        }}
                    >
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignContent: 'center',
                                // alignItems: 'center',
                                width: 250,
                                // height: 350
                            }}
                        >
                           <TouchableOpacity
                                onPress={() => {
                                                
                                                    //bookmark([])
                                                    // clearBook(...bookmarks)
                                                    bookmark(bookmarks.pop())
                                                        setModal(!modal)
                                                }
                                            }
                            >
                               

                                <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <Ionicons name='bookmark' color='black' size={25} />
                                    <Text style={{color: '#000'}}>Bookmark</Text>
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
                        {/* <View style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row',
                                width: 200
                            }}>

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

                        </View> */}
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


</Modal>




            <ModalPrompt 
                    navigation={navigation} 
                    modalVisible={trialModal} 
                    setModalVisible={setTrialModal}  
                />

            {/* <ModalRender modal={modal_1} setModal={setModal_1}  /> */}


             <Animated.View
                    style={{
                        width: '100%',
                        height: 60,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: Colors.SECONDARY,
                        borderWidth: 2,
                        borderColor: '#E39121',
                        padding: 10,
                        // transform: [
                        //     {
                        //         translateY: translateHeader
                        //     }
                        // ]
                       
                    }}
                >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Locate')}
                    >
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: Colors.PRIMARY}}>{NextBook.EnglishName} {currentBook.chapter}</Text>
                        <Text style={{fontStyle: 'italic', color: Colors.PRIMARY}}>{NextBook.HebrewName}</Text>
                    </TouchableOpacity>

                    <View style={{
                        width: 100,
                        height: 50,
                        borderColor: 'white',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Search')}
                        >
                            <Ionicons 
                                name='search'
                                color='white'
                                size={20}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>setModal_1(!modal_1)}
                        >
                            <MaterialCommunityIcons 
                                name='format-font-size-increase'
                                color='white'
                                size={20}
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Settings')}
                        >
                            <Ionicons 
                                name='md-settings-sharp'
                                color='white'
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>
                </Animated.View>
                <ScrollView
                    style={{
                        marginBottom: 100
                    }}
                    onScroll={event => {
                        let currentOffset = event.nativeEvent.contentOffset.y;
                        let direction = currentOffset >  offset ? 'up' : 'down'
                        offset = currentOffset
                        if(direction === 'up'){
                            ref.current = 1
                            translateIn()
                            translateInHeader()

                        } else {
                            ref.current = 0
                            translateOut()
                            translateOutHeader()
                        }
                        
                    }}
            >
                {/* <ModalRender modal={modal} setModal={setModal} /> */}

                
                <FlatList 
                    data={currentBook.chapter_verses}
                    initialScrollIndex={0}
                    ref={refCont}
                    keyExtractor={(item) => item.id}
                    renderItem={({item, index}) => {
                                    const msg= item.msg || null;
                                    const comment= item.comment
                                    const part= currentBook.part || 'OT';
                                    const color = currentBook.color;
                                    const verse_color = item.verse_color || Colors.DEFAULT;
                                    const colored=item.colored || null;

                                    console.log(verse_color, index)
                                    let useColor;


                                    
                                    if(part === "OT") {
                                        useColor = 'blue'
                                    } else if(part === 'NT'){
                                        useColor = 'red'
                                    }

                                    if(verse_color == 'red' || verse_color == 'blue'){
                                        useColor = verse_color
                                    }

                                    
                                    
                                    let c_1 = '';
                                    switch (colored) {
                                        case null:
                                            c_1 = part == 'OT' ? 'blue' : 'red'
                                            break;
                                        case 'blue':
                                            c_1 = 'blue';
                                            break
                                        case 'red':
                                            c_1 = 'red'
                                            break
                                    
                                        default:
                                            c_1 = 'black'
                                            break;
                                    }
                        return (
                            <TouchableOpacity
                            activeOpacity={0.8}
                            key={index}
                                onLongPress={() => {
                                    bookmarks.push({
                                        verse: item.verse, 
                                        verse_number: item.verse_Number,
                                        EnglishName: NextBook.EnglishName,
                                        chapter: currentBook.chapter
                                    })

                                    noteVerse = `${NextBook.EnglishName} ${currentBook.chapter}:${item.verse_Number}`
                                    verse = `${NextBook.EnglishName} ${currentBook.chapter}:${item.verse_Number}  ${item.verse}`
                                    
                                    
                                    hightlight({
                                        EnglishName: NextBook.EnglishName,
                                        currentChapter: currentBook.chapter, 
                                        verse_number: item.verse_Number,
                                        verse: item.verse
                                    })
                            
                                    num = item.verse_Number
                                    setModal(!modal)
                                    }
                                }
                            >
                                                <View style={{
                                                    width: '100%',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    padding: 10,
                                                    borderBottomWidth: item.header !== null || msg !== null ? 1 : 0
                                                }}>
                                                        <Text style={{textAlign: 'center'}}>
                                                            { 
                                                                item.header !== null || item.header === "" 
                                                                    ? 
                                                                    <Text style={styles.HEADER_1}>{item.header}{"\n"}</Text>
                                                                    : 
                                                                    null
                                                            }
                                                            
                                                        </Text>
                                                        { 
                                                                msg !== null  
                                                                    ? 
                                                                    <Text style={styles.MSG}>{item.msg}</Text> 
                                                                    : 
                                                                    null
                                                            }
                                                    </View>

                                                <View 
                                                     style={styles.CONTAINER}

                                                >
                                                    <View>
                                                        <Text style={[styles.NUMBER]}>{item.verse_Number}</Text>
                                                    </View>

                                                    <View style={{flexGrow: 1}}>
                                                    
                                                    

                                                    <View style={styles.TEXT_BOX}>
                                                        <Text 
                                                            style={{
                                                                fontSize, 
                                                                textAlign: 'center', 
                                                                fontColor, 
                                                                color: item.verse_color ? item.verse_color : color
                                                                }}
                                                            >
                                                                { 
                                                                    item.verse.includes('“ ') 
                                                                    ? 
                                                                        <Text 
                                                                            style={{
                                                                                
                                                                                fontSize, 
                                                                                fontColor}}
                                                                            >
                                                                                { 
                                                                                    item.verse.includes('“ ') 
                                                                                    ? 
                                                                                        <Text 
                                                                                            style={{
                                                                                                color:'black'
                                                                                                }}
                                                                                            >
                                                                                                {
                                                                                                    item.verse.slice(0, item.verse.indexOf('“ '))
                                                                                                }
                                                                                        </Text> 
                                                                                    : 
                                                                                        null
                                                                                }
                                                                                    <Text  
                                                                                        style={{
                                                                                            color: c_1
                                                                                            // color: part === "OT" ? 'blue': 'red'
                                                                                            }}
                                                                                    >
                                                                                        {
                                                                                            item.verse.includes('“ ') 
                                                                                                ? 
                                                                                                    item.verse.slice(item.verse.indexOf('“ '), item.verse.indexOf('”'))
                                                                                                : 
                                                                                                    item.verse.slice(0, item.verse.indexOf('”'))
                                                                                        }
                                                                                    </Text>
                                                                                    <Text style={{
                                                                                        color:'black'
                                                                                        }}
                                                                                    >
                                                                                        {
                                                                                            item.verse.slice(item.verse.indexOf('”'))
                                                                                        }
                                                                                    </Text>
                                                                        </Text>
                                                                    : 
                                                                        item.verse
                                                                }
                                                        </Text>

                                                        <View>
                                                            {
                                                                item.ref 
                                                                ? 
                                                                    <View style={{
                                                                        marginTop: 10,
                                                                    }}>
                                                                    <View>
                                                                        <Text style={styles.REF}>{item.ref}</Text>
                                                                    </View>
                                                                
                                                                    </View> 
                                                                :
                                                                    null
                                                            }
                                                                <Text style={styles.COMMENT}>{item.comment}</Text>

                                                        </View>
                                                    </View>
                                                </View>

                                                </View>
                                                
                                                
                                        </TouchableOpacity>
                            
                        )
                    }}
                                                    
                  />
                
            </ScrollView>
            <Animated.View 
                style={[
                    styles.ANIMATED, {
                    transform: [
                        {
                            translateY: translate
                        }
                    ]}
                ]}
            >
                    <TouchableOpacity
                        onPress={() => {
                            
                            if(currentChapter <= 1){
                                console.log(currentChapter, 'on')
                                setCurrentChapter(1)
                                setCurrentBook(book[0])
                            } else {
                                console.log(currentChapter, 'off')
                                setCurrentChapter(chapter => chapter - 1)
                                const matchingBook = book.find(element => element.chapter === currentChapter)
                                setCurrentBook(matchingBook)
                            }
                        }}
                    >
                        <Ionicons 
                            name='ios-chevron-back-circle'
                            color={Colors.DEFAULT}
                            size={35}
                        />
                    </TouchableOpacity>
                        
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Home Page')}
                        >
                        <Ionicons 
                                    name='home'
                                    color={Colors.DEFAULT}
                                    size={35}
                                />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            if(book.length === currentChapter){
                                console.log(currentChapter)
                                setCurrentChapter(book.length);
                                setCurrentBook(book[0]);
                            } else {
                                console.log(currentChapter)

                                setCurrentChapter(chapter => chapter + 1)
                                const matchingBook = book.find(element => element.chapter === currentChapter)
                                setCurrentBook(matchingBook)
                            }
                        }}
                    >
                        <Ionicons 
                            name='ios-chevron-forward-circle'
                            color={Colors.DEFAULT}
                            size={35}
                        />
                    </TouchableOpacity>
                    
                </Animated.View>
        </View>
        
        // <FlatList 
        //     data={EXODUS}
        //     renderItem={({item}) => <FlatListRender item={item} navigation={navigation}/>}
        //     keyExtractor={(item) => item.id}
           
        // />

    )
}

const mapStateToProps = state => ({
    NextBook: state.book.book,
    fontSize: state.book.fontSize,
    fontColor: state.book.fontColor,
    user: state.user
})
const mapDispatchToProps = dispatch => ({
    hightlight: verse => dispatch(setHighlight(verse)),
    bookmark: book => dispatch(setBookMark(book)),
    clear: dispatch(resetHighlight()),
    clearBook: book=> dispatch(resetBookmark(book))
})
export default connect(mapStateToProps, mapDispatchToProps)(PassageFlat)