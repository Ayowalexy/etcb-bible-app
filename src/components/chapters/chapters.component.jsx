import React, {useState, useEffect} from 'react'
import { View, Text, ScrollView, TouchableOpacity, Button, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { setCurrentBook } from '../../redux/books/books.actions';
import { setCurrentChapter } from '../../redux/chapter/chapter.actions';
import { setCurrentVerse } from '../../redux/verse/verse.actions'
import DATABASE from '../../../database';
import { Colors } from '../../assets/Colors';
import Books from '../../../Books';




const Chapters = ({ currentBook, navigation, currentChapter, currentVerse}) => {


    const [HebrewName, setHebrewName] = useState('')
    const { EnglishName, chapters, id } = currentBook
    console.log(currentBook, 'set')

    useEffect(() => {
        const book = Books.find(data => data.EnglishName ===  EnglishName)
        setHebrewName(book.HebrewName)
    }, [EnglishName])
    let arr = [];
    for(let i = 1; i <= chapters; i++){
        arr.push(i)
    }

    let arrVer = []

    for( let data of DATABASE){
        if(data.EnglishName === EnglishName){
            data.chapters.map(element => arrVer.push(element.chapter_verses.length))

        } 
        
    }

    
        return(
            <ScrollView>
                <View 
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: Dimensions.get('screen').width,
                    }}
                >
                   <View style={{
                       display: 'flex',
                       justifyContent: 'center',
                       alignItems: 'center',
                   }}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{EnglishName}</Text>
                    <Text >{HebrewName}</Text>
                    <Text style={{padding: 20}}>Will you like to read the introductory notes on {EnglishName}? click the button</Text>
                   <View 
                    style={{
                        width: 200,
                        borderWidth: 2,
                        borderColor: '#E39121',
                        // marginLeft: (Dimensions.get('window').width - 200 ) / 2

                    }}
                   >
                    <Button
                            color={Colors.SECONDARY}
                            title='INTRODUCTION'
                            style={{fontWeight: 'bold'}}
                            onPress={() => navigation.navigate('Introduction', {
                                EnglishName: EnglishName
                            })}
                        />
                   </View>
                        <View style={{
                            width: Dimensions.get('screen').width,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            flexWrap: 'wrap'
                        }}>
                            {
                            arr.map(chapter_Number => {
                                return (
                                    
                                        <TouchableOpacity
                                            key={chapter_Number}
                                            onPress={() => {
                                                currentVerse({
                                                    EnglishName,
                                                    chapter: chapter_Number,
                                                    verse: arrVer[chapter_Number - 1]
                                                })
                                                navigation.navigate('Verses')
                                            }}
                                            style={
                                                {
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
                                        >
                                                    <Text style={{fontWeight: 'bold'}}>{chapter_Number}</Text>
                                        </TouchableOpacity>    

                                )
                            }) 
                            }

                        </View> 
                    </View>                       
                </View>
            </ScrollView>
        )
    }

const mapStateToProps = state => ({
    currentBook: state.chapter.setCurrentChapter
})


const mapDispatchToProps = dispatch => ({
    currentVerse: verse => dispatch(setCurrentVerse(verse)),
    currentChapter: chapter => dispatch(setCurrentChapter(chapter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Chapters)