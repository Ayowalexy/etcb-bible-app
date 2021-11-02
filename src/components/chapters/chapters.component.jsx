import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { setCurrentBook } from '../../redux/books/books.actions';
import { setCurrentChapter } from '../../redux/chapter/chapter.actions';
import { setCurrentVerse } from '../../redux/verse/verse.actions'
import DATABASE from '../../../database';


const Chapters = ({ currentBook, navigation, currentChapter, currentVerse}) => {


    const { EnglishName, chapters, id } = currentBook
    console.log(currentBook, 'set')

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
            <View>
                <View>
                    <Text>{EnglishName}</Text>
                    <ScrollView>
                        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
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
                                        >
                                            <View style={
                                                {
                                                    width: 40, 
                                                    marginTop: 10, 
                                                    marginLeft: 10, 
                                                    marginRight: 10, 
                                                    marginBottom: 10, 
                                                    height: 40, 
                                                    borderColor: 'black', 
                                                    borderStyle: 'solid', 
                                                    borderWidth: 2}}>
                                               <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                                    <Text>{chapter_Number}</Text>
                                               </View>
                                            </View>
                                        </TouchableOpacity>    

                                )
                            }) 
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
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