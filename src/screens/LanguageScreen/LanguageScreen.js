import React, { useEffect } from 'react';
import { View, Platform } from 'react-native';

// import { useDispatch } from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
// import { completed } from '../../store/features/onboarding/onboardingSlice';

import styles from './styles';
import LanguageCard from '../../components/LanguageCard';
import images from '../../assets/images/images';

const LanguageScreen = () => {
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
        // console.log(
        //   'A new FCM message arrived!',
        //   JSON.stringify(remoteMessage),
        // );
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

  // const dispatch = useDispatch();
  // const count = useSelector(state => state);
  // console.log('HERE');
  // console.log(count);
  // const onPressHandler = () => {
  //   navigation.navigate('WelcomeScreen');
  // };

  const onPresCard = () => {
    // console.log('click');
  };

  const countries = [
    { countryFlag: images.flagOfEngland, countryName: 'England' },
    { countryFlag: images.flagOfItaly, countryName: 'Italiano' },
    { countryFlag: images.flagOfSpain, countryName: 'Espanol' },
    { countryFlag: images.flagOfUkraine, countryName: 'Ukraine' },
    // { countryFlag: images.flagOfGermany, countryName: 'Germany' },
    // { countryFlag: images.flagOfFrance, countryName: 'France' },
  ];

  return (
    <View style={styles.container}>
      {/* <Text>LanguageScreen</Text>
      <Button title='Go to Welcome Screen' onPress={onPressHandler} />
      <Button
        title='Completed'
        onPress={() => {
          dispatch(completed());
        }}
      /> */}
      {countries.map(item => (
        <LanguageCard
          // key={item.toString()}
          countryFlag={item.countryFlag}
          countryName={item.countryName}
          onPresCard={onPresCard}
        />
      ))}
    </View>
  );
};

export default LanguageScreen;
