import { View, Text, PixelRatio, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Images from '../Const/Images'
import Color from '../Const/Colors'


const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const Onboard2 = ({navigation}) => {
  return (
   <View style={{flex:1, backgroundColor:Color.black}}>
     <View style={{ backgroundColor:Color.black, alignItems:"center"}}>
      <View style={{width:"100%", height:"50%", marginTop:30}}>
        <Image source={Images.Onboarding2} resizeMode='contain' style={{width:"100%", height:"100%"}}/>
      </View>
      <View style={{display:"flex", flexDirection:"row", marginTop:"10%"}}>
        <View style={{width:20, height:3, backgroundColor:Color.gray, margin:10}}></View>
        <View style={{width:20, height:3, backgroundColor:Color.white, margin:10}}></View>
        <View style={{width:20, height:3, backgroundColor:Color.gray, margin:10}}></View>
      </View>
      <View style={{ marginTop:"10%"}}>
        <Text style={{color:Color.white,fontSize:getFontSize(23), fontWeight:"bold", fontFamily:"Light",letterSpacing:1}}>Create daily routine</Text>
       
      </View>
      <View style={{ marginTop:"5%"}}>
      
        <Text style={{color:Color.white,fontSize:getFontSize(14),  fontFamily:"Thin", textAlign:"center", lineHeight:25, letterSpacing:0.7}}>In Uptodo you can create your {'\n'} personalized routine to stay productive</Text>
       
      </View>

    </View>
      <View style={{ marginTop:"10%", display:"flex",  marginHorizontal:25, justifyContent:"space-between", flexDirection:"row", alignItems:"center"}}>
      <TouchableOpacity
      onPress={() => navigation.goBack()}>
        <Text style={{color:Color.gray,}}>BACK</Text>
      </TouchableOpacity>
      
     <TouchableOpacity style={{padding:15, backgroundColor:Color.purple,borderRadius:5}}
     onPress={() =>navigation.navigate("Onboard3")}>
     <Text style={{color:Color.white,}}>Next</Text>
     </TouchableOpacity>
      </View>
   </View>
  )
}

export default Onboard2