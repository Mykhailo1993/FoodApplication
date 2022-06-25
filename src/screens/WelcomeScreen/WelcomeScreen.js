import React from 'react';
import Swiper from '../../components/Swiper';

const WelcomeScreen = ({ navigation }) => {
  const onPressHandler = () => navigation.navigate('AppTabs');
  const checkStep = () => {
    onPressHandler();
  };

  return <Swiper checkStep={checkStep} />;
};

export default WelcomeScreen;
