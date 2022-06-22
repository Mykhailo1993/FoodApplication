import React from 'react';
import { Text, View, Button } from 'react-native';
import styles from './styles';

const SettingsScreen = ({ navigation }) => {
  const onPressLanguageHandler = () => {
    navigation.navigate('LanguageScreen');
  };
  const onPressThemeHandler = () => {
    navigation.navigate('SettingsThemeScreen');
  };
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Button title='Selected Language' onPress={onPressLanguageHandler} />
      <Button title='Selected Theme' onPress={onPressThemeHandler} />
    </View>
  );
};

export default SettingsScreen;
