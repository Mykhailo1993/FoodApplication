import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RecipesStack from './RecipesStack';
import SearchStack from './SearchStack';
import FoodStoreStack from './FoodStoreStack';
import FoodShotStack from './FoodShotStack';
import MoreStack from './MoreStack';

const Tab = createBottomTabNavigator();

const AppTabs = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name='Recipes' component={RecipesStack} />
    <Tab.Screen name='Search' component={SearchStack} />
    <Tab.Screen name='FoodStore' component={FoodStoreStack} />
    <Tab.Screen name='FoodShot' component={FoodShotStack} />
    <Tab.Screen name='More' component={MoreStack} />
  </Tab.Navigator>
);

export default AppTabs;
