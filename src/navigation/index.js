import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardinStack from './OnboardingStack';
import AppTabs from './AppTabs';

const Stack = createNativeStackNavigator();

const AppNavigation = () => (
  <Stack.Navigator initialRouteName='OnboardinStack' screenOptions={{ headerShown: false }}>
    <Stack.Screen name='OnboardinStack' component={OnboardinStack} />
    <Stack.Screen name='AppTabs' component={AppTabs} />
  </Stack.Navigator>
);

export default AppNavigation;
