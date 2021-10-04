import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from "react-native";
import tw from "tailwind-react-native-classnames";
// @ts-ignore
import field from "../../assets/images/field.jpg";
import {FontAwesome5} from "@expo/vector-icons";

const players: {[key: string]: null[]} = {
    FWD: [null, null, null],
    MID: [null, null, null],
    DEF: [null, null, null, null],
    GKC: [null],
}

const Field = () => {
    return (
        <View style={tw``}>
            <ImageBackground source={field} style={{width: '100%', aspectRatio: 2/3, backgroundColor: '#4CCF4D', justifyContent: 'space-around', alignItems: 'center'}} resizeMode="contain">
                {Object.keys(players).map(position => (
                        <View key={position} style={[{justifyContent: 'space-around', width: '100%'},tw`flex flex-row`]}>
                            {/*// @ts-ignore*/}
                            {players[position].map((player) => (
                            <TouchableOpacity activeOpacity={0.8}>
                                <View key={player} style={tw`flex items-center justify-center`}>
                                    <FontAwesome5 name="tshirt" size={35} color={player ? "#d170db" : "#5c5c5cbb"} />
                                    <Text style={{backgroundColor: '#333333bb', color: 'white', fontWeight: 'bold', padding: 2, paddingHorizontal: 7, fontSize: 12}}>{position}</Text>
                                </View>
                            </TouchableOpacity>
                            ))}
                        </View>
                ))}
            </ImageBackground>
        </View>
    );
};

export default Field;
