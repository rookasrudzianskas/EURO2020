import * as React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import { RootTabScreenProps } from '../types';
import tw from "tailwind-react-native-classnames";
// @ts-ignore
import field from '../assets/images/field.jpg';
import {FontAwesome5} from "@expo/vector-icons";
import Field from "../components/Field/Field";



const HomeScreen = ({ navigation }: RootTabScreenProps<'TabOne'>) => {
    return (
        <View style={[{backgroundColor: '#4CCF4D'},tw`flex flex-1 items-center`]}>
            <View style={tw`mt-8`}>
                <Field />
            </View>
        </View>
  );
}




export default HomeScreen;
