import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LanguageScreen from '../screens/LanguageScreen/LanguageScreen';
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';

const Stack = createNativeStackNavigator();

const OnboardinStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};
export default OnboardinStack;
