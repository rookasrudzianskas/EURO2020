import * as React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import { RootTabScreenProps } from '../types';
import tw from "tailwind-react-native-classnames";
// @ts-ignore
import field from '../assets/images/field.jpg';
import {FontAwesome5} from "@expo/vector-icons";
const players: {[key: string]: null[]} = {
    FWD: [null, null, null],
    MID: [null, null, null],
    DEF: [null, null, null, null],
    GKC: [null],
}

const HomeScreen = ({ navigation }: RootTabScreenProps<'TabOne'>) => {
    return (
        <View style={[{backgroundColor: '#4CCF4D'},tw`flex flex-1 items-center`]}>
            <View style={tw`mt-8`}>
                <ImageBackground source={field} style={{width: '100%', aspectRatio: 2/3, backgroundColor: '#4CCF4D', justifyContent: 'space-around', alignItems: 'center'}} resizeMode="contain">
                    {Object.keys(players).map(position => (
                        <View key={position} style={[{justifyContent: 'space-around', width: '100%'},tw`flex flex-row`]}>
                            {/*// @ts-ignore*/}
                            {players[position].map((player) => (
                                <View style={tw`flex items-center justify-center`}>
                                    <FontAwesome5 name="tshirt" size={35} color={player ? "#d170db" : "#5c5c5cbb"} />
                                    <Text style={{backgroundColor: '#333333bb', color: 'white', fontWeight: 'bold', padding: 2, paddingHorizontal: 7, fontSize: 12}}>{position}</Text>
                                </View>
                            ))}
                        </View>
                    ))}
                </ImageBackground>
            </View>
        </View>
  );
}




export default HomeScreen;
