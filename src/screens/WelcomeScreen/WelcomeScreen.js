import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

const WelcomeScreen = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('AppTabs');
  };
  return (
    <View style={styles.container}>
      <Text>WelcomeScreen</Text>
      <Button onPress={onPressHandler} title="Go to receipts screen" />
    </View>
  );
};

export default WelcomeScreen;
