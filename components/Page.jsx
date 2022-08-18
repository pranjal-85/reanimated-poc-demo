import React from 'react'
import { Text,StyleSheet, Dimensions } from 'react-native'
import { View } from 'react-native';
import Animated, {Extrapolate, interpolate, useAnimatedStyle} from 'react-native-reanimated';
import { runOnJS } from 'react-native-reanimated/lib/reanimated2/core';


const { height, width } = Dimensions.get('window');
const SIZE = width*0.5;


export default function  Page({index,translateX}) {
    const i = parseInt(index);
    const rStyle = useAnimatedStyle(()=>{
        const scale = interpolate( 
            translateX.value,
            [(i-1) * width,(i) * width, (i+1) * width],
            [0,1,0],
            Extrapolate.CLAMP
        );
        const borderRadius = interpolate(
            translateX.value,
            [(i-1) * width,(i) * width, (i+1) * width],
            [0, SIZE / 2, 0],
            Extrapolate.CLAMP
          );
        return {
            borderRadius,
            transform: [{scale}]
        }
    }); 


  return (
    <View style={[styles.pageContainer,{backgroundColor:`rgba(255,127,80,0.${index + 4})`}]}>
        <Animated.View style={[styles.square,rStyle]} / >
    </View>
  )
}


const styles = StyleSheet.create({
    pageContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width
      },
      square: {
        width: SIZE,
        height: SIZE,
        backgroundColor: 'rgba(255,127,80,0.4)',
      },
}
)