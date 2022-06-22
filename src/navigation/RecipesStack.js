import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RecipesScreen from '../screens/RecipesScreen/RecipesScreen';
import CategoryScreen from '../screens/CategoryScreen/CategoryScreen';
import LetsCookScreen from '../screens/LetsCookScreen/LetsCookScreen';
import ShoppingListScreen from '../screens/ShoppingListScreen/ShoppingListScreen';
import FavoritesScreen from '../screens/FavoritesScreen/FacvoritesScreen';

const Stack = createNativeStackNavigator();

const RecipesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name='RecipesScreen' component={RecipesScreen} />
    <Stack.Screen name='CategoryScreen' component={CategoryScreen} />
    <Stack.Screen name='LetsCookScreen' component={LetsCookScreen} />
    <Stack.Screen name='ShoppingListScreen' component={ShoppingListScreen} />
    <Stack.Screen name='FavoritesScreen' component={FavoritesScreen} />
  </Stack.Navigator>
);
export default RecipesStack;
