import React, { useState, useEffect} from 'react';
import { View, Text, Alert, Modal, TouchableOpacity} from 'react-native';
import { Colors } from '../../assets/Colors';
import { Ionicons } from '@expo/vector-icons';
import { day } from './daily'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { setCurrentId } from '../../redux/user/user.action';
import ShareDaily from './ShareDaily';
import { setBookMark } from '../../redux/bookmark/bookmark.action';

const ModalDaily = ({navigation,  modalVisible, setModalVisible, setId, user, bookmark}) => {
    // const [modalVisible, setModalVisible] = useState(trialModal)
    const [todayId, setTodayID] = useState(1)
    // const id = useSelector( state => state.currentUser.id);
 console.log(user, '====-00===')
    useEffect(() => {
        const today = new Date().getDay();
        console.log(today, '000')
        if(today > user.day){
            const newD = Number(user.id + 1)
            console.log(newD)

            setTodayID(newD)
            setId({
                id: newD,
                day: today
            })

        } else{
            setTodayID(user.id)

        }
    }, [])

    console.log(todayId)
    const useBook = day.find(verse => verse.id === todayId)

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
                    // alignContent: 'center'
                }}
            >
                <View
                    style={{
                        height: 300,
                        backgroundColor: Colors.PRIMARY,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '90%',
                        paddingLeft: 20,
                        paddingRight: 20,
                        borderWidth: 2,
                        borderColor: Colors.BORDER,
                        borderRadius: 10

                    }}
                >
                    <Ionicons 
                        name='ios-information-circle'
                        color={Colors.SECONDARY}
                        size={40}
                    
                    />
                     <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
                        {useBook.book}
                    </Text>
                    <Text style={{textAlign: 'center', fontSize: 15}}>
                        {useBook.verse}
                    </Text>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        flexWrap: 'wrap',
                        marginTop: 50
                    }}>
                        <ShareDaily 
                            setModalVisible={setModalVisible}
                            message={`${useBook.book.concat("\n\n")}${useBook.verse.concat("\n\n(End Time Bible, ETB)")}`}
                         />
                        
                        <TouchableOpacity
                            onPress={() =>setModalVisible(false)}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 40,
                                width: 120,
                                margin: 10,
                                flexGrow: 1,
                                backgroundColor: Colors.CANCEL,
                            }}
                        >
                            <Text style={{
                                color: Colors.PRIMARY,
                                fontWeight: 'bold'
                            }}>CANCEL</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        </Modal>
    )
}

const mapStateToProps = state => ({
     user: state.bookId.currentID
})


const mapDispatchToprops = dispatch => ({
    setId: id => dispatch(setCurrentId(id)),
    bookmark: book => dispatch(setBookMark)
})

export default connect(mapStateToProps, mapDispatchToprops)(ModalDaily)