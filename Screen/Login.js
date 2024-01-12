import { View, Text, PixelRatio, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import Images from '../Const/Images'
import Color from '../Const/Colors'
import { MaterialIcons, Entypo,  } from '@expo/vector-icons';



const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const Login = ({navigation}) => {
  return (
    <View style={{flex:1, backgroundColor:Color.black}}>
        <View style={{marginHorizontal:25, marginTop:"5%"}}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}
        >
        <Entypo name="chevron-small-left" size={30} color="white" />
        </TouchableOpacity>
        
      </View>
      <View style={{marginHorizontal:25, marginTop:"10%"}}>
        <Text style={{color:Color.white, fontSize:getFontSize(27), fontFamily:"Light", letterSpacing:1.4}}>Login</Text>
        
      </View>

      <View style={{marginHorizontal:25, marginTop:"10%"}}>
        <Text style={{color:Color.white, fontSize:getFontSize(13), fontFamily:"Light", letterSpacing:1.8}}>Username</Text>
        <View style={{width:"100%", height:40, backgroundColor:Color.black, borderWidth:1, borderColor:Color.gray, marginTop:"5%",justifyContent: 'center', }}>
        <TextInput
        style={{color:Color.white, marginLeft:10}}
        placeholder="Enter your Username"
        placeholderTextColor={Color.gray2}
        // value={text}
        // onChangeText={(newText) => setText(newText)}
       
      />
      
        </View>
        {/*  */}
        <Text style={{color:Color.white, fontSize:getFontSize(13), fontFamily:"Light", letterSpacing:1.8, marginTop:10}}>Password</Text>
        <View style={{width:"100%", height:40, backgroundColor:Color.black, borderWidth:1, borderColor:Color.gray, marginTop:"5%",justifyContent: 'center', }}>
        <TextInput
        style={{color:Color.white, marginLeft:10}}
        placeholder="Enter your Usernames"
        placeholderTextColor={Color.gray2}
        // value={text}
        // onChangeText={(newText) => setText(newText)}
       
      />
      
        </View>
      </View>
    </View>
  )
}

export default Login