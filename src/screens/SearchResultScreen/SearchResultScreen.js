import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';

const SearchResultScreen = ({ navigation }) => {
  const onPressHandler = () => {
    navigation.navigate('LetsCookScreen');
  };
  return (
    <View style={styles.container}>
      <Text>Search Result Screen</Text>
      <Button title='Go to LetsCookScreen' onPress={onPressHandler} />
    </View>
  );
};

export default SearchResultScreen;
