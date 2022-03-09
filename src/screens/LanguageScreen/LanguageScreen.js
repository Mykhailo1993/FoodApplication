import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {completed} from '../../store/features/onboarding/onboardingSlice';
import messaging from '@react-native-firebase/messaging';

import styles from './styles';

const LanguageScreen = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  const dispatch = useDispatch();
  const count = useSelector(state => state);
  console.log('HERE');
  console.log(count);
  const onPressHandler = () => {
    navigation.navigate('WelcomeScreen');
  };

  return (
    <View style={styles.continaer}>
      <Text>LanguageScreen</Text>
      <Button title="Go to Welcome Screen" onPress={onPressHandler} />
      <Button
        title="Completed"
        onPress={() => {
          dispatch(completed());
        }}
      />
    </View>
  );
};

export default LanguageScreen;
