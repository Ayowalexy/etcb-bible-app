import React, { useState} from 'react';
import { View, Text, Alert, Modal, TouchableOpacity} from 'react-native';
import { Colors } from '../../assets/Colors';
import { Ionicons } from '@expo/vector-icons';


const ModalPrompt = ({navigation,  modalVisible, setModalVisible}) => {
    // const [modalVisible, setModalVisible] = useState(trialModal)
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            setModalVisible(!modalVisible);
            }}  
        
        >
            <View
                style={ {
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 22,
                    width: '100%',
                    alignContent: 'center'
            }}
            >
                <View
                    style={{
                        height: 200,
                        backgroundColor: Colors.PRIMARY,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: 20,
                        paddingRight: 20,
                        borderWidth: 2,
                        borderColor: Colors.SECONDARY,
                        borderRadius: 10

                    }}
                >
                    <Ionicons 
                        name='ios-information-circle'
                        color={Colors.SECONDARY}
                        size={40}
                    
                    />
                    <Text style={{textAlign: 'center', fontSize: 15}}>You are reading one of the free books <Text>{"\n"}</Text>Get full access now</Text>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        marginTop: 50
                    }}>
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 40,
                                width: 120,
                                margin: 10,
                                backgroundColor: Colors.TEXT,
                            }}
                        >
                            <Text style={{
                                color: Colors.PRIMARY,
                                fontWeight: 'bold'
                            }}>CANCEL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity

                        onPress={() => {
                            setModalVisible(false)
                            navigation.navigate('Donate')
                        }}
                        
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 40,
                            width: 120,
                            margin: 10,
                            backgroundColor: Colors.SECONDARY,
                        }}
                        >
                            <Text style={{
                                color: Colors.PRIMARY,
                                fontWeight: 'bold'
                            }}>PROCEED</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        </Modal>
    )
}

export default ModalPrompt