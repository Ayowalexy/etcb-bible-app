import React, { useEffect, useState } from 'react';
import { useStripe } from '@stripe/stripe-react-native';
import {View, Text, ScrollView, Button, Alert} from 'react-native'
import { API_URL } from '../../components/payment-screen/api-fetch';
import PaymentScreen from '../../components/payment-screen/paymentScreen';
import StripePayout from '../../components/stripe/stripe.component';
import { StripeProvider } from '@stripe/stripe-react-native';


const Premium = ({navigation}) => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [paymentSheetEnabled, setPaymentSheetEnabled] = useState(false);
  const [loading, setLoadng] = useState(false);
  const [clientSecret, setClientSecret] = useState('');

    return(
        <ScrollView>
           
            <View style={{marginBottom: 20}}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 30}}>ETB Bible Features</Text>
                </View>
                <View style={{marginTop: 30, marginRight: 10, marginLeft: 10}}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                        <View style={{width: 5, height: 5, backgroundColor: 'black', borderRadius: 10}}></View>
                        <View style={{marginLeft: 20}}>
                            <Text>Complete With OT & NT </Text>
                        </View>
                    </View>
                
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                        <View style={{width: 5, height: 5, backgroundColor: 'black', borderRadius: 10}}></View>
                        <View style={{marginLeft: 20}}>
                            <Text>Easy To Read, Understand & Enjoy</Text>
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                        <View style={{width: 5, height: 5, backgroundColor: 'black', borderRadius: 10}}></View>
                        <View style={{marginLeft: 20}}>
                            <Text>Written In Today’s Language & Easy To Relate To</Text>
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 25}}>
                        <View style={{width: 5, height: 5, backgroundColor: 'black', borderRadius: 10}}></View>
                        <View style={{marginLeft: 20}}>
                            <Text>Removes Frustration And Difficulty With Ancient Language,        
                                    Words, Phrases or Idioms Without Losing Original Meaning
                            </Text>
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 35}}>
                        <View style={{width: 5, height: 5, backgroundColor: 'black', borderRadius: 10}}></View>
                        <View style={{marginLeft: 20}}>
                            <Text>No Verses Removed, Deleted or Corrupted or Moved </Text>
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <View style={{width: 5, height: 5, backgroundColor: 'black', borderRadius: 10}}></View>
                        <View style={{marginLeft: 20}}>
                            <Text>Provides Cross-Referencing Feature</Text>
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <View style={{width: 5, height: 5, backgroundColor: 'black', borderRadius: 10}}></View>
                        <View style={{marginLeft: 20}}>
                            <Text>Has Helpful Commentaries For Greater Understanding</Text>
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 25}}>
                        <View style={{width: 5, height: 5, backgroundColor: 'black', borderRadius: 10}}></View>
                        <View style={{marginLeft: 20}}>
                            <Text>Commentaries Also Explain Age Old & Difficult Bible Questions</Text>
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <View style={{width: 5, height: 5, backgroundColor: 'black', borderRadius: 10}}></View>
                        <View style={{marginLeft: 20}}>
                            <Text>Has Dictionary Features  With Alternative Words</Text>
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <View style={{width: 5, height: 5, backgroundColor: 'black', borderRadius: 10}}></View>
                        <View style={{marginLeft: 20}}>
                            <Text>Color Schemes Distinguish between Speakers (God, Yeshua, Others)</Text>
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <View style={{width: 5, height: 5, backgroundColor: 'black', borderRadius: 10}}></View>
                        <View style={{marginLeft: 20}}>
                            <Text>Makes End Time Events  & Prophecies Easy To Follow</Text>
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <View style={{width: 5, height: 5, backgroundColor: 'black', borderRadius: 10}}></View>
                        <View style={{marginLeft: 20}}>
                            <Text>Read ETB As Normal Bible Or With End Time Guide</Text>
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <View style={{width: 5, height: 5, backgroundColor: 'black', borderRadius: 10}}></View>
                        <View style={{marginLeft: 20}}>
                            <Text>Modern  & Ancient Biblical Units Of Measurement Together</Text>
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <View style={{width: 5, height: 5, backgroundColor: 'black', borderRadius: 10}}></View>
                        <View style={{marginLeft: 20}}>
                            <Text>Excellent For Entire Family, Church Groups & Personal Study</Text>
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <View style={{width: 5, height: 5, backgroundColor: 'black', borderRadius: 10}}></View>
                        <View style={{marginLeft: 20}}>
                            <Text>Has Adults & Children Versions (Large or Small Print).</Text>
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <View style={{width: 5, height: 5, backgroundColor: 'black', borderRadius: 10}}></View>
                        <View style={{marginLeft: 20}}>
                            <Text>ETB Is For Both Jews & Gentiles Alike</Text>
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <View style={{width: 5, height: 5, backgroundColor: 'black', borderRadius: 10}}></View>
                        <View style={{marginLeft: 20}}>
                            <Text>Contains Torah & All Books Of Tanakh (Hebrew/Jewish Bible)</Text>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <View style={{width: 5, height: 5, backgroundColor: 'black', borderRadius: 10}}></View>
                        <View style={{marginLeft: 20}}>
                            <Text>Has Hebrew And Greek Keywords & English Equivalents</Text>
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <View style={{width: 5, height: 5, backgroundColor: 'black', borderRadius: 10}}></View>
                        <View style={{marginLeft: 20}}>
                            <Text>Uses English & Hebrew Names Of Books In Bible )</Text>
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <View style={{width: 5, height: 5, backgroundColor: 'black', borderRadius: 10}}></View>
                        <View style={{marginLeft: 20}}>
                            <Text>Uses Original Hebrew Names & English/Latin Equivalents (Eg, Yeshua, Jesus, Iēsous)</Text>
                        </View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <View style={{width: 5, height: 5, backgroundColor: 'black', borderRadius: 10}}></View>
                        <View style={{marginLeft: 20}}>
                            <Text>ETB Is The Bible For Today. </Text>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <View style={{width: 5, height: 5, backgroundColor: 'black', borderRadius: 10}}></View>
                        <View style={{marginLeft: 20}}>
                            <Text>Enjoyable Without Language Difficulty & Can Be Used Alongside Your Favorite Old Bible.   </Text>
                        </View>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
                        <View style={{width: 5, height: 5, backgroundColor: 'black', borderRadius: 10}}></View>
                        <View style={{marginLeft: 20}}>
                            <Text>ETB Is About Souls, God’s Kingdom, Name & Glory</Text>
                        </View>
                    </View>

                    <View style={{marginTop: 30}}>
                        <Text style={{fontWeight: 'bold', fontStyle:'italic'}}>
                        ETB Is Not Just About End Time.  It’s a complete Bible from Genesis To Revelation. 
                            But ETB also makes End Time Events and Prophecies  clearly marked and more easily understood, 
                            just as in the Scriptures.

                        </Text>
                    </View>
                </View>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                  
                </View>

                <StripeProvider
                    publishableKey='pk_test_51JOpfuAASrRVh8zALxM4OdvV2MFKP9tZ3n3MoTDSLrMAepnUYXVl9D28qs9nJzDYIfDmp4KxeEhJYB6jeTcyBsuw00h9EBhpnb'
                >
                    <StripePayout amount={30} />
                </StripeProvider>
                
            </View>
        </ScrollView>
    )
}

export default Premium