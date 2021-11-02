import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native';
import DAILY_VERSES from './daily-verse';
import PaymentScreen from '../components/payment-screen/paymentScreen';
import { API_URL } from '../components/payment-screen/api-fetch';
import StripePayout from '../components/stripe/stripe.component';
import { StripeProvider } from '@stripe/stripe-react-native';
import { useStripe } from '@stripe/stripe-react-native';


let num = 1;
let match = '' || DAILY_VERSES[0];

 setInterval(function(){
    match = DAILY_VERSES.find(verse => {
      if(verse.id === num){
        num = num + 1;
        //  console.log(verse , 'Pushing')
        return verse
      }
   })
 }, 50000)


//  setInterval(() => {
//   console.log(match, 'matched')
//  }, 6000)

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});


setInterval(() => {
  Notifications.scheduleNotificationAsync({
    content: {
      title: `${match.title}`,
      body: `${match.body}`
    },
    trigger: {
      seconds: 10,
      // repeats: true
    }
  })
}, 60000);


// const red = Notifications.cancelAllScheduledNotificationsAsync()
// console.log(red)

const Ap = () => {

  const { width } = useWindowDimensions()


  const [amount, setAmount] = useState(1)

  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [paymentSheetEnabled, setPaymentSheetEnabled] = useState(false);
  const [loading, setLoadng] = useState(false);
  const [clientSecret, setClientSecret] = useState('');

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/payment-sheet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { paymentIntent, ephemeralKey, customer } = await response.json();
    setClientSecret(paymentIntent);
    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const openPaymentSheet = async () => {
    if (!clientSecret) {
      return;
    }
    setLoadng(true);
    const { error } = await presentPaymentSheet({
      clientSecret,
    });

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'The payment was confirmed successfully');
    }
    setPaymentSheetEnabled(false);
    setLoadng(false);
  };

  const initialisePaymentSheet = async () => {
    const {
      paymentIntent,
      ephemeralKey,
      customer,
    } = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      customFlow: false,
      merchantDisplayName: 'Example Inc.',
      style: 'alwaysDark',
    });
    if (!error) {
      setPaymentSheetEnabled(true);
    }
  };

  useEffect(() => {
    // In your app’s checkout, make a network request to the backend and initialize PaymentSheet.
    // To reduce loading time, make this request before the Checkout button is tapped, e.g. when the screen is loaded.
    initialisePaymentSheet();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    
    <View
      style={{
        margin: 20,
        flex: 1,

      }}>
      <Text style={{fontWeight: 'bold', fontSize: 17, textAlign: 'center'}}>Donate a Bible, Get A Free ETB App Subscription for 1yr</Text>
      <Text style={{marginTop: 20, fontSize: 16}}>   This gospel of good news of The Kingdom of God must first reach all the world. Then the end will come, (Matthew 9:14, Mark 13:10).  
            Be part of the end time evangelism by sponsoring a Bible for others less privileged. </Text>

      <Text>Sponsor a Bible
        Quantity @ $30 each:
      </Text>

    <View style={{
      flex: 1,
      alignItems: 'center',
      
    }}>

     

      <View style={{flex: 1, flexDirection: 'row', marginTop: 30}}>
        <TouchableOpacity
           onPress={() => {
            setAmount(prevState => prevState == 0 ? prevState :  prevState - 1)
          }}
        >
            <View style={{marginRight: 20, width: 40, height: 40, backgroundColor: 'black', flex: 0.1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>-</Text>
            </View>
           
        </TouchableOpacity>

      

        <TouchableOpacity>
            <View style={{marginRight: 20, width: 40, height: 30, borderColor: 'black', borderStyle: 'solid', borderWidth: 1, flex: 0.1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>{ amount }</Text>
            </View>
           
        </TouchableOpacity>  
        <TouchableOpacity
          onPress={() => {
            setAmount(prevState => prevState + 1)
          }}
        >

            <View style={{width: 40, height: 40, backgroundColor: 'black', flex: 0.1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>+</Text>
            </View>
            
        </TouchableOpacity>
      </View>

      <View 
        style={{
          position: 'absolute',
          top: 100,
          width
        }}
      >
         <StripeProvider
                    publishableKey='pk_test_51JOpfuAASrRVh8zALxM4OdvV2MFKP9tZ3n3MoTDSLrMAepnUYXVl9D28qs9nJzDYIfDmp4KxeEhJYB6jeTcyBsuw00h9EBhpnb'
                >
                    <StripePayout amount={amount * 30} />
                </StripeProvider>
      </View>
    </View>
      

      
    </View>
 
  );
}


export default Ap