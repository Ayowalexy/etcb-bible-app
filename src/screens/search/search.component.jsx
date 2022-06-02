import React, { useState, useEffect} from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'

import { connect } from 'react-redux'
import styles from './search.styles'
import { searchText } from '../../redux/search/search.action';
import CheckBox from '@react-native-community/checkbox';

import DATABASE from '../../../database';
import { setSearchHistory } from '../../redux/history/history.action';
import { BibleBooks } from '../passage/data';
import Books from '../../../Books';

// let filters = ['Gospels', 'History', 'Old Testament', 'New Testament', 'Epistles']
let filters = []
let useBook = [];
const Search = ({search, match, navigation, stateHistory}) => {
    const { text, wordText } = match


    const [word, setWord] = useState('')
    const [oldTestament, setOldTestament] = useState(false)
    const [newTestament, setNewTestament] = useState(false)
    const [history, setHistory] = useState(false)
    const [gospel, setGospel] = useState(false)
    const [epistles, setEpistles] = useState(false)
    const [literature, setLiterature] = useState(false)

   
    let result = []

    // useEffect(() => {

    //     console.log(filters)
    //     if(filters.length){
    //         filters.forEach(element => {
    //             Books.find(book => {
    //                 if(book.tags.includes(element)){

    //                     useBook.push(BibleBooks[book.EnglishName])                        
    //                 }
    //             })
    //         })
    //     } 
    // }, [filters.length])

    console.log(useBook.length)
    
    // console.log(filters, 'filter')

    
    return (
        <View style={styles.container}>
            <View style={{marginTop: 50}}>
                <Text style={styles.etb}>ETB</Text>
            </View>

            <View style={styles.search}>
                <TextInput 
                    placeholder='Enter search text'
                     onChangeText={word => setWord(word)}
                     defaultValue={text}
                />
            </View>

            <View>
                <Text style={styles.range}>Search range(select one at least)</Text>
                <View style={styles.range_query}>
                    <TouchableOpacity
                        onPress={() => {
                            setOldTestament(!oldTestament)
                            filters.includes('Old Testament') ? filters.splice(filters.indexOf('Old Testament'), 1) : filters.push('Old Testament')
                            if(filters.includes('Old Testament')){
                                filters.forEach(element => {
                                    Books.find(book => {
                                        if(book.tags.includes(element)){
                                            useBook.push({
                                                tag: 'Old Testament',
                                                EnglishName: book.EnglishName,
                                                HebrewName: book.HebrewName,
                                                chapters: BibleBooks[book.EnglishName]
                                            })                        
                                        }
                                    })
                                })
                                console.log(useBook[0].tag)
                            } else {
                                useBook = []
                            }

                                                        
                        }}
                    >
                        <View style={[styles.range_container, {opacity: oldTestament ? 1 : 0.5}]}>
                            <Text style={styles.range_text}>Old Testament</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            setNewTestament(!newTestament)
                            filters.includes('New Testament') ? filters.splice(filters.indexOf('New Testament'), 1) : filters.push('New Testament')
                            if(filters.includes('New Testament')){
                                filters.forEach(element => {
                                    Books.find(book => {
                                        if(book.tags.includes(element)){
                                            useBook.push({
                                                tag: 'New Testament',
                                                EnglishName: book.EnglishName,
                                                HebrewName: book.HebrewName,
                                                chapters: BibleBooks[book.EnglishName]
                                            })                        
                                        }
                                    })
                                })
                                console.log(useBook[0].tag)
                            } else {
                                useBook = []
                            }
                            
                            
                        }}
                    >
                        <View style={[styles.range_container, {opacity: newTestament ? 1 : 0.5}]}>
                            <Text style={styles.range_text}>New Testament</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        onPress={() => {
                            setHistory(!history)
                            filters.includes('History') ? filters.splice(filters.indexOf('History'), 1) : filters.push('History')
                            if(filters.includes('History')){
                                filters.forEach(element => {
                                    Books.find(book => {
                                        if(book.tags.includes(element)){
                                            useBook.push({
                                                tag: 'History',
                                                EnglishName: book.EnglishName,
                                                HebrewName: book.HebrewName,
                                                chapters: BibleBooks[book.EnglishName]
                                            })                        
                                        }
                                    })
                                })
                                console.log(useBook[0].tag)
                            } else {
                                useBook = []
                            }
                            
                        }}
                    >
                        <View style={[styles.range_container, {opacity: history ? 1 : 0.5}]}>
                            <Text style={styles.range_text}>History</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        onPress={() => {
                            setGospel(!gospel)
                            filters.includes('Gospels') ? filters.splice(filters.indexOf('Gospels'), 1) : filters.push('Gospels')
                            if(filters.includes('Gospels')){
                                filters.forEach(element => {
                                    Books.find(book => {
                                        if(book.tags.includes(element)){
                                            useBook.push({
                                                tag: 'Gospels',
                                                EnglishName: book.EnglishName,
                                                HebrewName: book.HebrewName,
                                                chapters: BibleBooks[book.EnglishName]
                                            })                        
                                        }
                                    })
                                })
                                console.log(useBook[0].tag)
                            } else {
                                useBook = []
                            }
                            
                            
                        }}
                    >
                        <View style={[styles.range_container, {opacity: gospel ? 1 : 0.5}]}>
                            <Text style={styles.range_text}>Gospels</Text>
                        </View>
                    </TouchableOpacity>
                   

                   <TouchableOpacity
                        onPress={() => {
                            setEpistles(!epistles)
                            filters.includes('Epistles') ? filters.splice(filters.indexOf('Epistles'), 1) : filters.push('Epistles')
                            if(filters.includes('Epistles')){
                                filters.forEach(element => {
                                    Books.find(book => {
                                        if(book.tags.includes(element)){
                                            useBook.push({
                                                tag: 'Epistles',
                                                EnglishName: book.EnglishName,
                                                HebrewName: book.HebrewName,
                                                chapters: BibleBooks[book.EnglishName]
                                            })                        
                                        }
                                    })
                                })
                                console.log(useBook[0].tag)
                            } else {
                                useBook = []
                            }
                           
                        }}
                    >
                    <View style={[styles.range_container, {opacity: epistles ? 1 : 0.5}]}>
                            <Text style={styles.range_text}>Epistles</Text>
                        </View>
                   </TouchableOpacity>
                    

                    <TouchableOpacity
                        onPress={() => {
                            setLiterature(!literature)
                            filters.includes('Literature') ? filters.splice(filters.indexOf('Literature'), 1) : filters.push('Literature')
                            if(filters.includes('Literature')){
                                filters.forEach(element => {
                                    Books.find(book => {
                                        if(book.tags.includes(element)){
                                            useBook.push({
                                                tag: 'Literature',
                                                EnglishName: book.EnglishName,
                                                HebrewName: book.HebrewName,
                                                chapters: BibleBooks[book.EnglishName]
                                            })                        
                                        }
                                    })
                                })
                                console.log(useBook[0].tag)
                            } else {
                                useBook = []
                            }
                            
                        }}
                    >
                        <View style={[styles.range_container, {opacity: literature ? 1 : 0.5}]}>
                            <Text style={styles.range_text}>Literature</Text>
                        </View>


                    </TouchableOpacity>
                   

                   

                    <TouchableOpacity
                        onPress={() => {
                           
                            function res(){
                                useBook.map(chapter => (
                                    chapter.chapters.map(matchText => (
                                        matchText.chapter_verses.filter(matchVerse => {
                                           
                                             if(matchVerse.verse.includes(word) && filters.includes(chapter.tag)){
        
                                                 result.push({...matchVerse, 
                                                    chapter: matchText.chapter, 
                                                    EnglishName: chapter.EnglishName,
                                                    HebrewName: chapter.HebrewName,
                                                    id: chapter.id,
                                                    chapter_Number: chapter.chapter_Number
                                                })
                                             } else if (matchVerse.verse.includes(word)){
                                                 
                                                result.push({...matchVerse, 
                                                    chapter: matchText.chapter, 
                                                    EnglishName: chapter.EnglishName,
                                                    HebrewName: chapter.HebrewName,
                                                    id: chapter.id,
                                                    chapter_Number: chapter.chapter_Number
                                                })
                                             }
                                            
                                        })
                                    ))
                                ))
                            }
                            res()
                         
                            if (word){
                                search({text: result, wordText: word})
                               console.log(word)

                                stateHistory({
                                    search: word
                                })
                                return navigation.navigate('Search Result')
                                }
                            }

                          
                            
                   
                    }

                        
                    >
                        <View style={{width: 100, height: 40, marginTop: 90, marginLeft: 100}}>
                                <View style={{backgroundColor: 'white',  borderRadius: 30, flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{fontWeight: 'bold', fontSize: 18}}>Find</Text>
                                </View>
                        </View>
                    </TouchableOpacity>
                </View>

                
            </View>

           
        </View>
       
    )
    
}


const mapDispatchToProps = dispatch => ({
    search: text => dispatch(searchText(text)),
    stateHistory: text => dispatch(setSearchHistory(text))
})

const mapStateToProps = state => ({
    match: state.search.text
})


export default connect(mapStateToProps, mapDispatchToProps)(Search)