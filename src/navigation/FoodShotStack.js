import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FoodShotScreen from '../screens/FoodShotScreen/FootShotScreen';
import AddRecipeScreen from '../screens/AddRecipeScreen/AddRecipeScreen';

const Stack = createNativeStackNavigator();

const FoodShotStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FoodShotScreen" component={FoodShotScreen} />
      <Stack.Screen name="AddRecipeScreen" component={AddRecipeScreen} />
    </Stack.Navigator>
  );
};
export default FoodShotStack;
