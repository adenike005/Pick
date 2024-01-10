// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Appearance } from 'react-native';
// import React, { useState } from 'react';


// export default function App() {

//   const [theme, setTheme] = useState(Appearance.getColorScheme())
//   Appearance.addChangeListener((scheme =>{
//     alert(JSON.stringify(scheme))
//     console.log(scheme);
//   }))
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React, { useState } from 'react';
// import { View, Text, useColorScheme, StyleSheet, TouchableOpacity,StatusBar  } from 'react-native';

// const App = () => {
//   const colorScheme = useColorScheme();
//   const [theme, setTheme] = useState(colorScheme); // Initialize theme based on the device's color scheme

//   const toggleTheme = () => {
//     // Toggle theme based on the current state
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//   };

//   // Define styles for light and dark themes
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//       backgroundColor: theme === 'dark' ? '#121212' : '#FFFFFF',
//     },
//     text: {
//       color: theme === 'dark' ? '#FFFFFF' : '#333333',
//     },
//     button: {
//       marginTop: 20,
//       padding: 10,
//       backgroundColor: '#007BFF',
//       borderRadius: 5,
//     },
//     buttonText: {
//       color: '#FFFFFF',
//     },
//   });

//   return (
//     <>
//       <StatusBar
//         backgroundColor={theme === 'dark' ? '#121212' : '#FFFFFF'} // Set the StatusBar background color
//         barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} // Set the StatusBar text color
//       />
//     <View style={styles.container}>
//       <Text style={styles.text}>Color scheme: {theme}</Text>
//       <TouchableOpacity onPress={toggleTheme} style={styles.button}>
//         <Text style={styles.buttonText}>Toggle Theme</Text>
//       </TouchableOpacity>
//     </View>
//     </>
//   );
// };

// export default App;


import React from 'react';
import {StatusBar, Text, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  const isDarkMode = useColorScheme() === 'dark';
console.log('Dark mode is on?', isDarkMode);


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            height: 200,
            width: 200,
            borderRadius: 100,
            backgroundColor: backgroundStyle.backgroundColor,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: isDarkMode ? Colors.lighter : Colors.darker,
              fontSize: 18,
            }}>
            Dark mode is on? {isDarkMode ? 'Yes' : 'No'}
          </Text>
        </View>
      </View>
    </>
  );
};

export default App;



