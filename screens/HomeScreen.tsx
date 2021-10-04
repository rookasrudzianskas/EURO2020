import * as React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import { RootTabScreenProps } from '../types';
import tw from "tailwind-react-native-classnames";
// @ts-ignore
import field from '../assets/images/field.jpg';
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
                                <Text>Player</Text>
                            ))}
                        </View>
                    ))}
                </ImageBackground>
            </View>
        </View>
  );
}




export default HomeScreen;
