/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './src/screens/MainTabScreen';


const Drawer = createDrawerNavigator();
//Stack Navigator
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{
//         headerStyle: {
//           backgroundColor: '#f4511e',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}>
//         <Stack.Screen name="Home" component={HomeScreen} options={{
//           title:'My Home',
//         }} />
//         <Stack.Screen name="Details" component={DetailScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
//Drawer Navigator

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/* <Drawer.Screen name="Details" component={DetailScreenStack} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
