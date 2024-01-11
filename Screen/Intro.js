import React, { useEffect } from 'react';
import { View, Text, Image, PixelRatio, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

import Images from '../Const/Images';
import Colors from '../Const/Colors';

const fontScale = PixelRatio.getFontScale();
const getFontSize = (size) => size / fontScale;

const Intro = () => {
  const navigation = useNavigation(); // Get navigation object

  useEffect(() => {
    // Set a timeout to navigate after 2 minutes (120,000 milliseconds)
    const timeout = setTimeout(() => {
      // Navigate to the desired screen (replace 'YourScreenName' with the actual screen name)
      navigation.replace('Onboard1');
    }, 6000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, [navigation]); // Add navigation to the dependency array to avoid React warnings

  return (
    <View style={{ flex: 1, backgroundColor: Colors.black, justifyContent: 'center', alignItems: 'center' }}>
      <StatusBar barStyle="light-content" />
      <View style={{ width: '30%', height: '20%' }}>
        <Image source={Images.logo} style={{ width: '100%', height: '100%' }} resizeMode='contain' />
      </View>
      <Text style={{ color: Colors.white, fontFamily: 'Bold', fontSize: getFontSize(30) }}>UpTodo</Text>
    </View>
  );
};

export default Intro;
