import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Appearance } from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import Index from './Navigation/Index';



export default function App() {

  const [loaded] = useFonts({
    // Montserrat: require('./assets/fonts/Yatra-One.ttf'),
       Black: require('./assets/Font/Lato-Black.ttf'),
       Blackitalic : require('./assets/Font/Lato-BlackItalic.ttf'),
       Bold : require('./assets/Font/Lato-Bold.ttf'),
       Bolditalic : require('./assets/Font/Lato-BoldItalic.ttf'),
       Light : require('./assets/Font/Lato-Light.ttf'),
       LightItalic : require('./assets/Font/Lato-LightItalic.ttf'),
       Regular : require('./assets/Font/Lato-Regular.ttf'),
       Thin : require('./assets/Font/Lato-Thin.ttf'),
       ThinItalic : require('./assets/Font/Lato-ThinItalic.ttf'),
       Bold : require('./assets/Font/Lato-Bold.ttf')

  });
  if (!loaded) {
    return null;
  }
  return (
    <>
    <Index/>
    </>
  );
}







