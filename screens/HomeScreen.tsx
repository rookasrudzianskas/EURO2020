import * as React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import tw from "tailwind-react-native-classnames";
// @ts-ignore
import field from '../assets/images/field.jpg';
const players = {
    FWD: [null, null, null],
    MID: [null, null, null],
    DEF: [null, null, null, null],
    GKC: [null],
}

const HomeScreen = ({ navigation }: RootTabScreenProps<'TabOne'>) => {
  return (
    <View style={[{backgroundColor: '#4CCF4D'},tw`flex flex-1 items-center`]}>
        <View style={tw`mt-8`}>
            <ImageBackground source={field} style={{width: '100%', aspectRatio: 2/3, backgroundColor: '#4CCF4D', justifyContent: 'center', alignItems: 'center'}} resizeMode="contain">
                {Object.keys(players).map(position => (
                    <Text key={position}>{position}</Text>
                ))}
            </ImageBackground>
        </View>
    </View>
  );
}




export default HomeScreen;
