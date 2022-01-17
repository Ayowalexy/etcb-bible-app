import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button, Alert, ActivityIndicator } from 'react-native'
import { API_URL } from '../payment-screen/api-fetch';
import { CardField, useConfirmPayment } from '@stripe/stripe-react-native';
import axios from 'axios'



const StripePayout = ({amount}) => {

    const [email, setEmail] = useState()
    const [cardDetails, setCardDetails] = useState()
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

    const handlePayPress = async () => {
        if(!cardDetails?.complete || !email){
            Alert.alert('Please Enter A complete card details and Email')
            return
        }
        const billingDetails = {
            email: email
        }

        try {
            const { clientSecret, error } = await fetchPaymentClienSecret()

            if(error){
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
                    alert("Payment successful")
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
                loading ? <ActivityIndicator size='small' color='black' />
                 : 
                 <Button 
                    color='black'
                    onPress={handlePayPress}
                    title={`Donate $${amount}`}
                    disabled={loading}
                />
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

export default StripePayout