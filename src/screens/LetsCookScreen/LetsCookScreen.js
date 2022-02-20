import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

const LetsCookScreen = ({navigation}) => {
  const onPressHandler = () => {
    navigation.popToTop();
  };
  return (
    <View style={styles.container}>
      <Text>LetsCookScreen</Text>
      <Button title="Go to RecipesScreen" onPress={onPressHandler} />
    </View>
  );
};

export default LetsCookScreen;
