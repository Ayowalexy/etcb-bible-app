import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, SafeAreaView,Dimensions, TouchableOpacity,KeyboardAvoidingView, ScrollView, Button } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';
import userSchema from './useSchema';




const Login = () => {
    const [text, onChangeText] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [ showpassword, setShowPassword ] = useState(false)

    // let [fontsLoaded] = useFonts({
    //     Inter_900Black,
    //   });



    return (
        <Formik
        validationSchema={userSchema}
        initialValues={{ email: '', password: '' }}
        validateOnMount={true}
        onSubmit={values => {       
            // api.post('/login', values)
            // .then(response => setFeedback(response.data))
            // .catch(error => console.log(error))


            if(feedback){
                // return navigation.navigate('Homepage')
            }
        }}
      > 
        
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
       
            <View style={styles.container}> 
             <KeyboardAvoidingView>


       
            
            <View>
                <View style={styles.etb}>
                    <Text style={styles.etb_text}>
                        ETB
                    </Text>
                </View>
            </View>
            <Text style={styles.text}>
                Email
            </Text>

            <View style={styles.text_input}>
                <TextInput 
                        placeholderTextColor='white'
                        keyboardType='email-address'
                        style={styles.input}
                        placeholder='Enter Email Address'
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                />
                {/* <Ionicons name={errors.email ? 'close-outline' : 'checkmark'} size={20} color='white' /> */}
            </View>
            {(errors.email && touched.email) &&
            <Text style={styles.error}>{errors.email}</Text>
            }
                            
            <Text style={styles.text}>
                Password
            </Text>


            <View>
                <TextInput 
                    placeholderTextColor='white'
                    style={styles.input}
                    placeholder='Enter Password'
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={!showpassword ? true : false}
                />

                <TouchableOpacity
                    onPress={() => {
                        setShowPassword(prevState => !prevState)
                    }}
                >
                        {/* <Ionicons name={showpassword ? 'eye-off-outline' : 'eye-outline'} size={20} color='white' /> */}
                </TouchableOpacity>
            </View>

            {(errors.password && touched.password) &&
            <Text style={styles.error}>{errors.password}</Text>
            }

           
            <Button
            // styles={[styles.login, styles.input]}
                title='LOGIN'
                color='black'
                onPress={() => {
                    console.log(values.password, values.email)
                }}
                disabled={(errors.password && touched.password) && (errors.email && touched.email) ? true : false}
            />
            {/* <View  style={{ height: 60}}/> */}
            </KeyboardAvoidingView>

            </View>
         )}
    </Formik>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#171C24',
        height: 800
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      color: 'white',
      borderColor: 'white'
    },
    text: {
        color: 'white',
        padding: 10,
        fontWeight: 'bold'
    },
    login: {
       
        backgroundColor: 'white',
        color: 'black',
        
    },
    etb :{
        width: 100,
        height: 100,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',        
        // flex: 0.25,
        marginLeft: (Dimensions.get('screen').width - 100) / 2
        // justifyContent: 'center',
        // alignItems: 'center',
        // alignSelf: 'center'

    },
    etb_text : {
        fontWeight: 'bold',
        fontSize: 30,
        marginLeft: 20,
        marginTop: 30,
        // fontFamily: 'Inter_900Black',
        color: '#171C24'
    },
    error: {
        color: 'red'
    }
    // ,
    // text_input : {
    //     flex: 0.4,
    //     flexDirection: 'row'
    // }

  });
  

  export default Login