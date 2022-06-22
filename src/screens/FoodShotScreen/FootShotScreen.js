import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

const FoodShotScreen = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate('AddRecipeScreen');
  };
  return (
    <View style={styles.container}>
      <Text>Food Shot</Text>
      <Button title='Add Recipes' onPress={onPressHandler} />
    </View>
  );
};

export default FoodShotScreen;
