import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, useWindowDimensions, TouchableOpacity, Modal, Pressable } from 'react-native'
import EXODUS, { Exodus, Leviticus, Numbers } from './data';
import LinearGradientComponent from '../../components/linear-gradient/linear-gradient.component';
import { connect } from 'react-redux';
import { setData } from '../../redux/books/books.actions';
import Books from '../../../Books';
import styles from './passage';
import { VerseComponent } from './scroll-passage';
import ShareVerse from '../../components/share/share-verse.component';
import CopyVerse from '../../components/verse-copy/verse-copy.component';
import PromptsModal from '../../components/modal/prompts-modal.component';
import { setBookMark } from '../../redux/bookmark/bookmark.action';
import { setHighlight } from '../../redux/highlight/highlight.actions';
import Ionicons from '@expo/vector-icons/Ionicons';
import RenderVerse from './render-flat-list';


let number;
    const FlatListRender = ({item, NextData, NextBook, navigation, fontColor, fontSize}) => {
        const [num, setNum] = useState(0)

        const flat = useRef()

        const { EnglishName, HebrewName, id, currentChapter } = NextBook
        //const [currentChap, setCurrentChapter] = useState(false)
         const [currentChap, setCurrentChapter] = useState(0)
       
        number = currentChap
         useEffect(() => {
             (() => {
                console.log(currentChap)
             })()
         }, [currentChap])

        
        const [bible, setBible] = useState([Exodus, Leviticus, Numbers])
        const [current, setCurrent] = useState(currentChap)

        const viewableItemsChange = useRef(({viewableItems}) => {
            const ele = viewableItems[0].key
          setCurrentChapter(Number(ele))
           //setCurrentChapter(prevState => )
           
           
            //setCurrentChapter(Number(ele) + currentChapter)
        }).current

        const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current
        return (
            <View>
                            <LinearGradientComponent 
                                        EnglishName={EnglishName} 
                                        HebrewName={HebrewName} 
                                        currentChapter={currentChap}
                                        navigation={navigation}
                            />
                        <FlatList
                            ref={flat}
                            data={bible[num]}
                            renderItem={({item}) => <RenderVerse item={item} navigation={navigation} fontSize={fontSize} fontColor={fontColor} EnglishName={EnglishName} HebrewName={HebrewName} currentChapter={currentChap} />}
                            horizontal
                            pagingEnabled
                            initialScrollIndex={1}
                            onViewableItemsChanged={viewableItemsChange}
                            viewabilityConfig={viewConfig}
                            onEndReached={data => {
                                if(data){
                                    Books.find(book => {
                                        if(book.EnglishName === EnglishName){
                                            Books.find(nextBook => {
                                                if( nextBook.id === book.id + 1){                                      
                                                   NextData({...nextBook})
                                                   setNum(prevState => prevState + 1)
                                                
                                                }
                                            })
                                            
                                        }
                                    })
                                }
                            }}
                            onEndReachedThreshold={0.5}
                            
                        />
               
                    
            </View>
        )
    }

    const mapDispatchToProps = dispatch => ({
        NextData: book => dispatch(setData(book)),
        bookmark: book => dispatch(setBookMark(book)),
        hightlight: verse => dispatch(setHighlight(verse))
    })

    const mapStateToProps = state => ({
        NextBook: state.book.book,
        fontSize: state.book.fontSize,
        fontColor: state.book.fontColor
    })

    export default connect(mapStateToProps, mapDispatchToProps)(FlatListRender)