import * as React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import tw from "tailwind-react-native-classnames";
// @ts-ignore
import field from '../assets/images/field.jpg';
const players = {
    FWD: [],
    MID: [],
    DEF: [],
    GKC: [],
}

const HomeScreen = ({ navigation }: RootTabScreenProps<'TabOne'>) => {
  return (
    <View style={[{backgroundColor: '#4CCF4D'},tw`flex flex-1 items-center`]}>
        <View style={tw`mt-8`}>
            <ImageBackground source={field} style={{width: '100%', aspectRatio: 2/3, backgroundColor: '#4CCF4D'}} resizeMode="contain">
            </ImageBackground>
        </View>
    </View>
  );
}




export default HomeScreen;
