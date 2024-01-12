import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Intro from '../Screen/Intro';
import Onboard1 from '../Screen/Onboard1'
import Onboard2 from '../Screen/Onboard2'
import Onboard3 from '../Screen/Onboard3';
import Start from '../Screen/Start';
import Login from '../Screen/Login';


const Stack = createStackNavigator();

const Index = () => {
    const onboardingScreens = [
        { name: 'Onboard1', component: Onboard1 },
        { name: 'Onboard2', component: Onboard2},
        { name: 'Onboard3', component: Onboard3},
       
        
        
      ];
  return (
   <NavigationContainer>
    <Stack.Navigator
         screenOptions={{
            headerShown: false,
          }}>
             <Stack.Screen name='Intro' component={Intro}/>
             {onboardingScreens.map(({ name, component }) => (
          <Stack.Screen key={name} name={name} component={component} />
        
        ))}
        <Stack.Screen name='Start' component={Start}/>
        <Stack.Screen name='Login' component={Login}/>
          </Stack.Navigator>
   </NavigationContainer>
  )
}

export default Index