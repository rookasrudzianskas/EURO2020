import * as React from 'react';
import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { RootTabScreenProps } from '../types';
import tw from "tailwind-react-native-classnames";
// @ts-ignore
import field from '../assets/images/field.jpg';
import Field from "../components/Field/Field";
import {MaterialCommunityIcons} from "@expo/vector-icons";



const HomeScreen = ({ navigation }: RootTabScreenProps<'TabOne'>) => {

    const viewPlayers = () => {
        console.warn("DONE");
    }

    return (
        <View style={[{backgroundColor: '#4CCF4D'},tw`flex flex-1 items-center`]}>
            <View style={tw`mt-8 flex flex-1`}>
                <Field />
            </View>

        <View style={tw`flex flex-row items-center mb-16`}>
            <TouchableOpacity activeOpacity={0.8} onPress={viewPlayers}>
                <View style={tw`bg-yellow-500 px-24 py-4 flex flex-1 rounded-full border-2 border-yellow-600`}>
                    <Text style={tw`text-xl font-bold`}>View Players</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8}>
                <View style={tw`bg-yellow-500 ml-5 p-4 rounded-full border-2 border-yellow-600`}>
                    <MaterialCommunityIcons name="fire" size={24} color="black" />
                </View>
            </TouchableOpacity>
        </View>

        </View>
  );
}




export default HomeScreen;
