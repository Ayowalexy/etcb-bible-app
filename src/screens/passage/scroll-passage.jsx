import React, { useState} from 'react'
import { View, Text, ScrollView, Modal, TouchableOpacity, Pressable, useWindowDimensions } from 'react-native'
import styles from './passage'
import DATABASE from '../../../database'
import { connect } from 'react-redux'
import { setCurrentBook, setData } from '../../redux/books/books.actions';
import { setBookMark } from '../../redux/bookmark/bookmark.action';
import PromptsModal from '../../components/modal/prompts-modal.component'
import ShareVerse from '../../components/share/share-verse.component';
import CopyVerse from '../../components/verse-copy/verse-copy.component';
import { setHighlight } from '../../redux/highlight/highlight.actions';
import Ionicons from '@expo/vector-icons/Ionicons';



let userColorNew = 'red'
const VerseComponent = ({verse_Number,part,msg, colored, color = 'black', verse_color, verse, data, navigation, fontSize, fontColor, refer, heading, comment, before_verse, after_verse, GOD_SAID}) => {
    console.log('coloredS')
    if(color && verse_color){
        userColorNew = verse_color
    } else if (verse_color || color){
        // userColorNew = 'black'
    } else {
        userColorNew = 'black'
    }

    // console.log(color, verse_color)

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

    
    const { width } = useWindowDimensions()
    return (
        <View style={{
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            borderBottomStyle: 'solid',
            // marginBottom: 5
        }}>
            { heading !== null || heading === "" ? <Text style={{fontWeight: 'bold', fontSize: 17, padding: 10, marginBottom: -20}}>{heading}</Text> : null}
            { msg !== null ? <Text style={{fontWeight: 'bold',textAlign: "center", fontSize: 17, padding: 10, marginBottom: -20}}>{msg}</Text> : null}
        <View style={{flex: 1, marginTop: 20, flexDirection: 'row',  width: width - 20, marginBottom: 0}}>
            <Text style={[styles.chapter_number, {fontSize: fontSize}]}>{verse_Number}</Text>
            <Text style={[styles.chapter_verse, {fontSize: fontSize, color: verse_color ? verse_color : color}]}>
               { verse.includes('“ ') ? 
               <Text>
                   { verse.includes('“ ') ? <Text style={{color:'black'}}>{verse.slice(0, verse.indexOf('“ '))}</Text> : null}
                   {/* <Text  style={{color: part === "OT"  ? 'blue': 'red'}}> */}
                   <Text  style={{color: c_1}}>
                       {verse.includes('“ ') ? verse.slice(verse.indexOf('“ '), verse.indexOf('”')) : 
                       verse.slice(0, verse.indexOf('”'))}
                    </Text>
                   <Text style={{color:'black'}}>{verse.slice(verse.indexOf('”'))}</Text>
                </Text>
                : verse }
               </Text>
        </View>
        <View  style={{
            //    flexDirection: 'row'
               
           }}>
        {
           refer  ? 
           <View style={{
            marginTop: -15,
            marginBottom: -20,
            padding: 15
           }}>
               <View style={{
               flexDirection: 'row'
               
           }}>

               {/* {
                   refer.map(reference => (
                       <Pressable
                            // onPress={() => {
                            //     data({...reference})
                            //     //navigation.navigate('Passage')
                            // }}
                       > */}
                        <Text style={{fontStyle: 'italic', 
                            fontSize: 13, marginRight: 10, textDecorationLine: 'underline',
                            textDecorationColor: 'red'}}>
                            {refer}
                        </Text>
                        {/* textDecorationColor: 'red'}}>{`${reference.EnglishName} ${reference.currentChapter}:${reference.verse}`}</Text> */}
                       {/* </Pressable>
                   ))
               }
                */}
                
            </View>
           
           </View> :
             null
       }
               <Text style={{fontStyle: 'italic', fontSize: 13}}>{comment}</Text>

        </View>
        
       
    </View>
)
    }



const mapDispatchToProps = dispatch => ({
    data: book => dispatch(setData(book))
})

export default connect(null, mapDispatchToProps)(VerseComponent)