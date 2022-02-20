import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

const FoodStoreScreen = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('SearchResultScreen');
  };
  return (
    <View style={styles.container}>
      <Text>FoodStoreScreen</Text>
      <Button title="Go to SearchResult Screen" onPress={onPressHandler} />
    </View>
  );
};

export default FoodStoreScreen;
