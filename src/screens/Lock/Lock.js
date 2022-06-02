import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Colors } from '../../assets/Colors';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux'



const LockScreen = ({navigation, user}) => {
    console.log(user, '============================')
    return (
        <View style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center'
        }}>
            <View
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: Colors.SECONDARY,
                    borderRadius: 50,
                    height: 100,
                    width: 100,
                    borderWidth: 2,
                    borderColor: '#E39121',
                    marginTop: 150,
                    justifyContent: 'center'
                }}
            >
                <Ionicons 
                    name="lock-closed"
                    color={Colors.PRIMARY}
                    size={60}
                />

            </View>

            <View>
                <View style={{
                        width: '90%',
                        marginTop: 60
                }}>
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: 25,
                        color: Colors.TEXT
                        }}>Subscription Required</Text>
                    <Text  style={{
                        textAlign: 'center',
                        fontSize: 16,
                    marginTop: 20
                        }}>To access this part of ETB <Text>{"\n"}</Text>
                            <Text style={{fontWeight: 'bold'}}>Please</Text> Click The Button Below To Proceed
                    </Text>
                </View>
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate('Donate')}
                style={{
                    width: '90%',
                    height: 60,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 15,
                    borderWidth: 2,
                    borderColor: '#E39121',
                    position: 'absolute',
                    bottom: 0,
                    top: Dimensions.get('window').height - 80,
                    backgroundColor: Colors.SECONDARY
                }}
            >
                <Text style={{
                    color: Colors.PRIMARY,
                    fontWeight: 'bold',
                    fontSize: 17
                }}>JOIN</Text>
            </TouchableOpacity>

            
        </View>
    )
}

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(LockScreen)