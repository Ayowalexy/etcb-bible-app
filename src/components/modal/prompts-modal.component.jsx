import React, {useState} from 'react'
import { View, Text, Modal, TouchableOpacity, Pressable, Platform, Dimensions } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { connect } from 'react-redux'
import { setBookMark } from '../../redux/bookmark/bookmark.action';
import { setHighlight } from '../../redux/highlight/highlight.actions';
import ShareVerse from '../share/share-verse.component';
import CopyVerse from '../verse-copy/verse-copy.component';


// let bookmarks = []
// let verse;
let num;

const PromptsModal = ({modal, setModal, highlight, bookmark, bookmarks, verse}) => {
    return (
        <Modal
        animationType='fade'
        visible={modal}
        transparent={true}
        onRequestClose={() => {
            bookmarks = bookmarks.splice()
            setModal(!modal)

        }
    }
>
    <View style={{display:'flex', justifyContent: 'center', alignItems: 'center', height: Dimensions.get('window').height}}>
        <View style={{width: 270,backgroundColor: 'white', height: 200, 
        borderColor: 'black', borderStyle: 'solid', borderWidth: 2}}>
            <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap',}}>
                <TouchableOpacity
                    onPress={() => {
                                    
                                        bookmark(...bookmarks)
                                            setModal(!modal)
                                    }
                                }
                >
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View>
                            <Ionicons name='bookmark' color='black' size={25} />
                    </View>
                        <View>
                            <Text>Bookmark</Text>
                        </View>
                    </View>
                </TouchableOpacity>

               
                    <ShareVerse message={verse} />
               
                
                        <CopyVerse verse={verse} setModal={setModal} />
                    
                    
                
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Ionicons name='book' color='black' size={25} />
                    <Text>Note</Text>
                </View>
            </View>
            <View>
                <View style={{marginTop: -80}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontWeight: 'bold'}}>Highlight</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
                        <Pressable
                            onPress={() => {
                                setBackgroundColor('red')
                                setNumber(num)
                                setModal(false)
                            }
                        }
                        >
                            <View style={{width: 20, height: 20, borderRadius: 20, backgroundColor: 'red'}}></View>
                        </Pressable>
                        <Pressable
                               onPress={() => {
                                setBackgroundColor('yellow')
                                setNumber(num)
                                setModal(false)
                            }
                        }
                        >
                            <View style={{width: 20, height: 20, borderRadius: 20, backgroundColor: 'yellow'}}></View>
                        </Pressable>
                        <Pressable
                               onPress={() => {
                                setBackgroundColor('green')
                                setNumber(num)
                                setModal(false)
                            }
                        }
                        >
                            <View style={{width: 20, height: 20, borderRadius: 20, backgroundColor: 'green'}}></View>
                        </Pressable>
                        <Pressable
                              onPress={() => {
                                setBackgroundColor('purple')
                                setNumber(num)
                                setModal(false)
                            }
                        }
                        >
                            <View style={{width: 20, height: 20, borderRadius: 20, backgroundColor: 'purple'}}></View>
                        </Pressable>
                        <Pressable
                             onPress={() => {
                                setBackgroundColor('teal')
                                setNumber(num)
                                setModal(false)
                            }
                        }
                        >
                            <View style={{width: 20, height: 20, borderRadius: 20, backgroundColor: 'teal'}}></View>
                        </Pressable>
                    </View>
                </View>
                
            </View>

           
        </View>
    </View>
</Modal>
    )
}

const mapDispatchToProps = dispatch => ({
    bookmark: book => dispatch(setBookMark(book)),
    highlight: verse => dispatch(setHighlight(verse))
})

export default connect(null, mapDispatchToProps)(PromptsModal)
