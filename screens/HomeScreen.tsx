import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View, ImageBackground } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import tw from "tailwind-react-native-classnames";
import field from '../assets/images/field.jpg';

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={tw`flex flex-1 items-center justify-center`}>
        <ImageBackground source={field} style={{width: '100%', height: 200}}>

        </ImageBackground>
    </View>
  );
}


