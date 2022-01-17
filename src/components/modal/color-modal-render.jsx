import React, {useState} from 'react'
import { View, Text, Modal, Button, Pressable, Platform, TouchableOpacity } from 'react-native'
import  Slider from '@ptomasroos/react-native-multi-slider'
import { connect } from 'react-redux'
import { setFontColor } from '../../redux/books/books.actions';
import Ionicons from '@expo/vector-icons/Ionicons'



const ColorModalRender = ({color, setColor, setFontColorDispatch}) => {

        const [border, setBorder] = useState('yellow')
        return(
            <View>
                        <Modal
                            animationType='fade'
                            visible={color}
                            transparent={false}
                            onRequestClose={() => setColor(!color)}
                        >
                            <View style={{
                                flex: 1, 
                                justifyContent: 'center',
                                alignItems: 'center',
                                alignContent: 'center',
                            
                            }}>
                                <View style={{
                                    borderStyle: 'solid',
                                    borderWidth: 2,
                                    borderColor: 'black',
                                    borderRadius: 10,
                                    width: 250,
                                    height: 250,
                                    
                                }}>
                                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{fontSize: 17, marginBottom: 30}}>Color</Text>
                                         
                                        <View style={{flex: 1, width: 150, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around', alignContent: 'space-around', }}> 
                                            <Pressable 
                                            onPress={() => {
                                                setBorder('red')
                                               
                                            }}
                                            >
                                                <View style={{
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: 20,
                                                    backgroundColor: 'red',
                                                    borderColor: border === 'red' ? 'yellow' : 'red',
                                                    borderStyle: 'solid',
                                                    borderWidth: 2,
                                                }}></View>
                                            </Pressable>
                                            <Pressable 
                                            onPress={() => {
                                                setBorder('blue')
                                                
                                            }}
                                            >
                                                <View style={{
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: 20,
                                                    backgroundColor: 'blue',
                                                    borderColor: border === 'blue' ? 'yellow' : 'blue',
                                                    borderStyle: 'solid',
                                                    borderWidth: 2,
                                                }}></View>
                                            </Pressable>
                                            <Pressable 
                                            onPress={() => {
                                                setBorder('green')
                                                
                                            }}
                                            >
                                                <View style={{
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: 20,
                                                    backgroundColor: 'green',
                                                    borderColor: border === 'green' ? 'yellow' : 'green',
                                                    borderStyle: 'solid',
                                                    borderWidth: 2,
                                                }}></View>
                                            </Pressable>
                                            <Pressable 
                                            onPress={() => {
                                                setBorder('purple')
                                                
                                            }}
                                            >
                                                <View style={{
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: 20,
                                                    backgroundColor: 'purple',
                                                    borderColor: border === 'purple' ? 'yellow' : 'purple',
                                                    borderStyle: 'solid',
                                                    borderWidth: 2,
                                                }}></View>
                                            </Pressable>
                                            <Pressable 
                                            onPress={() => {
                                                setBorder('teal')
                                               
                                            }}
                                            >
                                                <View style={{
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: 20,
                                                    backgroundColor: 'teal',
                                                    borderColor: border === 'teal' ? 'yellow' : 'teal',
                                                    borderStyle: 'solid',
                                                    borderWidth: 2,
                                                }}></View>
                                            </Pressable>
                                            <Pressable 
                                            onPress={() => {
                                                setBorder('black')
                                                
                                            }}
                                            >
                                                <View style={{
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: 20,
                                                    backgroundColor: 'black',
                                                    borderColor: border === 'black' ? 'yellow' : null,
                                                    borderStyle: 'solid',
                                                    borderWidth: 2,
                                                    
                                                }}></View>
                                            </Pressable>
                                            <Pressable 
                                            onPress={() => {
                                                setBorder('white')
                                                
                                            }}
                                            >
                                                <View style={{
                                                    width: 40,
                                                    height: 40,
                                                    borderRadius: 20,
                                                    backgroundColor: 'white',
                                                    borderColor: border === 'white' ? 'yellow' : null,
                                                    borderStyle: 'solid',
                                                    borderWidth: 2,
                                                    
                                                }}></View>
                                            </Pressable>
                                            <Pressable>
                                                <View>
                                               
                                                    <View style={{}}>

                                                        <TouchableOpacity
                                                            onPress={() => {
                                                                setColor('')
                                                            }}
                                                        >
                                                            <Ionicons name='close' size={35} color='black' />
                                                        </TouchableOpacity>
                                                    
                                                    </View>
                                                
                                                </View>
                                            </Pressable>
                                        </View>
                                        <Button 
                                            title='SET'
                                            color='black'
                                            onPress={() => {
                                                setFontColorDispatch(border)
                                                setColor(!color)
                                              
                                            }
                                            }
                                        />
                                    </View>
                                
                                </View>
                            </View>
                        </Modal>
                    </View>
                    
        )
}

const mapDispatchToProps = dispatch => ({
    setFontColorDispatch: color => dispatch(setFontColor(color))
})

export default connect(null, mapDispatchToProps)(ColorModalRender)