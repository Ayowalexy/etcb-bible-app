import React, { useState} from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import { connect } from 'react-redux'
import styles from './search.styles'
import { searchText } from '../../redux/search/search.action';
import CheckBox from '@react-native-community/checkbox';

import DATABASE from '../../../database';
import { setSearchHistory } from '../../redux/history/history.action';


// let filters = ['Gospels', 'History', 'Old Testament', 'New Testament', 'Epistles']
let filters = []
const Search = ({search, match, navigation, stateHistory}) => {
    const { text, wordText } = match


    const [word, setWord] = useState('')
    const [oldTestament, setOldTestament] = useState(false)
    const [newTestament, setNewTestament] = useState(false)
    const [history, setHistory] = useState(false)
    const [gospel, setGospel] = useState(false)
    const [epistles, setEpistles] = useState(false)
    const [revelations, setRevelations] = useState(false)

   
    let result = []

    
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
                <Text style={styles.range}>Search range</Text>
                <View style={styles.range_query}>
                    <TouchableOpacity
                        onPress={() => {
                            setOldTestament(!oldTestament)
                            !oldTestament ? filters.push('Old Testament') : filters.splice(filters.indexOf('Old Testament'), 1)
                            
                        }}
                    >
                        <View style={[styles.range_container, {opacity: oldTestament ? 1 : 0.5}]}>
                            <Text style={styles.range_text}>Old Testament</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            setNewTestament(!newTestament)
                            !newTestament ? filters.push('New Testament') : filters.splice(filters.indexOf('New Testament'), 1)
                            
                        }}
                    >
                        <View style={[styles.range_container, {opacity: newTestament ? 1 : 0.5}]}>
                            <Text style={styles.range_text}>New Testament</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        onPress={() => {
                            setHistory(!history)
                            !history ? filters.push('History') : filters.splice(filters.indexOf('History'), 1)
                            
                        }}
                    >
                        <View style={[styles.range_container, {opacity: history ? 1 : 0.5}]}>
                            <Text style={styles.range_text}>History</Text>
                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        onPress={() => {
                            setGospel(!gospel)
                            !gospel ? filters.push('Gospels') : filters.splice(filters.indexOf('Gospels'), 1)
                            
                        }}
                    >
                        <View style={[styles.range_container, {opacity: gospel ? 1 : 0.5}]}>
                            <Text style={styles.range_text}>Gospels</Text>
                        </View>
                    </TouchableOpacity>
                   

                   <TouchableOpacity
                        onPress={() => {
                            setEpistles(!epistles)
                            !epistles ? filters.push('Epistles') : filters.splice(filters.indexOf('Epistles'), 1)
                           
                        }}
                    >
                    <View style={[styles.range_container, {opacity: epistles ? 1 : 0.5}]}>
                            <Text style={styles.range_text}>Epistles</Text>
                        </View>
                   </TouchableOpacity>
                    

                    <TouchableOpacity
                        onPress={() => {
                            setRevelations(!revelations)
                            !revelations ? filters.push('Revelations') : filters.splice(filters.indexOf('Revelations'), 1)
                            
                        }}
                    >
                        <View style={[styles.range_container, {opacity: revelations ? 1 : 0.5}]}>
                            <Text style={styles.range_text}>Revelations</Text>
                        </View>


                    </TouchableOpacity>
                   

                   

                    <TouchableOpacity
                        onPress={() => {
                           
                            function res(){
                                DATABASE.map(chapter => (
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