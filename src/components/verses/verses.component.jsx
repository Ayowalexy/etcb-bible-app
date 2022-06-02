import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView, TouchableOpacity,Button, Dimensions } from 'react-native'
import DATABASE from '../../../database';
import { connect } from 'react-redux'
import { setCurrentBook, setCurrentBookChapter, setData } from '../../redux/books/books.actions';
import Books from '../../../Books';
import { BibleBooks } from '../../screens/passage/data';
import { Colors } from '../../assets/Colors';
import { setUserDetails } from '../../redux/user/user.action';


const freeBooks = ["Genesis", "Jonah", "Mark", "Jude"]

const Verses = ({book, navigation, currentBook, data, user, setUserData}) => {
    const [expiredSub, setExpiredSub] = useState(false)

    const { EnglishName, verse, chapter } = book
    const [HebrewName, setHebrewName] = useState('')

    useEffect(() => {
        const book = Books.find(data => data.EnglishName ===  EnglishName)
        setHebrewName(book.HebrewName)
    }, [EnglishName])


    let currBook = BibleBooks[EnglishName].find(data => data.chapter === chapter)
    let arr = [];
    for(let i = 1; i <= currBook.chapter_verses.length; i++){
        arr.push(i)
    }


    const bookRender = Books.find(bookMatch => {
        if(bookMatch.EnglishName === EnglishName){
            return bookMatch
        }
    })


    useEffect(() => {
        const today = new Date();
        const expiry = new Date(user.subscriptionStatus.expires);
        if(user.subscriptionStatus.expires){
            if(today.getTime() > expiry.getTime()){
                setExpiredSub(true)
                setUserData({
                    email: user.email,
                    loggedIn: true,
                    subscriptionStatus: {
                        started: '',
                        expires: '',
                        subscribed: false
                    }
                })
            } else {
                setExpiredSub(false)
            }
        }
      

    }, [])

    
            return(
            <ScrollView>
                <View
                    style={{
                         display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        width: Dimensions.get('screen').width,
                    }}
                >
                    
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{EnglishName} : {chapter} </Text>
                    <Text >{HebrewName}</Text>
                    <View>
                        <View style={{
                            display: 'flex', 
                            flexDirection: 'row', 
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            width: Dimensions.get('screen').width,
                            alignItems: 'center'
                            }}>
                            {
                            arr.map(chapter_Number => {

                                return (
                                    
                                        <TouchableOpacity
                                            key={chapter_Number}
                                            style={{
                                                width: 40, 
                                                margin: 10, 
                                                height: 40, 
                                                backgroundColor: Colors.SECONDARY_FADED,
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                borderWidth: 2,
                                                borderColor: '#E39121'
                                                }}
                                            onPress={() => {
                                                data({...bookRender, currentChapter: book.chapter, salt: true, verse: chapter_Number})
                                                //currentBook({...bookRender, currentChapter: book.chapter, salt: true})
                                                if((user.subscriptionStatus.subscribed === true) && (expiredSub === false)){
                                                    navigation.navigate('Passage')
                                                } else if((user.subscriptionStatus.subscribed === false) && (freeBooks.includes(EnglishName))){
                                                    navigation.navigate('Passage')
                                                } else {
                                                    navigation.navigate('Lock')
                                                }
                                            }}
                                        >
                                                    <Text>{chapter_Number}</Text>
                                        </TouchableOpacity>    

                                )
                            }) 
                            }
                        </View>
                        
                    </View>
                    {
                            currBook.comment ?
                            (<View 
                            style={{
                                width: 200,
                                borderWidth: 2,
                                borderColor: '#E39121',
                                // marginLeft: (Dimensions.get('window').width - 200 ) / 2
        
                            }}
                           >
                            <Button
                                    color={Colors.SECONDARY}
                                    title='COMMENTARY'
                                    onPress={() => navigation.navigate('Commentary',{
                                        EnglishName: EnglishName,
                                        chapter: currBook.chapter
                                    })}
        
                                />
                                </View>)
                                : null
                        }
                </View>
            </ScrollView>
        )
}

const mapStateToProps = state => ({
    book: state.verse.setCurrentVerse,
    chapter: state.chapter.setCurrentChapter,
    user: state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
    data: book => dispatch(setData(book)),
    setUserData: user => dispatch(setUserDetails(user)),
    currentBook: book => dispatch(setCurrentBook(book))
})

export default connect(mapStateToProps, mapDispatchToProps)(Verses)