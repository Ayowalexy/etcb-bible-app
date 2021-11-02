import { Text, View, TouchableOpacity, Pressable,  Switch} from 'react-native'
import React, {useState} from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import ModalRender from '../../components/modal/modal.component'
import ColorModalRender from '../../components/modal/color-modal-render'
import ShareApp from '../../components/share/share-app.component';
import { setDayNight } from '../../redux/day-night/day-night-action';
import { connect } from 'react-redux'




const Settings = ({setStyle, style}) => {
    const [modal, setModal] = useState(false)
    const [color, setColor] = useState(false)
    const [redLetter, setRedLetter] = useState(false)
    const [mode, setMode] = useState(false)
  
    const { backgroundColor } = style.setStyle
    console.log(style)
    
    
    const toggleSwitch = !redLetter
    return (
        <View style={{
            flex: 1,
            backgroundColor: backgroundColor ? backgroundColor : 'white',
            color: style.color
        }}>
            <Text style={{fontWeight: 'bold', fontSize: 30, padding: 10, color: style.setStyle.color}}>Settings</Text>

            <ModalRender modal={modal} setModal={setModal}  />
            <ColorModalRender  color={color} setColor={setColor} />
            <TouchableOpacity
                onPress={() => {
                    setModal(!modal)
                }
            }
            >
                <View style={{marginBottom: 40, marginLeft: 15}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View>
                            <Ionicons name='settings-outline' size={20} color={style.setStyle.color} />
                        </View>
                        <View>
                            <Text style={{fontSize: 19, color: style.setStyle.color, fontWeight: 'bold', marginLeft: 10}}>Font Settings</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
            
                    setColor(!color)
                }
            }
            >
                <View style={{marginBottom: 40, marginLeft: 15}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View>
                            <Ionicons name='ios-color-wand-outline' size={20} color={style.setStyle.color} />
                        </View>
                        <View>
                            <Text style={{fontSize: 19,color: style.setStyle.color, fontWeight: 'bold', marginLeft: 10}}>Font Color</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>

            <ShareApp color={style.setStyle.color} />

            <TouchableOpacity
                onPress={() => {
                    setRedLetter(!redLetter)
                }
            }
            >
                <View style={{marginBottom: 40, marginLeft: 15}}>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View>
                        <Ionicons name='text-outline' size={20} color={style.setStyle.color} />
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                         <View>
                            <Text style={{fontSize: 19, color: style.setStyle.color, fontWeight: 'bold', marginLeft: 10}}>Red Letter</Text>
                         </View>
                        <View style={{marginLeft: 20}}>
                            <Switch 
                                value={redLetter}
                                trackColor={{ false: "#767577", true: "teal" }}
                                thumbColor={redLetter ? "black" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                // onChange={() => setRedLetter(!redLetter)}
                                
                            />
                        </View>
                    </View>
                    </View>
                </View>
            </TouchableOpacity>

           
            <TouchableOpacity
                 onPress={() => {
                    setMode(!mode)
                    if(mode){
                        setStyle({
                            backgroundColor: 'black',
                            color: 'white'
                        })
                    } else {
                        setStyle({
                            backgroundColor: 'white',
                            color: 'black'
                        })
                    }
                }}
            >
                <View style={{marginBottom: 40, marginLeft: 15}}>
                    
                    <View style={{flex: 1, flexDirection: 'row'}}
                       
                    >
                        <View>
                            <Ionicons name='bar-chart-outline' size={20} color={style.setStyle.color} />
                        </View>
                        <View>
                            <Text style={{fontSize: 19, color: style.setStyle.color, fontWeight: 'bold', marginLeft: 10}}>Day/Night</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            


         </View>
    )
}



const mapDispatchToProps = dispatch => ({
    fontSize: size => dispatch(setFontSize(size)),
    setStyle: style => dispatch(setDayNight(style))
})

const mapStateToProps = state => ({
    style: state.style
})



export default connect(mapStateToProps, mapDispatchToProps)(Settings)