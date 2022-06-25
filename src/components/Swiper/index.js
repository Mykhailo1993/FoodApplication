import React, { useState } from 'react';
import { View, ScrollView, useWindowDimensions, Image, Text } from 'react-native';

import welcomeData from '../../data/welcomeData';
import styles from './style';

const Swiper = ({ checkStep }) => {
  const { width: screenWidth } = useWindowDimensions();
  const [activeSwipe, setActiveSwipe] = useState(0);

  const onScroll = ({ nativeEvent }) => {
    const currentSwipe = nativeEvent.contentOffset.x;
    if (currentSwipe === 0) setActiveSwipe(0);
    if (currentSwipe === screenWidth) setActiveSwipe(1);
    if (currentSwipe === screenWidth * 2) setActiveSwipe(2);
    if (currentSwipe === screenWidth * 3) setActiveSwipe(3);
    if (currentSwipe === screenWidth * 4) setActiveSwipe(4);
    if (currentSwipe === screenWidth * 5) {
      setActiveSwipe(5);
      checkStep();
    }
  };

  const renderImages = () =>
    welcomeData.map(item => (
      <View key={item.id} style={[styles.itemContainer, { width: screenWidth }]}>
        <Image source={item.img} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    ));

  const renderDots = () =>
    welcomeData.map((item, index) => (
      <View
        key={item.id}
        style={[styles.dot, activeSwipe === index && { backgroundColor: 'red' }]}
      />
    ));

  return (
    <>
      <View style={styles.imageContainer}>
        <ScrollView
          scrollEventThrottle={1000}
          showsHorizontalScrollIndicator={false}
          onScroll={onScroll}
          style={styles.scrollViewStyle}
          horizontal
          bounces={false}
          decelerationRate='fast'
          snapToInterval={screenWidth}
        >
          {renderImages()}
        </ScrollView>
      </View>
      <View style={styles.dotContainer}>{renderDots()}</View>
    </>
  );
};

export default Swiper;
