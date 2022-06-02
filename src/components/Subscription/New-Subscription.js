import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, Button, Platform, TouchableOpacity, useWindowDimensions, ScrollView, StatusBar } from 'react-native';
import DAILY_VERSES from '../../push-notification/daily-verse';
import PaymentScreen from '../../components/payment-screen/paymentScreen';
import { API_URL } from '../../components/payment-screen/api-fetch';
import StripePayout from '../../components/stripe/stripe.component';
import { StripeProvider } from '@stripe/stripe-react-native';
import { useStripe } from '@stripe/stripe-react-native';
import { Colors } from '../../assets/Colors';



const NewSubscription = () => {
    const { width } = useWindowDimensions()


  const [amount, setAmount] = useState(1)

  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [paymentSheetEnabled, setPaymentSheetEnabled] = useState(false);
  const [loading, setLoadng] = useState(false);
  const [clientSecret, setClientSecret] = useState('');
    return (
    <View
    style={{
      margin: 20,
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 80 : StatusBar.currentHeight

    }}>
    <Text style={{fontWeight: 'bold', fontSize: 17, textAlign: 'center'}}>Donate a Bible, Get A Free ETB App {"\n"}<Text style={{fontWeight: 'normal'}}>(Subscription for 1yr)</Text></Text>
    <Text style={{marginTop: 20, fontSize: 16}}>   This Gospel of Good News of The Kingdom of God must first reach all the world. Then the end will come, (Matthew 9:14, Mark 13:10).  
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
          <View style={{marginRight: 20, borderWidth: 2,
                          borderColor: Colors.BORDER, width: 40, height: 40, backgroundColor: Colors.SECONDARY, flex: 0.1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>-</Text>
          </View>
         
      </TouchableOpacity>

    

      <TouchableOpacity>
          <View style={{marginRight: 20, width: 40, borderWidth: 2,
                          borderColor: Colors.BORDER, height: 40, borderStyle: 'solid', flex: 0.1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>{ amount }</Text>
          </View>
         
      </TouchableOpacity>  
      <TouchableOpacity
        onPress={() => {
          setAmount(prevState => prevState + 1)
        }}
      >

          <View style={{width: 40, height: 40,  borderWidth: 2,
                          borderColor: Colors.BORDER, backgroundColor: Colors.SECONDARY, flex: 0.1, justifyContent: 'center', alignItems: 'center'}}>
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

    <View>
      <Text style={{textAlign: 'center', fontSize: 16}}>
        Your Donation/Subscription goes towards {"\n"}
        A Free Bible for those less privileged.{"\n"}
        And You Get a Free App{"\n"}{"\n"}
      </Text>
    </View>
  </View>
    

    
  </View>
    )
}

export default NewSubscription