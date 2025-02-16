import { Text, SafeAreaView, StyleSheet,
  View,
  Image,
  TextInput,
  Pressable,
 } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
 
import React from 'react';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Porto from './src/screens/home/index';
import Login from './src/screens/login/index';
import Register from './src/screens/register/index';

export default function App() {
  
  return(
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Portfolio" component={Porto} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
