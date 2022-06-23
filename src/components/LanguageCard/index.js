import React from 'react';
import { Text, Pressable, Image } from 'react-native';

const LanguageCard = ({ countryFlag, countryName, onPresCard }) => (
  <Pressable
    style={{
      width: 180,
      height: 240,
      backgroundColor: 'white',
      marginHorizontal: 5,
      marginVertical: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
    }}
    onPress={onPresCard}
  >
    <Image source={countryFlag} width={80} height={80} style={{ width: 80, height: 80 }} />
    <Text style={{ marginTop: 50 }}>{countryName}</Text>
  </Pressable>
);

export default LanguageCard;
