import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from './styles';

const RecipesScreen = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('CategoryScreen');
  };
  return (
    <View style={styles.container}>
      <Text>RecipesScreen</Text>
      <Button onPress={onPressHandler} title="Go to categoty" />
    </View>
  );
};

export default RecipesScreen;
