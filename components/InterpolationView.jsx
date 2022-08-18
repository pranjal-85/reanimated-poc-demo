import React from 'react';
import { StyleSheet,Text } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Page from './Page';

const WORDS = ["Welcome", "DEs","in","Swiggy"];

export default function InterpolationView() {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <Animated.ScrollView
      style={styles.container}
      horizontal
      onScroll={scrollHandler}
      scrollEventThrottle={10}
    >
      {WORDS.map((title, index) => {
        return (
          <Page key={index} index={index.toString()} title={title} translateX={translateX} />
        )
      })}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});