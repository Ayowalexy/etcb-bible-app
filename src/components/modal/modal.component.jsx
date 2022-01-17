import React, {useState} from 'react'
import { View, Text, Modal, Button, TouchableOpacity, Platform } from 'react-native'
import  Slider from '@ptomasroos/react-native-multi-slider'
import { connect } from 'react-redux'
import { setFontSize } from '../../redux/books/books.actions';
import Ionicons from '@expo/vector-icons/Ionicons'



const ModalRender = ({modal, setModal, fontSizeDispatch}) => {
    const [fontSize, setFontSize] = useState(15)
   
        return(
            <View>
                        <Modal
                            animationType='fade'
                            visible={modal}
                            transparent={false}
                            onRequestClose={() => setModal(!modal)}
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
                                        <Text style={{fontSize: fontSize}}>Text</Text>
                                         <Slider 
                                            sliderLength={200}
                                            min={10}
                                            max={40}
                                            onValuesChange={(value) => setFontSize(...value)}
                                                                
                                        />
                        
                                       
                                        <Button 
                                            title='SET'
                                            color='black'
                                            onPress={() => {
                                                setModal(!modal)
                                                fontSizeDispatch(fontSize)
                                            }
                                            }
                                        />

                                    {
                                        Platform.OS == 'ios' ?
                                        <View style={{alignSelf: 'center', paddingTop: 30, marginBottom: -40}}>

                                            <TouchableOpacity
                                                onPress={() => {
                                                    setModal(false)
                                                }}
                                            >
                                                <Ionicons name='close' size={35} color='black' />
                                            </TouchableOpacity>
                                        
                                        </View>
                                        : null
                                    }
                                    </View>
                                
                                </View>
                            </View>
                        </Modal>
                    </View>
                    
        )
}

const mapDispatchToProps = dispatch => ({
    fontSizeDispatch: size => dispatch(setFontSize(size))
})

export default connect(null, mapDispatchToProps)(ModalRender)