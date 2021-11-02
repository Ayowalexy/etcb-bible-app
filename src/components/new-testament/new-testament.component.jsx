import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, useWindowDimensions } from 'react-native'
import { connect } from 'react-redux'
import { setCurrentChapter } from '../../redux/chapter/chapter.actions';
import { NewTestamentBooks } from '../../../Books';



const NewTestament = ({navigation, setCurrentChapterRender}) => {

    
    const { width, height } = useWindowDimensions()
    return(
        <ScrollView>
           <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
           {
                NewTestamentBooks.map(book => {
                    return (
                        <TouchableOpacity
                            key={book.id}
                            onPress={() => {
                                navigation.navigate('Chapters')
                               
                                setCurrentChapterRender({
                                    EnglishName: book.EnglishName,
                                    chapters: book.chapters
                                })
                                
                            }}
                        >
                            <View key={book.id} style={width < 350 ? styles.box_second: styles.box}>
                                    <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}><Text style={width < 350 ? styles.text_second: styles.text}>{book.EnglishName}</Text></View>
                             </View>
                        </TouchableOpacity>
                    )
                })
            }
           </View>
        </ScrollView>
    )
        }

        const styles = StyleSheet.create({
            box: {marginTop: 20,
                 marginLeft: 20, 
                 width: 150, 
                 height: 50, 
                 borderRadius: 50, 
                 borderColor: 'black', 
                 borderWidth: 2, 
                 borderStyle:'solid'},
            box_second: {
                marginTop: 20,
                 marginLeft: 20, 
                 width: 100, 
                 height: 50, 
                 borderRadius: 50, 
                 borderColor: 'black', 
                 borderWidth: 2, 
                 borderStyle:'solid'
            }, 
            text :{
                fontSize: 18
            }, text_second: {
                fontSize: 12
            }
        })

const mapDispatchToProps = dispatch => ({
    setCurrentChapterRender: chapter => dispatch(setCurrentChapter(chapter))

})

export default connect(null, mapDispatchToProps)(NewTestament)