import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, ActivityIndicator,Dimensions, TouchableOpacity,KeyboardAvoidingView, ScrollView, Button } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';
import userSchema from './useSchema';
import { Colors } from '../../assets/Colors';
import { styles } from './styles';
import { connect} from 'react-redux'
import { setUserDetails } from '../../redux/user/user.action';
import { signUp, login } from '../../components/payment-screen/api-fetch';




const Login = ({navigation, setUser}) => {
    const [text, onChangeText] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [ showpassword, setShowPassword ] = useState(false);
    const [pressed, setPressed] = useState(false)

    // let [fontsLoaded] = useFonts({
    //     Inter_900Black,
    //   });

    const handleSubmit = async () => {
        const data = await signUp()
    }


    return (
        <Formik
        validationSchema={userSchema}
        initialValues={{ email: '', password: '' }}
        validateOnMount={true}
        onSubmit={ async (values) => {       
            const data = await signUp({email: values.email, password: values.password})
            console.log(data)
        }}
      > 
        
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
       
            <View style={styles.CONTAINER}
                > 
             {/* <KeyboardAvoidingView>            */}
                <View style={styles.ETB_BACKGROUND} >
                    <Text style={styles.ETB}>
                        ETB
                    </Text>
                </View>

                <View>
                    <Text style={styles.ETB_TEXT}>End Time Bible Translation</Text>
                </View>

                <View style={{
                    width: '90%',
                    marginTop: 80
                }}>
                    <View>
                        <Text
                            style={styles.DETAILS}
                        >Email</Text>
                        <View>
                             <View style={styles.BOX}>
                                <TextInput 
                                        placeholderTextColor='black'
                                        keyboardType='email-address'
                                        style={{color: 'black'}}
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
                        </View>

                        <Text
                            style={styles.DETAILS}
                        >Password</Text>
                        <View style={styles.BOX}>
                            <TextInput 
                                placeholderTextColor='black'
                                style={styles.input}
                                placeholder='Enter Password'
                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                                secureTextEntry={!showpassword ? true : false}
                            />

                            <TouchableOpacity
                                style={styles.ICON}
                                onPress={() => {
                                    setShowPassword(prevState => !prevState)
                                }}
                            >
                                    <Ionicons name={showpassword ? 'eye-off-outline' : 'eye-outline'} size={20} color={Colors.SECONDARY} />
                            </TouchableOpacity>
                        </View>

                        {(errors.password && touched.password) &&
                        <Text style={styles.error}>{errors.password}</Text>
                        }


                        
                    </View>

                    <TouchableOpacity 
                            onPress={ async() => {
                                setPressed(true)
                                const data = await signUp({
                                    email: values.email, 
                                    password: values.password,
                                    loggedIn: true,
                                    started: '',
                                    expires: '',
                                    subscribed: false
                                    
                                })
                                if(data["message"] === 'Ok'){
                                        setPressed(false)
                                        setUser({...data["response"]})
                                    navigation.navigate('Home Page')
                                } else {
                                    setPressed(false)
                                }
                                
                            }}
                            style={[
                                styles.SIGN_UP, 
                                {backgroundColor: pressed ? Colors.SECONDARY_FADED : Colors.SECONDARY
                                }]}
                        >
                            {
                                pressed 
                                ?
                                <ActivityIndicator size="small" color={Colors.PRIMARY} />
                                :
                                <Text style={{fontWeight: 'bold', fontSize: 18, color: Colors.PRIMARY}}>Sign Up</Text>

                            }
                        </TouchableOpacity>
                </View>
            </View>
            
         )}
    </Formik>
    )
}

  const matDispatchToProps = dispatch => ({
      setUser: user => dispatch(setUserDetails(user))
  })

  export default connect(null, matDispatchToProps)(Login)