import React from 'react';
import { Text, Pressable, Image } from 'react-native';
import styles from './style';

const LanguageCard = ({ countryFlag, countryName, onPresCard }) => (
  <Pressable style={styles.container} onPress={onPresCard}>
    <Image source={countryFlag} width={80} height={80} style={styles.image} />
    <Text style={styles.countryText}>{countryName}</Text>
  </Pressable>
);

export default LanguageCard;
