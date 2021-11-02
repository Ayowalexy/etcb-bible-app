import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { deleteBookmark } from '../../redux/bookmark/bookmark.action';
import Ionicons from '@expo/vector-icons/Ionicons'


const Bookmarks = ({bookmark, delBookmark, navigation}) => {
    const { book } = bookmark
  
    return (
        <ScrollView style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Bookmarks</Text>
            </View>
            <View style={{marginLeft: 10, marginRight: 10}}>
              {
                 
                   book.map((element, idx) => {
                    return (
                        <View key={idx} style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 0.7,
                            borderStyle: 'solid',
                            flex: 1
                        }}>
                            <Text style={{fontSize: 16, marginTop: 20}}>{`${element.EnglishName} ${element.chapter}:${element.verse_number}; ${element.verse}`}</Text>
                            <TouchableOpacity
                                style={{
                                    alignSelf: 'flex-end',
                                    marginBottom: 10
                                }}

                                onPress={() => {
                                    delBookmark(element)
                                    if(!book.length){
                                        navigation.navigate('Profile')
                                    }
                                }}
                            >
                                <Ionicons name='trash' size={25} color='black' />
                            </TouchableOpacity>
                        </View>
                    )
                }) 

              }
              
            </View>
         </ScrollView>
    )
   
}

const mapStateToProps = state => ({
    bookmark: state.bookmark
})

const mapDispatchToProps = dispatch => ({
    delBookmark: book => dispatch(deleteBookmark(book))
})
export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks)