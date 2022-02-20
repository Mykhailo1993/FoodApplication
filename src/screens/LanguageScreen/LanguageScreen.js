import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';

const LanguageScreen = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('WelcomeScreen');
  };
  return (
    <View style={styles.continaer}>
      <Text>LanguageScreen</Text>
      <Button title="Go to Welcome Screen" onPress={onPressHandler} />
    </View>
  );
};

export default LanguageScreen;
