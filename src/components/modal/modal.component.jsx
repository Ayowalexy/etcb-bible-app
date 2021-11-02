import React, {useState} from 'react'
import { View, Text, Modal, Button } from 'react-native'
import  Slider from '@ptomasroos/react-native-multi-slider'
import { connect } from 'react-redux'
import { setFontSize } from '../../redux/books/books.actions';



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