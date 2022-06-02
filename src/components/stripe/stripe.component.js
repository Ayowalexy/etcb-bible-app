import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button, Alert, ActivityIndicator, TouchableOpacity} from 'react-native'
import { API_URL, update } from '../payment-screen/api-fetch';
import { CardField, useConfirmPayment } from '@stripe/stripe-react-native';
import axios from 'axios'
import { Colors } from '../../assets/Colors';
import { setUserDetails } from '../../redux/user/user.action';
import { connect } from 'react-redux'


const StripePayout = ({amount, setUser}) => {

    const [email, setEmail] = useState()
    const [cardDetails, setCardDetails] = useState()
    const [pressed, setPressed] = useState(false)
    const { confirmPayment, loading } = useConfirmPayment()

    const fetchPaymentClienSecret = async () => {

        const response = await axios.post(`${API_URL}/creat-payment-intent/${amount}`, {
            headers: {
                'Accept': 'application/json, text/plain, */*', 
                'Content-Type': 'application/json'
            }, 
          
        }).then(res => {
            return res.data
        })

        const { clientSecret, error } = response

        return {clientSecret, error}
    }

    const handleUpdate = async (data) => {
        const res = await update(data)
        setUser({...res["response"]})
        
    } 

    const handlePayPress = async () => {
        if(!cardDetails?.complete || !email){
            setPressed(false)
            Alert.alert('Please Enter A complete card details and Email')
            return
        }
        const billingDetails = {
            email: email
        }

        try {
            const { clientSecret, error } = await fetchPaymentClienSecret()

            if(error){
                setPressed(false)
                console.log('Unable is able to process payment')
                Alert('Unable to process payment')
            } else {
                const { paymentIntent, error } = await confirmPayment(
                    clientSecret, {
                        type: 'Card',
                        billingDetails: billingDetails
                    }
                )

                if(error){
                    alert(`Payment confirmation Error: ${error.message}`)
                } else if (paymentIntent){
                    const started = new Date();
                    let expires = new Date();
                    expires.setDate(expires.getDate() + 365)
                    alert("Payment successful")
                    setPressed(false)
                    handleUpdate({
                        email: email,
                        loggedIn: true,
                        started: `${started.toLocaleDateString()}`,
                        expires: `${expires.toLocaleDateString()}`,
                        subscribed: true
                        
                    })
                    console.log('Payment successful', paymentIntent)
                }
            }
        } catch (e){
            console.log(e)
        }

        
    }
    return (
        <View style={styles.container}>
            <TextInput 
                autoCapitalize='none'
                placeholder='E-mail'
                keyboardType='email-address'
                onChange={value => setEmail(value.nativeEvent.text)}
                style={styles.input}
            />

            <CardField 
            
            postalCodeEnabled={true}
            placeholder={{
                number: '4242 4242 4242 4242'
            }}
            cardStyle={styles.card}
            style={styles.cardContainer}
            onCardChange={cardDetails => setCardDetails(cardDetails)}

            />
            {
                 <TouchableOpacity
                    style={{
                        width: '100%',
                        height: 60,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: Colors.SECONDARY,
                        borderWidth: 2,
                        borderColor: Colors.BORDER
                    }}

                    onPress={() => {
                        setPressed(true)
                        handlePayPress()

                    }}
                 >
                     {
                         pressed
                         ?
                         <ActivityIndicator size='small' color={Colors.PRIMARY} />
                         :
                         <Text style={{color: Colors.PRIMARY, fontWeight: 'bold'}}>{`Donate $${amount}`}</Text>

                     }
                 </TouchableOpacity>
                 
            }
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        margin: 20
    }, 
    input: {
        height: 50,
        padding: 10,
        backgroundColor:'#efefef'
    },
    card: {
        backgroundColor:'#efefef'
    },
    cardContainer: {
        height: 50,
        marginVertical: 30
    }
})

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUserDetails(user))
})

export default connect(null, mapDispatchToProps)(StripePayout)