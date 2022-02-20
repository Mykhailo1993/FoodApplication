import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LanguageScreen from '../screens/LanguageScreen/LanguageScreen';
import SettingsScreen from '../screens/SettingsScreen/SettingsScreen';
import SettingsThemeScreen from '../screens/SettingThemeScreen/SettingThemeScreen';

const Stack = createNativeStackNavigator();

const MoreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="LanguageScreen" component={LanguageScreen} />
      <Stack.Screen
        name="SettingsThemeScreen"
        component={SettingsThemeScreen}
      />
    </Stack.Navigator>
  );
};
export default MoreStack;
