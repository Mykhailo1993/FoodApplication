import React, {useEffect} from 'react';
import {View, Text, Button, Platform} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {completed} from '../../store/features/onboarding/onboardingSlice';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

import styles from './styles';

const LanguageScreen = ({navigation}) => {
  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: '1000',
        channelName: 'My',
        playSound: true,
      },
      a => {
        console.log(a);
      },
    );
  }, []);
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
      if (Platform.OS === 'android') {
        PushNotification.localNotification({
          title: remoteMessage.title,
          message: remoteMessage.title,
          channelId: '1000',
          playSound: true,
        });
      }
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
