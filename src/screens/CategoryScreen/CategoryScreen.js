import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';

const CategoryScreen = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate('LetsCookScreen');
  };
  return (
    <View style={styles.container}>
      <Text>CategoryScreen</Text>
      <Button title='Go to Lets Coock Screen' onPress={onPressHandler} />
    </View>
  );
};

export default CategoryScreen;
