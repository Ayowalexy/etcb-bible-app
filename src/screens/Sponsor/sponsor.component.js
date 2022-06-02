import React from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Colors } from '../../assets/Colors';


const Sponsor = ({navigation}) => {
    return (
        <ScrollView>
            <View style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                padding: 30
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 25,
                    paddingBottom: 20
                }}>Sponsor ETB For Souls:</Text>
                <Text style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    paddingBottom: 30
                }}>AND GET ETB APPS for FREE…. PLUS MORE <Text>{"\n"}</Text>
                <Text
                    style={{
                        fontWeight: "normal",
                        textAlign: 'center',
                    }}
                >Make Your Donation Now.</Text></Text>
                <Text style={{
                    textAlign: 'center'
                }}>
                Be Part Of End Time Global Evangelism<Text>{"\n"}</Text>
                Let's Partner Together To Win Souls.<Text>{"\n"}</Text>
                Join End Time Global Evangelism.<Text>{"\n"}</Text>
                Donate Paper-copy ETB Bible To Someone.<Text>{"\n"}</Text>
                Get Your ETB Apps For FREE plus more!<Text>{"\n"}</Text>

                </Text>

                <TouchableOpacity

                        onPress={() => navigation.navigate('Donate')}
                        style={{
                            width: '110%',
                            marginBottom: 20,
                            height: 60,
                            backgroundColor: Colors.SECONDARY,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 2,
                            borderColor: Colors.BORDER
                        }}
                    >
                        <Text style={{color: Colors.PRIMARY, fontWeight: 'bold'}}>DONATE</Text>
                    </TouchableOpacity>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 15
                }}>Why Donate / Sponsor</Text>
                <Text style={{
                    textAlign: 'center'
                }}>
                Many Depend On Paper-print Bibles Globally<Text>{"\n"}</Text>
                For Field Evangelism.<Text>{"\n"}</Text>
                For Teaching & Bible Studies.<Text>{"\n"}</Text>
                For Self & Family Devotions<Text>{"\n"}</Text>
                <Text>{"\n"}</Text>
                Donated ETB Distributed <Text>{"\n"}</Text>
                Not For Profit But Souls Winning.<Text>{"\n"}</Text>
                Donation Helps To Print, Ship & Distribute<Text>{"\n"}</Text>
                </Text>
                <TouchableOpacity

                        onPress={() => navigation.navigate('Donate')}
                        style={{
                            width: '110%',
                            marginBottom: 20,
                            height: 60,
                            backgroundColor: Colors.SECONDARY,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 2,
                            borderColor: Colors.BORDER
                        }}
                    >
                        <Text style={{color: Colors.PRIMARY, fontWeight: 'bold'}}>DONATE</Text>
                    </TouchableOpacity>
                <Text style={{
                    textAlign: 'center'
                }}>

                    
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    textAlign: 'center'
                }}>How It Works</Text><Text>{"\n"}</Text>
                Sponsor Paper-print ETB Bibles<Text>{"\n"}</Text>
                Get Your ETB APPS for FREE<Text>{"\n"}</Text>
                </Text>

                <Text style={{
                    textAlign: 'center'
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 14}}>Levels Of Donation/ Sponsorship</Text> 
                <Text style={{fontWeight: 'bold', fontSize: 14}}>Bronze Level:</Text> Donate 1 copy or more <Text>{"\n"}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 14}}>Silver Level:</Text>  Donate 5 copies or more<Text>{"\n"}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 14}}>Gold Level:</Text> Donate 10 copies or more<Text>{"\n"}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 14}}>Platinum Level:</Text> Donate 20 copies or more<Text>{"\n"}</Text>
                [( 1 copy $30)].

                </Text>

                <Text style={{textAlign: 'center', marginTop: 30}}>
                All Partners/Donors Get Free ETB App.<Text>{"\n"}</Text>
                Donate 10 or more, Receive Additional Free Book: <Text>{"\n"}</Text>
                <Text style={{fontWeight: 'bold', fontStyle: 'italic'}}>“Understanding The Bible In The End Time”.</Text><Text>{"\n"}</Text>
                <Text>{"\n"}</Text>
                Make Your Donation Now.<Text>{"\n"}</Text>

                

                </Text>
            </View>
            <View
                style={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <TouchableOpacity

                        onPress={() => navigation.navigate('Donate')}
                        style={{
                            width: '90%',
                            marginBottom: 20,
                            height: 60,
                            backgroundColor: Colors.SECONDARY,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 2,
                            borderColor: Colors.BORDER
                        }}
                    >
                        <Text style={{color: Colors.PRIMARY, fontWeight: 'bold'}}>DONATE</Text>
                    </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Sponsor