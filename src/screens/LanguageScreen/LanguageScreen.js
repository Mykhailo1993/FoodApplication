import React, { useEffect } from 'react';
import { View, Platform, SafeAreaView } from 'react-native';

import { useDispatch } from 'react-redux';

import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import { completed } from '../../store/features/onboarding/onboardingSlice';

import styles from './styles';
import LanguageCard from '../../components/LanguageCard';
import images from '../../assets/images/images';

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
        () => {
          // console.log(a);
        },
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

  const countries = [
    { countryFlag: images.flagOfEngland, countryName: 'England', code: 'gb' },
    { countryFlag: images.flagOfUkraine, countryName: 'Ukraine', code: 'ua' },
    { countryFlag: images.flagOfItaly, countryName: 'Italiano', code: 'it' },
    { countryFlag: images.flagOfSpain, countryName: 'Espanol', code: 'es' },
    { countryFlag: images.flagOfGermany, countryName: 'Germany', code: 'de' },
    { countryFlag: images.flagOfFrance, countryName: 'France', code: 'fr' },
  ];

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        {countries.map(item => (
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
