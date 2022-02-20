import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FoodStoreScreen from '../screens/FoodStoreScreen/FoodStoreScreen';
import SearchResultScreen from '../screens/SearchResultScreen/SearchResultScreen';
import LetsCookScreen from '../screens/LetsCookScreen/LetsCookScreen';

const Stack = createNativeStackNavigator();

const FoodStoreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="FoodStoreScreen" component={FoodStoreScreen} />
      <Stack.Screen name="SearchResultScreen" component={SearchResultScreen} />
      <Stack.Screen name="LetsCookScreen" component={LetsCookScreen} />
    </Stack.Navigator>
  );
};
export default FoodStoreStack;
