import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform, TouchableOpacity, useWindowDimensions, ScrollView, StatusBar } from 'react-native';
import DAILY_VERSES from './daily-verse';
import PaymentScreen from '../components/payment-screen/paymentScreen';
import { API_URL } from '../components/payment-screen/api-fetch';
import StripePayout from '../components/stripe/stripe.component';
import DaliyNotification from './daily-notification.component';
import { StripeProvider } from '@stripe/stripe-react-native';
import { useStripe } from '@stripe/stripe-react-native';


let num = 1;
let match = '' || DAILY_VERSES[0];

//  setInterval(function(){
//     match = DAILY_VERSES.find(verse => {
//       if(verse.id === num){
//         num = num + 1;
//         //  console.log(verse , 'Pushing')
//         return verse
//       }
//    })
//  }, 50000)


//  setInterval(() => {
//   console.log(match, 'matched')
//  }, 6000)

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: false,
//   }),
// });


// setInterval(() => {
//   Notifications.scheduleNotificationAsync({
//     content: {
//       title: `${match.title}`,
//       body: `${match.body}`
//     },
//     trigger: {
//       seconds: 10,
//       // repeats: true
//     }
//   })
// }, 60000);


// const red = Notifications.cancelAllScheduledNotificationsAsync()
// console.log(red)

const Ap = () => {

  const { width } = useWindowDimensions()


  const [amount, setAmount] = useState(1)

  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [paymentSheetEnabled, setPaymentSheetEnabled] = useState(false);
  const [loading, setLoadng] = useState(false);
  const [clientSecret, setClientSecret] = useState('');


  return (
    
    <ScrollView>

      {/* <DaliyNotification /> */}
    <View
      style={{
        margin: 20,
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 80 : StatusBar.currentHeight

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
            <View style={{marginRight: 20, width: 40, height: 40, borderColor: 'black', borderStyle: 'solid', borderWidth: 1, flex: 0.1, justifyContent: 'center', alignItems: 'center'}}>
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
    </ScrollView>
 
  );
}


export default Ap