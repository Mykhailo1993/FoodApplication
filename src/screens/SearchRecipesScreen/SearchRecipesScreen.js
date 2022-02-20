import React from 'react';
import {Text, View, Button} from 'react-native';
import styles from './styles';

const SearchRecipesScreen = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('SearchResultScreen');
  };
  return (
    <View style={styles.container}>
      <Text>SearchScreen</Text>
      <Button onPress={onPressHandler} title="Go to SearchResult" />
    </View>
  );
};

export default SearchRecipesScreen;
