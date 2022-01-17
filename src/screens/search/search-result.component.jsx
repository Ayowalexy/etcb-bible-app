import React from 'react'
import { View, Text, ScrollView, TouchableOpacity, Platform, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { LinearGradient } from 'expo-linear-gradient';
import { setCurrentBook, setData } from '../../redux/books/books.actions';


   

const SearchResult = ({result, navigation, setCurrentBook, data}) => {
    const { text, wordText } = result
    return(
                <View style={{marginTop: Platform.OS === 'ios' ? 40 : StatusBar.currentHeight}}>
                    <LinearGradient
                        colors={['#171C24', '#fff']}
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        style={{height: 60}}
                    >
                        <View>
                        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold', padding: 15}}> 
                            Showing {`${text.length}`} Results
                        </Text>
                        </View>
                    </LinearGradient>

                <ScrollView style={{marginBottom: 70, marginLeft: 10, marginRight: 10}}>
                    {
                        text.map((element, idx) => (
                            <TouchableOpacity key={idx}
                            activeOpacity={0.5}
                            onPress={() => {
                                // setCurrentBook({
                                //     EnglishName: element.EnglishName,
                                //     HebrewName: element.HebrewName,
                                //     id: element.id,
                                //     currentChapter: element.chapter,
                                //     chapters: element.chapter_Number,
                                //     salt: true

                                // })

                                data({
                                    EnglishName: element.EnglishName,
                                    HebrewName: element.HebrewName,
                                    id: element.id,
                                    currentChapter: element.chapter,
                                    chapters: element.chapter_Number,
                                    salt: true
                                })
                                navigation.navigate('Passage')
                            }}
                            >
                                <View style={{marginBottom: 20}}>
                                    <Text style={{fontWeight: 'bold', fontSize: 25}}>
                                        {`${element.EnglishName} ${element.chapter}:${element.verse_Number}`}
                                    </Text>
                                    <Text style={{fontSize: 15, fontStyle: 'italic', marginBottom: 5}}>
                                        {element.HebrewName}
                                    </Text>
                                    <Text style={{fontSize: 16}}>{element.verse}</Text>
                                    
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </ScrollView>
            </View>
    )
}

const mapStateToProps = state => ({
    result: state.search.text
})

const mapDispatchToProps = dispatch => ({
    data: book => dispatch(setData(book)),
    setCurrentBook: book => dispatch(setCurrentBook(book))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)