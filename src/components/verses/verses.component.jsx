import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import DATABASE from '../../../database';
import { connect } from 'react-redux'
import { setCurrentBook, setCurrentBookChapter, setData } from '../../redux/books/books.actions';
import Books from '../../../Books';
import { BibleBooks } from '../../screens/passage/data';




const Verses = ({book, navigation, currentBook, data}) => {


    const { EnglishName, verse, chapter } = book

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

    
            return(
            <View>
                <View>
                    <Text style={{padding: 20, fontSize: 20, fontWeight: 'bold'}}>{EnglishName} : {chapter} </Text>
                    <ScrollView>
                        <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                            {
                            arr.map(chapter_Number => {

                                return (
                                    
                                        <TouchableOpacity
                                            key={chapter_Number}
                                            onPress={() => {
                                                data({...bookRender, currentChapter: book.chapter, salt: true})
                                                //currentBook({...bookRender, currentChapter: book.chapter, salt: true})
                                                navigation.navigate('Passage')
                                            }}
                                        >
                                            <View style={{width: 40, marginTop: 10, marginLeft: 10, marginRight: 10, marginBottom: 10, height: 40, borderColor: 'black', borderStyle: 'solid', borderWidth: 2}}>
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
    book: state.verse.setCurrentVerse,
    chapter: state.chapter.setCurrentChapter
})

const mapDispatchToProps = dispatch => ({
    data: book => dispatch(setData(book)),
    currentBook: book => dispatch(setCurrentBook(book))
})

export default connect(mapStateToProps, mapDispatchToProps)(Verses)