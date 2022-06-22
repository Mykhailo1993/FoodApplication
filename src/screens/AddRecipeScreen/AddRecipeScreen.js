import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from './styles';

const AddRecipeScreen = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <Text>Add AddRecipe Screen</Text>
      <Button title='Add new' onPress={onPressHandler} />
    </View>
  );
};

export default AddRecipeScreen;
