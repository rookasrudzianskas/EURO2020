import * as React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import tw from "tailwind-react-native-classnames";
// @ts-ignore
import field from '../assets/images/field.jpg';

const HomeScreen = ({ navigation }: RootTabScreenProps<'TabOne'>) => {
  return (
    <View style={tw`flex flex-1 items-center justify-center`}>
        <ImageBackground source={field} style={{width: '100%', aspectRatio: 2/3}} resizeMode="contain">

        </ImageBackground>
    </View>
  );
}




export default HomeScreen;
