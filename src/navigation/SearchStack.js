import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SearchResultScreen from '../screens/SearchResultScreen/SearchResultScreen';
import SearchRecipesScreen from '../screens/SearchRecipesScreen/SearchRecipesScreen';
import LetsCookScreen from '../screens/LetsCookScreen/LetsCookScreen';

const Stack = createNativeStackNavigator();

const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='Search Recipes' component={SearchRecipesScreen} />
    <Stack.Screen name='SearchResultScreen' component={SearchResultScreen} />
    <Stack.Screen name='LetsCookScreen' component={LetsCookScreen} />
  </Stack.Navigator>
);
export default SearchStack;
