import React, { useEffect } from 'react';
import { View, Platform, SafeAreaView } from 'react-native';

import { useDispatch } from 'react-redux';

import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import { completed } from '../../store/features/onboarding/onboardingSlice';

import LanguageCard from '../../components/LanguageCard';

import countriesData from '../../data/countriesData';
import styles from './styles';

const LanguageScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (Platform.OS === 'android') {
      PushNotification.createChannel(
        {
          channelId: '1000',
          channelName: 'My',
          playSound: true,
        },
        () => {},
      );
    }
  }, []);

  useEffect(() => {
    let unsubscribe;
    if (Platform.OS === 'android') {
      unsubscribe = messaging().onMessage(async remoteMessage => {
        if (Platform.OS === 'android') {
          PushNotification.localNotification({
            title: remoteMessage.title,
            message: remoteMessage.title,
            channelId: '1000',
            playSound: true,
          });
        }
      });
    }

    return unsubscribe;
  }, []);

  const onPresCard = code => () => {
    dispatch(completed());
    navigation.navigate('WelcomeScreen', { code });
  };

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        {countriesData.map(item => (
          <LanguageCard
            key={item.code}
            countryFlag={item.countryFlag}
            countryName={item.countryName}
            onPresCard={onPresCard(item.code)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default LanguageScreen;
