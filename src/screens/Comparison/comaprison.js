import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Colors } from '../../assets/Colors';

const Comparisons = ({navigation}) => {
    return (
        <View style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: Dimensions.get('window').height
        }}>
            <Text style={{
                fontWeight: 'bold',
                fontSize: 20
            }}>Compare & Contrast:</Text>
            <Text style={{textAlign: 'center', marginTop: 10}}>ETB vs Other Translations<Text>{"\n"}</Text>
            How Is ETB Different from Other Versions:<Text>{"\n"}</Text>
            KJV, NIV, NLT, ESV, Etc. Select from below to see.<Text>{"\n"}</Text>
            </Text>

            <Text>  
            </Text>
            <View
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%'
                }}
            >
            {
                [
                    {
                        "title": "Language Simplicity",
                        "to": "Language"
                    },
                    {
                        "title": "Completeness Of Verses",
                        "to": "Completeness"
                    },
                    {
                        "title": "Preservation Of Original Message",
                        "to": "Preservation"
                    },
                    {
                        "title": "Other Key Features Of ETB",
                        "to": "Other"
                    }
                ].map(data => {
                    return (
                        <>
                            <TouchableOpacity 

                                onPress={() => navigation.navigate(`${data.to}`)}
                                style={{
                                    backgroundColor: Colors.SECONDARY,
                                    width: "90%",
                                    height: 60,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: 15,
                                    borderWidth: 2,
                                    borderColor: Colors.BORDER
                                }}
                            >
                                <Text style={{
                                    color: Colors.PRIMARY,
                                    fontWeight: 'bold'
                                }}>
                                    {data.title}
                                </Text>
                            </TouchableOpacity>
                        </>
                    )
                })
            }
            </View>

        </View>
    )
}

export default Comparisons