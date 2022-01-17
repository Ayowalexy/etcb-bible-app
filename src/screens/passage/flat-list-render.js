import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, FlatList, useWindowDimensions, Platform, TouchableOpacity, Modal, StatusBar, Pressable } from 'react-native'
import  { BibleBooks} from './data';
// import  { Exodus, Leviticus, Numbers } from './data';
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


let curt;
let number;



const FlatListRender = ({item, NextData, NextBook, navigation, fontColor, fontSize}) => {
        const [num, setNum] = useState(0)

        const { width } = useWindowDimensions()

        const flat = useRef()

        const { EnglishName, HebrewName, id, currentChapter } = NextBook

        console.log(NextBook, '================current Chapter==================')
        //const [currentChap, setCurrentChapter] = useState(false)
         const [currentChap, setCurrentChapter] = useState(0)
        const [inc, setInc] = useState('')
        const initailRender = useRef(0)
        const [bibleData, setBibleData] = useState(null)

        
       

         
        number = currentChap
     
        //const [bible, setBible] = useState([Exodus, Leviticus, Numbers])
        const [current, setCurrent] = useState(currentChap)
        const [displayChapter, setDisplayChapter] = useState(1)

        useEffect(() => {
            // const currBook = BibleBooks[EnglishName].find(data => data.chapter === displayChapter)
            
            setBibleData(BibleBooks[EnglishName])
            // setBibleData(currBook.chapter_verses)
       }, [EnglishName])
      
        function usePrevious(value) {
            const ref = useRef()
    
            useEffect(() => {
              ref.current = value
            }, [value])
    
            return ref.current

          }

          const previousState = usePrevious(currentChap)

          useEffect(() => {

            if(initailRender.current === 0){
                initailRender.current = 1
                console.log('Initial Render')
            } else if (initailRender.current === 1){
                initailRender.current = 2
            } else {
                if(previousState > currentChap){
                    console.log('Decreasing')
                    setDisplayChapter(prevState => prevState - 1)
                } else {
                    console.log('Increasing')
                    setDisplayChapter(prevState => prevState + 1)
                }
           }
                
          }, [currentChap])
        

        const viewableItemsChange = useRef(({viewableItems}) => {
            // const ele = viewableItems[0].key
          setCurrentChapter(currentChapter)
        //   setCurrentChapter(Number(ele))
        }).current


        useEffect(() => {
           
            // setBibleData(BibleBooks[EnglishName])
            setDisplayChapter(currentChapter)
            //  const currBook = BibleBooks[EnglishName].find(data => data.chapter === currentChapter)
            // setBibleData(currBook.chapter_verses)
            // console.log(currBook.chapter_verses.length, '==============currBook=========================================')
        },[currentChapter])
        getItemLayout = (data, index) => (
            { length: width, offset: width * index, index }
          )

       

        
        const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current
        return (
            <View>
                            {/* <LinearGradientComponent 
                                        EnglishName={EnglishName} 
                                        HebrewName={HebrewName} 
                                        // currentChapter={displayChapter < 1 ? 1 : displayChapter}
                                        currentChapter={displayChapter}
                                        navigation={navigation}
                            /> */}

                        <FlatList
                            ref={flat}
                            data={bibleData}
                            renderItem={({item}) => <RenderVerse 
                                                        item={item}
                                                        navigation={navigation} 
                                                        fontSize={fontSize} 
                                                        fontColor={fontColor} 
                                                        EnglishName={EnglishName} 
                                                        HebrewName={HebrewName} 
                                                        currentChapter={currentChapter} 
                                                        // currentChapter={currentChap} 
                                                    />}
                            horizontal
                            pagingEnabled
                            keyExtractor={item => item.key}
                            getItemLayout={getItemLayout}
                            initialScrollIndex={currentChapter - 1}
                            // initialScrollIndex={currentChapter}
                            onViewableItemsChanged={viewableItemsChange}
                            viewabilityConfig={viewConfig}
                           
                           
                            // onEndReached={data => {
                            //     if(data){
                            //         Books.find(book => {
                            //             if(book.EnglishName === EnglishName){
                            //                 Books.find(nextBook => {
                            //                     if( nextBook.id === book.id + 1){                                      
                            //                        NextData({...nextBook})
                            //                        setNum(prevState => prevState + 1)
                                                
                            //                     }
                            //                 })
                                            
                            //             }
                            //         })
                            //     }
                            // }}
                            // onEndReachedThreshold={0.5}
                            
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