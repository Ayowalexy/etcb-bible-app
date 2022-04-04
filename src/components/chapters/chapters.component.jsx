import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Button, Dimensions } from 'react-native'
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
            <ScrollView>
                <View>
                    <Text style={{padding: 20, fontSize: 20, fontWeight: 'bold'}}>{EnglishName}</Text>

                    <Text
                        style={{
                            padding: 20,
                        }}
                    >Will you like to read the introductory notes on {EnglishName}? click the button</Text>
                   <View 
                    style={{
                        width: 200,
                        marginLeft: (Dimensions.get('window').width - 200 ) / 2

                    }}
                   >
                    <Button
                            color='black'
                            title='INTRODUCTION'
                            onPress={() => navigation.navigate('Introduction', {
                                EnglishName: EnglishName
                            })}
                        />
                   </View>
                    
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

                        {/* <Text
                        style={{
                            padding: 20,
                        }}
                    >Click to read commentary on the book of {EnglishName}</Text>
                   <View 
                    style={{
                        width: 200,
                        marginLeft: (Dimensions.get('window').width - 200 ) / 2

                    }}
                   >
                    <Button
                            color='black'
                            title='COMMENTARY'
                            onPress={() => navigation.navigate('Commentary')}

                        />
                        </View> */}
                        
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