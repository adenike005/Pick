import { View, Text , PixelRatio, TouchableOpacity} from 'react-native'
import React from 'react'
import Color from '../Const/Colors'
import Images from '../Const/Images'
import { MaterialIcons, Entypo } from '@expo/vector-icons';



const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const Start = ({navigation}) => {
  return (
    <View style={{flex:1, backgroundColor:Color.black}}>
      <View style={{marginHorizontal:25, marginTop:"5%"}}>
        <TouchableOpacity
        onPress={() => navigation.goBack()}
        >
        <Entypo name="chevron-small-left" size={30} color="white" />
        </TouchableOpacity>
        
      </View>
      <View style={{marginHorizontal:50, marginTop:"10%"}}>
        <Text style={{color:Color.white, fontSize:getFontSize(27), fontFamily:"Light", letterSpacing:1.4}}>Welcome to UpTodo</Text>
        <Text style={{color:Color.white,fontSize:getFontSize(14),  fontFamily:"Thin", textAlign:"center", lineHeight:25, letterSpacing:0.7, marginTop:"10%"}}>Please login to your account or create {'\n'} new account to continue</Text>
      </View>

      <View style={{marginHorizontal:25, marginTop:"100%"}}>
        <TouchableOpacity
        style={{backgroundColor:Color.purple, padding:15, marginBottom:"5%"}}
        onPress={() => navigation.navigate("Login")}>
            <Text style={{color:Color.white, textAlign:"center"}}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{backgroundColor:Color.black, padding:15, borderColor:Color.purple, borderWidth: 1}}
        >
            <Text style={{color:Color.white, textAlign:"center", textTransform:"uppercase"}}>Create account</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default Start